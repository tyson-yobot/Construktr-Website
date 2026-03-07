@echo off
cd /d C:\dev\Construktr-Website
git add DEPLOY_TRIGGER.txt deploy.bat trigger-deploy.bat deploy-website.ps1 .gitignore
git commit -m "trigger: force Vercel rebuild for dev branch deployment"
git push origin dev
echo.
echo ================================================================================
echo Vercel rebuild triggered!
echo Monitor: https://vercel.com/tyson-yobots-projects/construktr-website
echo ETA: 2-3 minutes
echo.
echo After deployment, test:
echo   - https://construktr.ai/privacy
echo   - https://construktr.ai/terms  
echo   - https://construktr.ai/support
echo ================================================================================
