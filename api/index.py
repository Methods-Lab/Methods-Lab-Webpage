"""Vercel serverless entry point for the FastAPI backend.

Vercel auto-detects any `.py` file under `/api` as a Python serverless function.
`vercel.json` rewrites every `/api/*` request to this file, and the FastAPI app
(which defines its routes under `/api/...`) handles them.

We re-export the app from `backend/main.py` so local development
(`python main.py` / `uvicorn main:app`) and production share one implementation.
`backend/**` is bundled into this function via `functions.includeFiles` in
vercel.json.
"""

import sys
from pathlib import Path

# Put the repo root on the import path so `backend` resolves (PEP 420 namespace).
ROOT = Path(__file__).resolve().parent.parent
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))

from backend.main import app  # noqa: E402

# `app` is the ASGI application Vercel serves.
__all__ = ["app"]
