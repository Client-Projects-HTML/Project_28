const fs = require('fs');
const path = require('path');

const dir = 'd:/Project_28';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const headerTarget = `        </div>

      </div>
    </div>
  </header>`;

const headerReplacement = `          <!-- Mobile Menu Toggle Button -->
          <button id="mobileMenuBtn" onclick="toggleMobileMenu()" class="lg:hidden flex items-center justify-center w-9 h-9 text-brand-gold border border-brand-gold/30 rounded-full bg-brand-gold/10 hover:bg-brand-gold hover:text-black transition-colors focus:outline-none ml-2 shrink-0">
            <i data-lucide="menu" class="w-4 h-4"></i>
          </button>
        </div>

      </div>
    </div>
  </header>

  <!-- MOBILE SIDE MENU -->
  <div id="mobileMenuOverlay" class="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] hidden opacity-0 transition-opacity duration-300" onclick="toggleMobileMenu()"></div>
  <div id="mobileMenuDrawer" class="fixed top-0 right-0 h-full w-72 sm:w-80 bg-brand-card border-l border-neutral-800 z-[70] transform translate-x-full transition-transform duration-300 flex flex-col shadow-2xl">
    
    <div class="p-6 border-b border-neutral-800 flex justify-between items-center">
      <span class="font-serif font-bold text-white uppercase tracking-widest text-sm">Menu</span>
      <button onclick="toggleMobileMenu()" class="text-neutral-400 hover:text-brand-gold transition-colors">
        <i data-lucide="x" class="w-5 h-5"></i>
      </button>
    </div>
    
    <nav class="flex-1 overflow-y-auto p-6 flex flex-col gap-6 text-sm font-semibold uppercase tracking-widest text-neutral-300">
      
      <div class="space-y-3">
        <span class="text-[10px] text-brand-gold tracking-[0.2em] block">Homepages</span>
        <a href="index.html" class="block hover:text-brand-gold transition-colors">Home 1 (Classic)</a>
        <a href="index2.html" class="block hover:text-brand-gold transition-colors">Home 2 (Luxury)</a>
      </div>
      
      <a href="services.html" class="block hover:text-brand-gold transition-colors">Services & Fabrics</a>
      <a href="booking.html" class="block hover:text-brand-gold transition-colors">Book Fitting</a>
      <a href="about.html" class="block hover:text-brand-gold transition-colors">About Us</a>
      <a href="contact.html" class="block hover:text-brand-gold transition-colors">Contact</a>

      <div class="pt-6 border-t border-neutral-800 space-y-4">
        <a href="booking.html" class="block w-full text-center py-3 bg-brand-gold text-black rounded-xl hover:bg-brand-goldHover transition-colors font-bold uppercase tracking-widest">Book Appointment</a>
        <a href="login.html" class="block w-full text-center py-3 border border-brand-gold/50 text-brand-gold rounded-xl hover:bg-brand-gold hover:text-black transition-colors font-bold uppercase tracking-widest">Login</a>
      </div>
    </nav>
  </div>`;

const jsReplacement = `
    // Mobile Side Menu Logic
    function toggleMobileMenu() {
      const drawer = document.getElementById('mobileMenuDrawer');
      const overlay = document.getElementById('mobileMenuOverlay');
      const html = document.documentElement;

      if (!drawer) return;

      if (drawer.classList.contains('translate-x-full')) {
        drawer.classList.remove('translate-x-full');
        overlay.classList.remove('hidden');
        void overlay.offsetWidth;
        overlay.classList.remove('opacity-0');
        overlay.classList.add('opacity-100');
        html.classList.add('overflow-hidden');
      } else {
        drawer.classList.add('translate-x-full');
        overlay.classList.remove('opacity-100');
        overlay.classList.add('opacity-0');
        html.classList.remove('overflow-hidden');
        setTimeout(() => overlay.classList.add('hidden'), 300);
      }
    }
  </script>
</body>`;

const jsTarget = `  </script>
</body>`;

for (const file of files) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Only apply if it has the standard header
    if (content.includes(headerTarget) && !content.includes('mobileMenuBtn')) {
        content = content.replace(headerTarget, headerReplacement);
        
        // Find the last instance of </script> \n </body>
        const lastIndex = content.lastIndexOf(jsTarget);
        if (lastIndex !== -1) {
            content = content.substring(0, lastIndex) + jsReplacement + content.substring(lastIndex + jsTarget.length);
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Updated mobile menu in ${file}`);
        } else {
            console.log(`Warning: Could not find script end tag in ${file}`);
        }
    }
}
