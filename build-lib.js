const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const clientAppDir = path.join(__dirname, 'ClientApp');
const indexPath = path.join(clientAppDir, 'index.html');
const distDir = path.join(clientAppDir, 'dist');
const wwwrootDist = path.join(__dirname, 'wwwroot/dist');

// Rensa dist
if (fs.existsSync(distDir)) {
    fs.rmSync(distDir, { recursive: true, force: true });
}

// SKAPA index.html (Vite MÅSTE ha den!)
const html = `<!DOCTYPE html><html><head></head><body><div id="root"></div></body></html>`;
fs.writeFileSync(indexPath, html);

console.log('Building React library...');
try {
    execSync('cd ClientApp && npx vite build', { stdio: 'inherit' });

    // Skapa wwwroot/dist om den inte finns
    if (!fs.existsSync(wwwrootDist)) {
        fs.mkdirSync(wwwrootDist, { recursive: true });
    }

    // Kopiera search-results.umd.js och search-results.js direkt från dist/
    const files = ['search-results.umd.js', 'search-results.js'];
    files.forEach(file => {
        const src = path.join(distDir, file);
        if (fs.existsSync(src)) {
            const dest = path.join(wwwrootDist, file);
            fs.copyFileSync(src, dest);
            console.log(`✓ Copied ${file}`);
        }
    });
    console.log('✓ Build complete!');

} catch (e) {
    console.error('Build failed:', e.message);
    process.exit(1);
}