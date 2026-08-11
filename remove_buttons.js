const fs = require('fs');
const path = require('path');

const dir = 'd:\\Project_28';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    const initialContent = content;

    // Remove lines that contain these specific strings
    content = content.replace(/^.*Client Login.*$\n?/gm, '');
    content = content.replace(/^.*Pre-Launch Page.*$\n?/gm, '');
    content = content.replace(/^.*404 Error Page.*$\n?/gm, '');

    if (content !== initialContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${file}`);
    }
});
