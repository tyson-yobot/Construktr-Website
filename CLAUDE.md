# CLAUDE.md - Construktr Website
# Automate AI LLC | Last verified: April 9, 2026
# READ THIS ENTIRE FILE BEFORE TOUCHING ANYTHING.

=======================================================================
SECTION 1: GUARDRAILS — THE FIVE COMMANDMENTS
(verbatim from C:\dev\GUNNAR_GUARDRAILS.md — that file is authoritative)
=======================================================================

1. NEVER delete or overwrite any file without reading it first.
   Read -> understand -> modify in memory -> validate -> write -> verify.
   No exceptions. Not even for "cleanup" or "simplification."

2. NEVER run recursive deletes above the repo root.
   No rm -rf, no Remove-Item -Recurse on directories above the
   current repo. One wrong path destroys everything.

3. NEVER run destructive git commands unless explicitly in the prompt.
   Forbidden without explicit written instruction from Tyson:
     git reset --hard
     git clean -fd
     git push --force
     git rebase (on shared branches)
     git checkout [branch] (switching branches mid-session)

4. NEVER modify files outside the current repo without explicit
   instruction from Tyson in the current prompt.
   If a fix requires changes to another repo, STOP and report.
   Do not cross repo boundaries autonomously.

5. NEVER write an empty or near-empty file over an existing file.
   The edit-in-place protocol is mandatory:
     Step 1: Read the entire existing file
     Step 2: Understand why every line exists
     Step 3: Modify only what needs changing (in memory)
     Step 4: Validate the complete new content makes sense
     Step 5: Write the file using WriteAllText UTF-8 no-BOM
     Step 6: Immediately read back the first 10 lines to verify
     Step 7: Verify line count is not drastically lower than before

EDIT-IN-PLACE PROTOCOL — MANDATORY FOR ALL FILE WRITES:

  READ:     Get-Content [file] -Raw
  PLAN:     State exactly what you are changing and why
  MODIFY:   Make the change in memory only
  VALIDATE: Confirm the complete file content makes sense
  WRITE:    [System.IO.File]::WriteAllText(path, content,
              [System.Text.UTF8Encoding]::new($false))
  VERIFY:   Get-Content [file] | Select-Object -First 10
            Get-Content [file] | Measure-Object -Line

Never use Set-Content or Out-File for source or markdown files.
They add BOM which corrupts encoding.

=======================================================================
SECTION 2: REPO IDENTITY
=======================================================================

What this repo IS:
  Construktr marketing website and public-facing web presence
  Full-stack: React 18 frontend + Express 4 backend in one repo
  Vercel deployment (vercel.json present)
  Layout: client/ (frontend) + server/ (backend) + shared/ (types)

What this repo is NOT:
  NOT the app dashboard (C:\dev\construktr-platform — React 19 + Vite)
  NOT the mobile app (C:\dev\construktr\mobile)
  NOT the API server (C:\dev\construktr-api)
  NOT the growth engine (C:\dev\construktr\growth-engine)
  Never touch C:\dev\transformr — separate product, out of scope
  Never touch C:\dev\automate-ai-command-center — separate product

Location:     C:\dev\construktr-website
Branch:       dev
Remote:       https://github.com/tyson-yobot/Construktr-Website.git
Deployment:   Vercel

Note on origin: This project was scaffolded from a Replit template
  (package.json name is "rest-express", replit.md present).
  It is now a standalone Construktr website repo. Ignore Replit-specific
  files (replit.md, @replit/vite-plugin-*) — they are inert.

Package manager: This repo uses npm (package-lock.json present),
  NOT pnpm. Use npm install, npm run dev, etc.

Start every session:
  cd C:\dev\construktr-website
  git branch --show-current    (must show "dev" — if "main", STOP)
  git status

=======================================================================
SECTION 3: TECH STACK — VERIFIED FROM PACKAGE.JSON APRIL 9, 2026
=======================================================================

  Runtime:       Node.js 20.19.4 (engines: "node": "20.19.4")
  Language:      TypeScript 5.6.3
  Frontend:      React ^18.3.1 + Vite ^5.4.19
                 (React 18 — not React 19 like the platform)
  Backend:       Express ^4.21.2 (Express 4 — same repo as frontend)
  Database:      @neondatabase/serverless ^0.10.4 (NeonDB — NOT Railway)
  ORM:           drizzle-orm ^0.39.1 (website has its own schema)
  Auth:          passport ^0.7.0 + express-session
  UI:            Radix UI (full component suite)
  Styling:       Tailwind CSS ^3.4.17 (v3)
  Forms:         react-hook-form ^7.55.0 + zod ^3.24.2
  Package mgr:   npm (package-lock.json — NOT pnpm for this repo)

