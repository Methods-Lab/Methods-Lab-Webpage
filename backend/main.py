from __future__ import annotations

import os
import smtplib
import time
from email.message import EmailMessage
from pathlib import Path
from typing import Optional

from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, Field

# Load backend/.env when running locally. On Vercel/production the platform
# injects these as real environment variables, so this is a no-op there.
load_dotenv(Path(__file__).resolve().parent / ".env")

SMTP_HOST = os.environ.get("SMTP_HOST", "smtp.gmail.com")
SMTP_PORT = int(os.environ.get("SMTP_PORT", "587"))
SMTP_USER = os.environ.get("SMTP_USER", "methodslab.team@gmail.com")
SMTP_PASSWORD = os.environ.get("SMTP_PASSWORD")
CONTACT_TO_EMAIL = os.environ.get("CONTACT_TO_EMAIL", "methodslab.team@gmail.com")

# Comma-separated list of allowed browser origins. "*" allows any origin.
ALLOWED_ORIGINS = [
    o.strip()
    for o in os.environ.get("ALLOWED_ORIGINS", "*").split(",")
    if o.strip()
]

app = FastAPI(title="Methods Lab Contact API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=False,
    allow_methods=["POST", "GET", "OPTIONS"],
    allow_headers=["*"],
)

# Naive in-memory rate limit (per IP). Resets on restart; fine for a low-traffic
# contact form. Swap for Redis/KV if you need durable limits across instances.
_last_seen: dict[str, float] = {}
_RATE_LIMIT_SECONDS = 20


class ContactPayload(BaseModel):
    name: str = Field(min_length=1, max_length=120)
    email: EmailStr
    company: Optional[str] = Field(default=None, max_length=120)
    budget: Optional[str] = Field(default=None, max_length=60)
    projectType: Optional[str] = Field(default=None, max_length=60)
    message: str = Field(min_length=10, max_length=4000)
    # Honeypot: real users never fill this. We accept any value here (instead of
    # rejecting it) so the handler can silently "succeed" without sending email,
    # which keeps bots from learning the field is validated.
    website: Optional[str] = Field(default=None, max_length=200)


@app.get("/api/health")
async def health() -> dict[str, object]:
    return {"status": "ok", "email_configured": bool(SMTP_PASSWORD)}


@app.post("/api/contact")
async def contact(payload: ContactPayload, request: Request) -> dict[str, bool]:
    # Honeypot tripped -> pretend success so bots don't learn anything.
    if payload.website:
        return {"ok": True}

    if not SMTP_PASSWORD:
        raise HTTPException(
            status_code=503,
            detail="Email is not configured on the server. Please email methodslab.team@gmail.com directly.",
        )

    client_ip = request.client.host if request.client else "unknown"
    now = time.monotonic()
    last = _last_seen.get(client_ip, 0.0)
    if now - last < _RATE_LIMIT_SECONDS:
        raise HTTPException(
            status_code=429,
            detail="Please wait a few seconds before sending another message.",
        )
    _last_seen[client_ip] = now

    message = EmailMessage()
    message["Subject"] = f"[Methods Lab] New inquiry from {payload.name}"
    message["From"] = SMTP_USER
    message["To"] = CONTACT_TO_EMAIL
    message["Reply-To"] = str(payload.email)
    message.set_content(
        f"New inquiry from the Methods Lab website\n"
        f"----------------------------------------\n"
        f"Name: {payload.name}\n"
        f"Email: {payload.email}\n"
        f"Company: {payload.company or 'N/A'}\n"
        f"Budget: {payload.budget or 'N/A'}\n"
        f"Project type: {payload.projectType or 'N/A'}\n"
        f"\nMessage:\n{payload.message}\n"
    )

    try:
        with smtplib.SMTP(SMTP_HOST, SMTP_PORT, timeout=30) as smtp:
            smtp.starttls()
            smtp.login(SMTP_USER, SMTP_PASSWORD)
            smtp.send_message(message)
    except smtplib.SMTPException as exc:
        raise HTTPException(
            status_code=502,
            detail="Failed to send email. Please contact us directly at methodslab.team@gmail.com.",
        ) from exc

    return {"ok": True}
