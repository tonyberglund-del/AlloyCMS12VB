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

    // Kopiera manifest.json
    const manifestSrc = path.join(distDir, 'manifest.json');
    if (fs.existsSync(manifestSrc)) {
        fs.copyFileSync(manifestSrc, path.join(wwwrootDist, 'manifest.json'));
        console.log('✓ Copied manifest.json');
    }

    // Kopiera UMD/ES-filerna från assets
    const assetsDir = path.join(distDir, 'assets');
    if (fs.existsSync(assetsDir)) {
        fs.readdirSync(assetsDir).forEach(file => {
            if (file.endsWith('.js')) {
                const src = path.join(assetsDir, file);
                const destName = file.includes('SearchResultsLib') ?
                    (file.includes('.es') ? 'search-results.es.js' : 'search-results.umd.js') :
                    file;
                const dest = path.join(wwwrootDist, destName);
                fs.copyFileSync(src, dest);
                console.log(`✓ Copied ${destName}`);
            }
        });
    }

    console.log('✓ Build complete!');
} catch (e) {
    console.error('Build failed:', e.message);
    process.exit(1);
}