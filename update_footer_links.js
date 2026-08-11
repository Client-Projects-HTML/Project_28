const fs = require('fs');
const path = require('path');

const dir = 'd:\\Project_28';
const htmlFiles = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

htmlFiles.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    const initialContent = content;

    // Replace Privacy Policy linked to 404.html
    content = content.replace(/>Privacy Policy<\/a>/g, '>Gift Cards</a>');
    
    // Replace Terms of Services linked to coming-soon.html
    content = content.replace(/>Terms of Services<\/a>/g, '>Style Guide</a>');

    if (content !== initialContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated footer links in ${file}`);
    }
});
