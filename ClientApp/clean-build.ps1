# ===========================
# clean-build.ps1
# ===========================
# ===========================
# clean-build.ps1
# ===========================

Write-Host "🧹 Rensar gamla build- och dist-mappar..."
$folders = @(".\build", ".\dist")
foreach ($folder in $folders) {
    if (Test-Path $folder) {
        Remove-Item -Recurse -Force $folder
        Write-Host "Rensade $folder"
    } else {
        Write-Host "$folder finns inte, hoppar över"
    }
}

Write-Host "🧹 Rensar Vite-cache..."
$viteCache = ".\node_modules\.vite"
if (Test-Path $viteCache) {
    Remove-Item -Recurse -Force $viteCache
    Write-Host "Rensade $viteCache"
} else {
    Write-Host "$viteCache finns inte, hoppar över"
}

Write-Host "📦 Rensar npm-cache..."
npm cache clean --force

Write-Host "📥 Installerar dependencies..."
npm install

Write-Host "🏗️ Bygger projektet..."
npm run build

Write-Host "🚀 Startar dev-server i Edge inkognitoläge..."
# Anpassa port om din dev-server använder annan än 5173
$devUrl = "http://localhost:5173"
Start-Process "msedge.exe" -ArgumentList "--inprivate $devUrl"

Write-Host "✅ Klart! Dev-servern öppnas i Edge inkognito."

