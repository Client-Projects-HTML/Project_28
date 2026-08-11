const fs = require('fs');
const path = require('path');

const dir = 'd:/Project_28';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const oldScript = `  <!-- JAVASCRIPT FOR THEME & RTL CONTROLS -->
  <script>
    lucide.createIcons();

    // Dark / Light Mode Logic
    function toggleTheme() {
      const html = document.documentElement;
      const sunIcon = document.getElementById('sunIcon');
      const moonIcon = document.getElementById('moonIcon');

      if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
      } else {
        html.classList.add('dark');
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
      }
    }

    // RTL Layout Toggle Logic
    function toggleRTL() {
      const html = document.documentElement;
      if (html.getAttribute('dir') === 'rtl') {
        html.setAttribute('dir', 'ltr');
      } else {
        html.setAttribute('dir', 'rtl');
      }
    }
  </script>`;

const newScript = `  <!-- JAVASCRIPT FOR THEME & RTL CONTROLS -->
  <script>
    if (window.lucide) {
      lucide.createIcons();
    }

    function applySavedPreferences() {
      const html = document.documentElement;
      const sunIcon = document.getElementById('sunIcon');
      const moonIcon = document.getElementById('moonIcon');
      
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'light') {
        html.classList.remove('dark');
        if(sunIcon && moonIcon) {
          sunIcon.classList.remove('hidden');
          moonIcon.classList.add('hidden');
        }
      } else {
        html.classList.add('dark');
        if(sunIcon && moonIcon) {
          sunIcon.classList.add('hidden');
          moonIcon.classList.remove('hidden');
        }
      }

      const savedDir = localStorage.getItem('dir');
      if (savedDir === 'rtl') {
        html.setAttribute('dir', 'rtl');
      } else {
        html.setAttribute('dir', 'ltr');
      }
    }

    // Apply on load
    applySavedPreferences();

    // Dark / Light Mode Logic
    function toggleTheme() {
      const html = document.documentElement;
      const sunIcon = document.getElementById('sunIcon');
      const moonIcon = document.getElementById('moonIcon');

      if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        if(sunIcon && moonIcon) {
          sunIcon.classList.remove('hidden');
          moonIcon.classList.add('hidden');
        }
      } else {
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        if(sunIcon && moonIcon) {
          sunIcon.classList.add('hidden');
          moonIcon.classList.remove('hidden');
        }
      }
    }

    // RTL Layout Toggle Logic
    function toggleRTL() {
      const html = document.documentElement;
      if (html.getAttribute('dir') === 'rtl') {
        html.setAttribute('dir', 'ltr');
        localStorage.setItem('dir', 'ltr');
      } else {
        html.setAttribute('dir', 'rtl');
        localStorage.setItem('dir', 'rtl');
      }
    }
  </script>`;

for (const file of files) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Normalize newlines in both strings for a robust replace
    const normalizedOld = oldScript.replace(/\\r\\n/g, '\\n');
    let normalizedContent = content.replace(/\\r\\n/g, '\\n');
    
    if (normalizedContent.includes(normalizedOld)) {
        normalizedContent = normalizedContent.replace(normalizedOld, newScript);
        fs.writeFileSync(filePath, normalizedContent, 'utf8');
        console.log(\`Updated \${file}\`);
    } else {
        // Fallback for cases where maybe the script isn't exactly the same.
        // Let's check if the specific function toggleTheme() is there
        if(normalizedContent.includes('function toggleTheme()') && !normalizedContent.includes('localStorage.getItem')) {
            console.log(\`Needs manual update: \${file}\`);
        }
    }
}
