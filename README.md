# Methods Lab — Portfolio Website

Applied AI & ML studio portfolio. Split into a **React (Vite) frontend** and a
**Python (FastAPI) backend** that powers the contact form via Gmail SMTP.

```
.
├── frontend/        # React + Vite SPA (TanStack Router)
│   ├── src/
│   ├── public/      # static assets incl. sitemap.xml, robots.txt, favicon
│   └── package.json
├── backend/         # FastAPI contact API (sends email via Gmail SMTP)
│   ├── main.py      # exposes `app`; routes: /api/health, /api/contact
│   ├── requirements.txt
│   ├── .env.example # copy to .env and fill in the real SMTP password
│   └── .env         # YOUR SECRETS — git-ignored, never committed
├── main.py          # dev runner: starts backend + frontend together
├── vercel.json      # Vercel monorepo build + routing config
└── README.md
```

## How the contact form works

1. Visitor submits the form on `/contact`.
2. The SPA `POST`s the data to `/api/contact`.
3. FastAPI validates it and sends an email via Gmail SMTP to
   **methodslab.team@gmail.com** (honeypot + basic rate limiting included).

In local dev, Vite proxies `/api/*` to the backend on `:8000`. In production on
Vercel, `/api/*` is same-origin and routed to the Python function — so no API
base URL needs to be configured.

## Local development

### 1. One-time setup

Backend:

```bash
cd backend
python -m venv .venv
# Windows:
.venv\Scripts\activate
# macOS/Linux:
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env          # then edit .env and set SMTP_PASSWORD
```

Frontend:

```bash
cd frontend
npm install
```

### 2. Run everything with one command

From the repo root:

```bash
python main.py
```

Then open **http://localhost:5173**. The backend runs on
http://localhost:8000 (health check: `/api/health`).

> Prefer to run them separately?
> - Backend: `cd backend && uvicorn main:app --reload --port 8000`
> - Frontend: `cd frontend && npm run dev`

## Environment variables

These live in `backend/.env` locally (git-ignored). The contact form returns
**503** until `SMTP_PASSWORD` is set.

| Variable           | Required | Default                     | Notes                                            |
| ------------------ | -------- | --------------------------- | ------------------------------------------------ |
| `SMTP_HOST`        | no       | `smtp.gmail.com`            |                                                  |
| `SMTP_PORT`        | no       | `587`                       | STARTTLS                                         |
| `SMTP_USER`        | no       | `methodslab.team@gmail.com` | The Gmail account that sends mail                |
| `SMTP_PASSWORD`    | **yes**  | —                           | Gmail **App Password** (16 chars, no spaces)     |
| `CONTACT_TO_EMAIL` | no       | `methodslab.team@gmail.com` | Where inquiries are delivered                    |
| `ALLOWED_ORIGINS`  | no       | `*`                         | Comma-separated allowed origins for CORS         |

### Getting a Gmail App Password

1. Enable 2-Step Verification on the Google account.
2. Go to Google Account → Security → App passwords.
3. Generate one, then paste the 16-character value (spaces removed) into
   `SMTP_PASSWORD`.

## Deploying to Vercel

This repo is configured for Vercel (`vercel.json`): the frontend is built as a
static SPA and the backend runs as a Python serverless function.

1. Import the repo into Vercel.
2. In **Project → Settings → Environment Variables**, add the same variables as
   above — at minimum **`SMTP_PASSWORD`** (and `SMTP_USER` /
   `CONTACT_TO_EMAIL` if different from the defaults). The local `.env` file is
   git-ignored, so it is **not** deployed; Vercel needs them set here.
3. Deploy. `/api/*` hits the FastAPI function; everything else serves the SPA.

> Note: this is a React + FastAPI app. It is **not** a Streamlit app and cannot
> run on Streamlit Community Cloud — Vercel (or any host that serves static
> files + a Python function) is the right target.
