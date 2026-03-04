# Construktr Website - Deploy to Vercel via GitHub Push
# Run this in PowerShell from: C:\dev\Construktr-Website

Write-Host "🚀 Deploying Construktr Website..." -ForegroundColor Cyan

# Check git status
Write-Host "`n📋 Checking git status..." -ForegroundColor Yellow
git status

# Add all changes
Write-Host "`n➕ Adding changes..." -ForegroundColor Yellow
git add .

# Commit with timestamp
$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm"
$commitMsg = "fix: ensure legal pages (privacy/terms/support) are deployed - $timestamp"
Write-Host "`n💾 Committing: $commitMsg" -ForegroundColor Yellow
git commit -m $commitMsg

# Push to GitHub (triggers Vercel auto-deploy)
Write-Host "`n🔼 Pushing to GitHub..." -ForegroundColor Yellow
git push origin main

Write-Host "`n✅ Pushed to GitHub! Vercel will auto-deploy." -ForegroundColor Green
Write-Host "📊 Monitor deployment: https://vercel.com/tyson-yobots-projects/construktr-website" -ForegroundColor Cyan
Write-Host "`n🔗 Once deployed, test URLs:" -ForegroundColor Cyan
Write-Host "   • https://construktr.ai/privacy" -ForegroundColor White
Write-Host "   • https://construktr.ai/terms" -ForegroundColor White
Write-Host "   • https://construktr.ai/support" -ForegroundColor White

Write-Host "`n⏱️  Deployment typically takes 2-3 minutes." -ForegroundColor Yellow
