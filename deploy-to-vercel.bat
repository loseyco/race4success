@echo off
echo 🏁 Race4Success - Deploy to Vercel
echo.

REM Check if git is initialized
if not exist .git (
    echo 📦 Initializing Git repository...
    git init
    git add .
    git commit -m "Initial Race4Success setup"
    echo ✅ Git repository initialized
) else (
    echo 📝 Adding changes to Git...
    git add .
    git commit -m "Update Race4Success for Vercel deployment"
    echo ✅ Changes committed
)

echo.
echo 🚀 Ready to push to GitHub and deploy to Vercel!
echo.
echo Next steps:
echo 1. Push to GitHub: git push origin main
echo 2. Go to: https://vercel.com/pj-loseys-projects/race4success
echo 3. Connect your GitHub repository
echo 4. Set environment variables
echo 5. Click Deploy!
echo.
echo 📖 For detailed instructions, see: docs/VERCEL_QUICK_START.md
echo.
pause
