const fs = require('fs');
const path = require('path');

const dir = 'd:/Project_28';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const targetToReplace = `          <!-- Services & Fabrics Dropdown -->
          <div class="relative group">
            <button onclick="window.location.href='services.html'" class="flex items-center gap-1.5 hover:text-brand-gold transition-colors py-2 whitespace-nowrap focus:outline-none">
              <span>Services & Fabrics</span>
              <i data-lucide="chevron-down" class="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180"></i>
            </button>
            <div class="absolute left-1/2 -translate-x-1/2 top-full hidden group-hover:block w-[500px] bg-brand-card border border-neutral-800 rounded-2xl shadow-2xl p-6 z-50">
              <div class="grid grid-cols-4 gap-4">
                <a href="services.html" class="group/item block space-y-2">
                  <div class="h-20 rounded-lg overflow-hidden relative border border-brand-border group-hover/item:border-brand-gold transition-colors">
                    <img src="https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?q=80&w=687&auto=format&fit=crop" class="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-500">
                    <div class="absolute inset-0 bg-black/20 group-hover/item:bg-black/40 transition-colors"></div>
                  </div>
                  <span class="block text-[10px] font-bold text-white text-center uppercase tracking-wider group-hover/item:text-brand-gold transition-colors">Shirting</span>
                </a>
                <a href="services.html" class="group/item block space-y-2">
                  <div class="h-20 rounded-lg overflow-hidden relative border border-brand-border group-hover/item:border-brand-gold transition-colors">
                    <img src="https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?q=80&w=687&auto=format&fit=crop" class="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-500">
                    <div class="absolute inset-0 bg-black/20 group-hover/item:bg-black/40 transition-colors"></div>
                  </div>
                  <span class="block text-[10px] font-bold text-white text-center uppercase tracking-wider group-hover/item:text-brand-gold transition-colors">Denim</span>
                </a>
                <a href="services.html" class="group/item block space-y-2">
                  <div class="h-20 rounded-lg overflow-hidden relative border border-brand-border group-hover/item:border-brand-gold transition-colors">
                    <img src="https://plus.unsplash.com/premium_photo-1673125287084-e90996bad505?q=80&w=687&auto=format&fit=crop" class="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-500">
                    <div class="absolute inset-0 bg-black/20 group-hover/item:bg-black/40 transition-colors"></div>
                  </div>
                  <span class="block text-[10px] font-bold text-white text-center uppercase tracking-wider group-hover/item:text-brand-gold transition-colors">Dresses</span>
                </a>
                <a href="services.html" class="group/item block space-y-2">
                  <div class="h-20 rounded-lg overflow-hidden relative border border-brand-border group-hover/item:border-brand-gold transition-colors">
                    <img src="https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=687&auto=format&fit=crop" class="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-500">
                    <div class="absolute inset-0 bg-black/20 group-hover/item:bg-black/40 transition-colors"></div>
                  </div>
                  <span class="block text-[10px] font-bold text-white text-center uppercase tracking-wider group-hover/item:text-brand-gold transition-colors">Suiting</span>
                </a>
              </div>
            </div>
          </div>`;

const replacement = `<a href="services.html" class="hover:text-brand-gold transition-colors py-2 whitespace-nowrap">Services & Fabrics</a>`;

for (const file of files) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    if (content.includes(targetToReplace)) {
        content = content.replace(targetToReplace, replacement);
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated dropdown in ${file}`);
    }
}
