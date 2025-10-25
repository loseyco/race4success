@echo off
echo 🏁 Setting up Race4Success...

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js 18+ first.
    pause
    exit /b 1
)

echo ✅ Node.js version:
node --version

REM Install dependencies
echo 📦 Installing dependencies...
npm install

REM Create .env file if it doesn't exist
if not exist .env (
    echo 📝 Creating .env file...
    copy env.example .env
    echo ⚠️  Please edit .env file with your configuration
)

REM Build the application
echo 🔨 Building the application...
npm run build

echo ✅ Setup complete!
echo.
echo 🚀 To start the development server:
echo    npm run dev
echo.
echo 🌐 To start the production server:
echo    npm start
echo.
echo 📊 To view the application:
echo    http://localhost:3000
echo.
echo 🏁 Race4Success is ready to go!
pause
