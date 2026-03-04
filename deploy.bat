@echo off
cd /d C:\dev\Construktr-Website
git add .
git commit -m "fix: deploy legal pages to production"
git push origin main
echo.
echo Deployment triggered! Check Vercel: https://vercel.com/tyson-yobots-projects/construktr-website
pause
