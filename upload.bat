@echo off
echo 🔨 Building your Digital Platform website...
call npm run build

if %errorlevel% == 0 (
    echo ✅ Build successful!
    echo.
    echo 📁 Your website files are ready in the 'dist' folder
    echo.
    echo 🌐 Next steps for HostGator upload:
    echo 1. Login to your HostGator cPanel
    echo 2. Open File Manager
    echo 3. Go to public_html folder
    echo 4. Upload ALL files from the 'dist' folder
    echo 5. Make sure index.html is in the root of public_html
    echo.
    echo 📝 See DEPLOYMENT.md for detailed instructions
    echo.
    echo 🎉 Your professional website will be live!
) else (
    echo ❌ Build failed. Please check for errors above.
)

pause
