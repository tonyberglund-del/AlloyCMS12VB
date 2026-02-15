# clear.ps1
$paths = @(
    "dist",
    "build",
    "src\generated"
)

foreach ($path in $paths) {
    if (Test-Path $path) {
        Write-Host "Tar bort $path..."
        Remove-Item $path -Recurse -Force
    } else {
        Write-Host "$path finns inte, hoppar över"
    }
}

Write-Host "Rensning klar!"
