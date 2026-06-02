from __future__ import annotations

import os
import smtplib
from email.message import EmailMessage
from typing import Optional

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, Field

SMTP_HOST = os.environ.get("SMTP_HOST", "smtp.gmail.com")
SMTP_PORT = int(os.environ.get("SMTP_PORT", "587"))
SMTP_USER = os.environ.get("SMTP_USER", "methodslab.team@gmail.com")
SMTP_PASSWORD = os.environ.get("SMTP_PASSWORD")
CONTACT_TO_EMAIL = os.environ.get("CONTACT_TO_EMAIL", "methodslab.team@gmail.com")

if not SMTP_PASSWORD:
    raise RuntimeError(
        "Missing required environment variable SMTP_PASSWORD. "
        "Set a Gmail App Password in the backend environment."
    )

app = FastAPI(title="Methods Lab Contact API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["POST", "OPTIONS"],
    allow_headers=["*"],
)


class ContactPayload(BaseModel):
    name: str
    email: EmailStr
    company: Optional[str] = None
    budget: Optional[str] = None
    projectType: Optional[str] = None
    message: str
    website: Optional[str] = Field(None, max_length=0)


@app.get("/api/health")
async def health() -> dict[str, str]:
    return {"status": "ok"}


@app.post("/api/contact")
async def contact(payload: ContactPayload) -> dict[str, bool]:
    if payload.website:
        return {"ok": True}

    message = EmailMessage()
    message["Subject"] = f"[Methods Lab] Contact form submission from {payload.name}"
    message["From"] = SMTP_USER
    message["To"] = CONTACT_TO_EMAIL
    message.set_content(
        f"Name: {payload.name}\n"
        f"Email: {payload.email}\n"
        f"Company: {payload.company or 'N/A'}\n"
        f"Budget: {payload.budget or 'N/A'}\n"
        f"Project type: {payload.projectType or 'N/A'}\n"
        f"Message:\n{payload.message}\n"
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
