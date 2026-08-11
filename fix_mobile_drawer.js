const fs = require('fs');
const path = require('path');

const dir = 'd:\\Project_28';
const htmlFiles = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

htmlFiles.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    const initialContent = content;

    // Fix the drawer HTML classes to position it on the right
    content = content.replace(
        /fixed top-0 left-0 h-full w-72 sm:w-80 bg-brand-card border-r border-neutral-800 z-\[70\] transform -translate-x-full/g,
        'fixed top-0 right-0 h-full w-72 sm:w-80 bg-brand-card border-l border-neutral-800 z-[70] transform translate-x-full'
    );
    
    // Fix the JavaScript logic to toggle translate-x-full instead of -translate-x-full
    content = content.replace(/'\-translate-x-full'/g, "'translate-x-full'");

    if (content !== initialContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated mobile drawer in ${file}`);
    }
});
