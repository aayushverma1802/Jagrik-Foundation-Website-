# Clean Next.js build artifacts and start dev server
Write-Host "Cleaning Next.js build artifacts..." -ForegroundColor Yellow

# Stop any running Node processes
Get-Process | Where-Object {$_.ProcessName -like "*node*"} | Stop-Process -Force -ErrorAction SilentlyContinue

# Remove .next folder completely
if (Test-Path .next) {
    Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
    Write-Host "Removed .next folder" -ForegroundColor Green
}

# Remove cache
if (Test-Path node_modules\.cache) {
    Remove-Item -Recurse -Force node_modules\.cache -ErrorAction SilentlyContinue
    Write-Host "Removed cache" -ForegroundColor Green
}

Write-Host "Starting dev server..." -ForegroundColor Yellow
npm run dev

