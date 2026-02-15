# Stoppa Vite om den körs
$viteProcess = Get-Process -Name node -ErrorAction SilentlyContinue | Where-Object {$_.Path -like "*vite*"}
if ($viteProcess) {
    $viteProcess | Stop-Process -Force
}

# Ta bort build och dist mappar
$folders = @("build", "dist", "src/generated")
foreach ($folder in $folders) {
    if (Test-Path $folder) {
        Remove-Item -Recurse -Force $folder
        Write-Host "Removed $folder"
    }
}

# Rensa Vite cache (om den finns)
$viteCache = "node_modules\.vite"
if (Test-Path $viteCache) {
    Remove-Item -Recurse -Force $viteCache
    Write-Host "Removed Vite cache"
}

Write-Host "Cleanup done."
