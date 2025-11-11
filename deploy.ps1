# Quick Deployment Script for PowerShell

Write-Host "🚀 Deploying Pratham's Portfolio to GitHub Pages..." -ForegroundColor Cyan
Write-Host ""

# Step 1: Install gh-pages if not installed
Write-Host "📦 Step 1: Checking gh-pages installation..." -ForegroundColor Yellow
if (!(Test-Path "node_modules\gh-pages")) {
    Write-Host "Installing gh-pages..." -ForegroundColor Green
    npm install --save-dev gh-pages
} else {
    Write-Host "gh-pages already installed ✓" -ForegroundColor Green
}
Write-Host ""

# Step 2: Build the project
Write-Host "🔨 Step 2: Building the project..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed! Please fix errors and try again." -ForegroundColor Red
    exit 1
}
Write-Host "Build completed successfully ✓" -ForegroundColor Green
Write-Host ""

# Step 3: Deploy to GitHub Pages
Write-Host "🌐 Step 3: Deploying to GitHub Pages..." -ForegroundColor Yellow
npm run deploy
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Deployment failed!" -ForegroundColor Red
    exit 1
}
Write-Host ""

# Success message
Write-Host "✅ Deployment completed successfully!" -ForegroundColor Green
Write-Host ""
Write-Host "🌐 Your portfolio is live at:" -ForegroundColor Cyan
Write-Host "https://prathammm16.github.io/Pratham-Portfolio" -ForegroundColor Yellow
Write-Host ""
Write-Host "💡 Tip: It may take 1-2 minutes for changes to appear." -ForegroundColor Gray
Write-Host "💡 Clear your browser cache (Ctrl+F5) to see updates immediately." -ForegroundColor Gray