Database note: This website uses NeonDB (serverless Postgres),
  SEPARATE from the Railway PostgreSQL used by construktr-api.
  The website has its own drizzle schema for website-specific data
  (contact forms, lead capture, etc.).
  NEVER connect the website to the Railway app database.
  NEVER import app tables (jobs, customers, companies) into website code.

=======================================================================
SECTION 4: ARCHITECTURE RULES
=======================================================================

DATABASE SCOPE:
  The website's NeonDB is for website-only data:
    Contact form submissions, lead capture, marketing data
  NEVER: query Railway PostgreSQL from website code
  NEVER: import drizzle config from construktr-api
  NEVER: use DATABASE_URL pointing to Railway in this repo

APP DATA BOUNDARY:
  If the website needs to display any app data (e.g., a customer
  portal or status page), it must call construktr-api endpoints.
  Never query the app database directly from this repo.

SCHEMA CHANGES:
  npm run db:push    (drizzle-kit push — website schema only)

=======================================================================
SECTION 5: ENVIRONMENT SETUP AND COMMON COMMANDS
=======================================================================

Install:
  cd C:\dev\construktr-website
  npm install          (this repo uses npm, not pnpm)

Dev server:
  npm run dev          (NODE_ENV=development tsx server/index.ts)

Build:
  npm run build        (vite build + esbuild server bundle)

TypeScript check — USE THIS EXACTLY:
  npx tsc --noEmit --pretty
  (npm run check also works — calls tsc directly)

Fallback if npx returns no output:
  npx tsc --noEmit --pretty > C:\dev\tsc_check.txt 2>&1
  Get-Content C:\dev\tsc_check.txt | Select-String "error TS"

Schema changes (website NeonDB only):
  npm run db:push

=======================================================================
SECTION 6: POWERSHELL RULES
=======================================================================

Never use in PowerShell commands:
  @   ||   &&   ` (backtick)   REM
Each command on its own line.
cd on its own line before every command block.
Never chain risky commands together.

File writes — always use:
  [System.IO.File]::WriteAllText(
    "C:\path\to\file",
    $content,
    [System.Text.UTF8Encoding]::new($false)
  )

Never use Set-Content or Out-File for source or .md files.
Never use taskkill, Stop-Process, kill -9, pkill.
If a port is in use, tell Tyson and wait — do not kill processes.

=======================================================================
SECTION 7: DO NOT TOUCH
=======================================================================

  package.json       Dependencies locked. Surgical edits only.
  package-lock.json  Managed by npm. Never edit manually.
  vite.config.ts     Build config. Read before any change.
  tsconfig.json      Only add paths if needed.
  drizzle.config.ts  Website schema config. Read before any change.
  .env               Read-only unless explicitly directed by Tyson.
  vercel.json        Deployment config. Do not modify without approval.

Do not add packages without Tyson approval.
Do not commit directly to main — always work on dev.

=======================================================================
SECTION 8: INTEGRATION STANDARDS
=======================================================================

  Social publishing: Zernio (@zernio/node)  NOT Postiz
  Support tickets:   Zendesk               NOT Chatwoot
  Email:             SendGrid              NOT Mailchimp
  CRM:               HubSpot               NOT Salesforce

  Before adding any third-party service:
  Read C:\dev\construktr-api\INTEGRATION_STANDARDIZATION_AUDIT.md

=======================================================================
SECTION 9: RECOVERY PROCEDURES
=======================================================================

If something goes wrong:
  1. git status              — check what changed
  2. git reflog --oneline -20  — find last good state
  3. git diff HEAD~1 HEAD -- [file]  — see what changed
  4. git checkout [HASH] -- [file]   — restore single file
  5. STOP and tell Tyson if unsure

STOP and ask Tyson if:
  - Task requires cross-repo changes
  - TypeScript error count increases after a change
  - About to connect to Railway or app-tier database
  - Anything seems wrong or unclear

PROCEED without asking if:
  - Adding new page/component files
  - Fixing TypeScript errors that pre-existed your session
  - Updating marketing copy or documentation
