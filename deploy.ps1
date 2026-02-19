# ============================================================
# deploy.ps1 — One-click deploy to GitHub Pages
# ============================================================
# USAGE: Right-click -> Run with PowerShell
# OR:    Open terminal in this folder and run: .\deploy.ps1
# ============================================================

$ErrorActionPreference = "Stop"

# ── CONFIGURE THIS ──────────────────────────────────────────
$GITHUB_USERNAME = "Varugowdatp"
$REPO_NAME       = "Varun_Portfolio"
# ────────────────────────────────────────────────────────────

$REMOTE_URL = "https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"

Write-Host ""
Write-Host "===================================================" -ForegroundColor Cyan
Write-Host "  Varun Portfolio — Deploy to GitHub Pages" -ForegroundColor Cyan
Write-Host "===================================================" -ForegroundColor Cyan
Write-Host ""

# Step 1: Install deps if needed
if (-Not (Test-Path "node_modules")) {
    Write-Host "[1/4] Installing dependencies..." -ForegroundColor Yellow
    npm install
} else {
    Write-Host "[1/4] node_modules found, skipping install." -ForegroundColor Green
}

# Step 2: Build
Write-Host ""
Write-Host "[2/4] Building project..." -ForegroundColor Yellow
npm run build

if (-Not (Test-Path "dist")) {
    Write-Host "Build FAILED — dist folder not found." -ForegroundColor Red
    exit 1
}
Write-Host "Build SUCCESS." -ForegroundColor Green

# Step 3: Git init + commit
Write-Host ""
Write-Host "[3/4] Setting up Git..." -ForegroundColor Yellow

if (-Not (Test-Path ".git")) {
    git init
    Write-Host "Git initialized." -ForegroundColor Green
}

# Set remote
$remotes = git remote 2>&1
if ($remotes -notcontains "origin") {
    git remote add origin $REMOTE_URL
    Write-Host "Remote added: $REMOTE_URL" -ForegroundColor Green
} else {
    git remote set-url origin $REMOTE_URL
    Write-Host "Remote updated: $REMOTE_URL" -ForegroundColor Green
}

# Configure git user if not set
$gitEmail = git config --global user.email
$gitName  = git config --global user.name
if (-Not $gitEmail) { git config --global user.email "varu0616@gmail.com" }
if (-Not $gitName)  { git config --global user.name  "Varun T P" }

git add .
git commit -m "feat: portfolio — responsive UI, no lovable tag" 2>&1 | Out-Null
git branch -M main

# Step 4: Push
Write-Host ""
Write-Host "[4/4] Pushing to GitHub..." -ForegroundColor Yellow
Write-Host "(A browser window or credential prompt may open — log in with your GitHub account)" -ForegroundColor Cyan
Write-Host ""

git push -u origin main --force

Write-Host ""
Write-Host "===================================================" -ForegroundColor Green
Write-Host "  DONE! Code pushed to GitHub." -ForegroundColor Green
Write-Host "===================================================" -ForegroundColor Green
Write-Host ""
Write-Host "  Next steps to go live:" -ForegroundColor White
Write-Host "  1. Go to: https://github.com/$GITHUB_USERNAME/$REPO_NAME/settings/pages" -ForegroundColor White
Write-Host "  2. Under 'Source' -> select 'GitHub Actions'" -ForegroundColor White
Write-Host "  3. Save — GitHub will auto-build and deploy!" -ForegroundColor White
Write-Host ""
Write-Host "  Your site will be live at:" -ForegroundColor White
Write-Host "  https://$GITHUB_USERNAME.github.io/$REPO_NAME/" -ForegroundColor Cyan
Write-Host ""
