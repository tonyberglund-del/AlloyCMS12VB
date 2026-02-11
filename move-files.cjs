const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'ClientApp/dist');
const destDir = path.join(__dirname, 'wwwroot/dist');

// Skapa wwwroot/dist om den inte finns
if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

// Kopiera filer
const files = ['search-results.umd.js', 'search-results.es.js', 'manifest.json'];
files.forEach(file => {
    const src = path.join(srcDir, file);
    const dest = path.join(destDir, file);
    if (fs.existsSync(src)) {
        fs.copyFileSync(src, dest);
        console.log(`✓ Copied ${file}`);
    }
});

// Rensa dist-mappen
fs.rmSync(srcDir, { recursive: true, force: true });
console.log('✓ Cleaned up ClientApp/dist');