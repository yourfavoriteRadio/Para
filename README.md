Git Workflow

1. Main branches

master → production-ready code only.

dev → integration branch where you merge features before they’re polished for main.

2. Feature branches

Branch off dev for new work.

Naming convention:

feature/<short-description> → new features

e.g. feature/cart-page, feature/checkout-api

fix/<short-description> → bug fixes

e.g. fix/cart-badge-count, fix/navbar-responsiveness

chore/<short-description> → maintenance / configs

e.g. chore/setup-eslint, chore/deploy-config

3. Workflow

Start new work → git checkout -b feature/cart-page dev

Work + commit → push branch to remote

When ready → open a PR/MR into dev

After testing/staging → merge dev → main for production

4. Optional hotfixes

If something is broken in production (master), branch from main:

hotfix/fix-login-crash

Then merge into both main and dev so they stay in sync.
