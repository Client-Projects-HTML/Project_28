const fs = require('fs');
const path = require('path');

const dir = 'd:/Project_28';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const targetNavToRemove = `<a href="admin.html" class="hover:text-brand-gold transition-colors text-neutral-400 py-2 whitespace-nowrap">Admin Portal</a>`;

const rtlToggleHTML = `<!-- RTL Layout Toggle (Direction Symbol) -->
          <button id="rtlToggle" onclick="toggleRTL()" title="Toggle Right-To-Left Layout" aria-label="Toggle RTL" 
                  class="w-9 h-9 rounded-full border border-neutral-800 bg-neutral-900 flex items-center justify-center text-brand-gold hover:border-brand-gold transition-all shrink-0">
            <i data-lucide="arrow-left-right" class="w-4 h-4"></i>
          </button>`;

const newLoginHTML = `<!-- Login Button -->
          <a href="login.html" class="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-[11px] font-bold uppercase tracking-wider text-brand-gold border border-brand-gold/50 hover:bg-brand-gold hover:text-black rounded-full transition-all whitespace-nowrap shrink-0">
            LOGIN
          </a>`;

const replacement = `${rtlToggleHTML}\n\n          ${newLoginHTML}`;

for (const file of files) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    let changed = false;
    if (content.includes(targetNavToRemove)) {
        content = content.replace(targetNavToRemove, '');
        changed = true;
    }
    
    if (content.includes(rtlToggleHTML) && !content.includes(newLoginHTML)) {
        content = content.replace(rtlToggleHTML, replacement);
        changed = true;
    }
    
    if (changed) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${file}`);
    }
}
