#!/usr/bin/env python3
"""Methods Lab portfolio — local development runner.

Starts BOTH halves of the app with one command:

  * Backend  : FastAPI (contact API)  ->  http://localhost:8000
  * Frontend : Vite dev server (SPA)  ->  http://localhost:5173

The Vite dev server proxies /api/* to the backend, so open the frontend URL
(http://localhost:5173) in your browser and the contact form will reach the API.

Usage:
    python main.py

Press Ctrl+C to stop both servers.

First-time setup (run once):
    Backend:   cd backend  && python -m venv .venv
               .venv\\Scripts\\activate            (Windows)
               source .venv/bin/activate           (macOS/Linux)
               pip install -r requirements.txt
               # copy .env.example -> .env and fill in SMTP_PASSWORD
    Frontend:  cd frontend && npm install
"""

from __future__ import annotations

import os
import signal
import subprocess
import sys
import time
from pathlib import Path

ROOT = Path(__file__).resolve().parent
BACKEND_DIR = ROOT / "backend"
FRONTEND_DIR = ROOT / "frontend"
IS_WINDOWS = os.name == "nt"


def backend_python() -> str:
    """Prefer the backend virtualenv interpreter if it exists."""
    venv = BACKEND_DIR / ".venv" / ("Scripts" if IS_WINDOWS else "bin") / (
        "python.exe" if IS_WINDOWS else "python"
    )
    return str(venv) if venv.exists() else sys.executable


def start_backend() -> subprocess.Popen:
    py = backend_python()
    print(f"[runner] starting backend: {py} -m uvicorn main:app --port 8000")
    return subprocess.Popen(
        [py, "-m", "uvicorn", "main:app", "--reload", "--port", "8000"],
        cwd=str(BACKEND_DIR),
    )


def start_frontend() -> subprocess.Popen:
    npm = "npm.cmd" if IS_WINDOWS else "npm"
    print(f"[runner] starting frontend: {npm} run dev")
    return subprocess.Popen(
        [npm, "run", "dev"],
        cwd=str(FRONTEND_DIR),
        shell=IS_WINDOWS,  # npm on Windows resolves via the shell
    )


def main() -> int:
    if not (BACKEND_DIR / ".env").exists():
        print(
            "[runner] WARNING: backend/.env not found. The contact form will return "
            "503 until you create it from backend/.env.example with a real "
            "SMTP_PASSWORD.\n"
        )

    procs: list[subprocess.Popen] = []
    try:
        procs.append(start_backend())
        time.sleep(1.5)  # let the API bind before the frontend proxy starts hitting it
        procs.append(start_frontend())

        print(
            "\n[runner] Both servers launching...\n"
            "[runner]   Frontend: http://localhost:5173  <-- open this\n"
            "[runner]   Backend : http://localhost:8000/api/health\n"
            "[runner] Press Ctrl+C to stop.\n"
        )

        # Block until either process exits.
        while True:
            for p in procs:
                code = p.poll()
                if code is not None:
                    print(f"[runner] a process exited (code {code}); shutting down.")
                    return code or 0
            time.sleep(0.5)
    except KeyboardInterrupt:
        print("\n[runner] Ctrl+C received, stopping servers...")
        return 0
    finally:
        for p in procs:
            if p.poll() is None:
                try:
                    if IS_WINDOWS:
                        p.send_signal(signal.CTRL_BREAK_EVENT)  # type: ignore[attr-defined]
                    p.terminate()
                except Exception:
                    pass
        for p in procs:
            try:
                p.wait(timeout=8)
            except Exception:
                p.kill()


if __name__ == "__main__":
    raise SystemExit(main())
