const fs = require('fs');
const path = require('path');
const dir = 'd:/Project_28';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));
const faviconTag = `\n  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='20' fill='%230a0a0a' /%3E%3Ctext x='50' y='70' font-family='serif' font-size='60' font-weight='bold' fill='%23d4af37' text-anchor='middle'%3EV%3C/text%3E%3C/svg%3E">`;
files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  if (!content.includes('rel="icon"')) {
    content = content.replace('</title>', '</title>' + faviconTag);
    fs.writeFileSync(filePath, content);
    console.log('Updated ' + file);
  }
});
