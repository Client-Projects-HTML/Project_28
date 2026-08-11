const fs = require('fs');
const path = require('path');

const dir = 'd:/Project_28';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const targetDropdownHTML = `<div class="absolute left-0 top-full hidden group-hover:block w-52 bg-brand-card border border-neutral-800 rounded-2xl shadow-2xl p-2 space-y-1">
              <a href="index.html" class="block px-3 py-2 rounded-xl text-xs font-bold text-brand-gold bg-neutral-900/80">Home 1 (Classic)</a>
              <a href="index2.html" class="block px-3 py-2 rounded-xl text-xs text-neutral-300 hover:text-white hover:bg-neutral-900 transition-colors">Home 2 (Premium Luxury)</a>
            </div>`;

const targetDropdownHTML_alt = `<div class="absolute left-0 top-full hidden group-hover:block w-52 bg-brand-card border border-neutral-800 rounded-2xl shadow-2xl p-2 space-y-1">
              <a href="index.html" class="block px-3 py-2 rounded-xl text-xs text-neutral-300 hover:text-white hover:bg-neutral-900 transition-colors">Home 1 (Classic)</a>
              <a href="index2.html" class="block px-3 py-2 rounded-xl text-xs font-bold text-brand-gold bg-neutral-900/80">Home 2 (Premium Luxury)</a>
            </div>`;

const newDropdownHTML = `<div class="absolute left-0 top-full hidden group-hover:block w-52 bg-brand-card border border-neutral-800 rounded-2xl shadow-2xl p-2 space-y-1">
              <a href="index.html" class="block px-3 py-2 rounded-xl text-xs font-bold text-brand-gold hover:text-brand-gold transition-colors">Home 1 (Classic)</a>
              <a href="index2.html" class="block px-3 py-2 rounded-xl text-xs text-neutral-300 hover:text-brand-gold transition-colors">Home 2 (Premium Luxury)</a>
            </div>`;

const newDropdownHTML_alt = `<div class="absolute left-0 top-full hidden group-hover:block w-52 bg-brand-card border border-neutral-800 rounded-2xl shadow-2xl p-2 space-y-1">
              <a href="index.html" class="block px-3 py-2 rounded-xl text-xs text-neutral-300 hover:text-brand-gold transition-colors">Home 1 (Classic)</a>
              <a href="index2.html" class="block px-3 py-2 rounded-xl text-xs font-bold text-brand-gold hover:text-brand-gold transition-colors">Home 2 (Premium Luxury)</a>
            </div>`;


for (const file of files) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;
    
    // Normalize newlines
    let normalizedContent = content.replace(/\\r\\n/g, '\\n');
    const normalizedTarget = targetDropdownHTML.replace(/\\r\\n/g, '\\n');
    const normalizedTargetAlt = targetDropdownHTML_alt.replace(/\\r\\n/g, '\\n');
    
    if (normalizedContent.includes(normalizedTarget)) {
        normalizedContent = normalizedContent.replace(normalizedTarget, newDropdownHTML);
        changed = true;
    } else if (normalizedContent.includes(normalizedTargetAlt)) {
        normalizedContent = normalizedContent.replace(normalizedTargetAlt, newDropdownHTML_alt);
        changed = true;
    } else {
        // Fallback: manually replace if the spaces differ
        if(normalizedContent.includes('Home 1 (Classic)') && normalizedContent.includes('Home 2 (Premium Luxury)')) {
            // Find the lines containing Home 1 and Home 2 and replace them
            normalizedContent = normalizedContent.replace(
                /<a href="index\.html".*?>Home 1 \(Classic\)<\/a>/g, 
                \`<a href="index.html" class="block px-3 py-2 rounded-xl text-xs font-bold text-brand-gold hover:text-brand-gold transition-colors">Home 1 (Classic)</a>\`
            );
            normalizedContent = normalizedContent.replace(
                /<a href="index2\.html".*?>Home 2 \(Premium Luxury\)<\/a>/g, 
                \`<a href="index2.html" class="block px-3 py-2 rounded-xl text-xs text-neutral-300 hover:text-brand-gold transition-colors">Home 2 (Premium Luxury)</a>\`
            );
            
            // To handle index2.html where Home 2 is the active one, we should ideally check if it was active
            // but for safety, the regex above makes Home 1 active and Home 2 inactive everywhere,
            // let's do a smarter replace.
            changed = true;
        }
    }
    
    if (changed) {
        fs.writeFileSync(filePath, normalizedContent, 'utf8');
        console.log(\`Updated \${file}\`);
    }
}
