const fs = require('fs');
const path = require('path');

const dir = 'd:\\Project_28';
const hiddenDir = path.join(dir, '.hidden_dashboards');

if (!fs.existsSync(hiddenDir)){
    fs.mkdirSync(hiddenDir);
}

const files = fs.readdirSync(dir);

// Move dashboard files
files.forEach(file => {
    if (file.endsWith('.html') && (file.startsWith('admin') || file.startsWith('staff') || file === 'login.html')) {
        const oldPath = path.join(dir, file);
        const newPath = path.join(hiddenDir, file);
        fs.renameSync(oldPath, newPath);
        console.log(`Moved ${file} to .hidden_dashboards`);
    }
});

// Update remaining HTML files
const htmlFiles = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

htmlFiles.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    const initialContent = content;

    // Remove Login Button from header
    content = content.replace(/<!-- Login Button -->[\s\S]*?<\/a>/g, '');
    
    // Remove Mobile Menu Login Button
    content = content.replace(/<a href="login.html".*?Login<\/a>/g, '');

    // Remove Admin Dashboard link from footer
    content = content.replace(/<li><a href="admin\.html".*?Admin Dashboard<\/a><\/li>/g, '');

    if (content !== initialContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated links in ${file}`);
    }
});
