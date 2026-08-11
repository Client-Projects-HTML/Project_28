const fs = require('fs');
const path = require('path');

const files = [
  'staff-dashboard.html',
  'staff-fittings.html',
  'staff-workorders.html',
  'staff-vault.html',
  'staff-clients.html',
  'staff-settings.html'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Replace sidebar nav hovers
  content = content.replace(/hover:bg-neutral-900/g, 'hover:bg-brand-gold/10 hover:border-brand-gold/20 border border-transparent');
  
  // Replace inputs and selects background
  content = content.replace(/bg-neutral-900\/40/g, 'bg-brand-gold/5');
  
  // Replace Theme / RTL toggle buttons
  content = content.replace(/bg-neutral-900 border border-brand-border flex items-center justify-center text-brand-gold hover:border-brand-gold/g, 'bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-black');
  
  // Replace user profile card background
  content = content.replace(/bg-neutral-900\/40 rounded-2xl border border-brand-border/g, 'bg-brand-gold/5 rounded-2xl border border-brand-gold/10');
  
  // Replace table row hover
  content = content.replace(/hover:bg-neutral-900\/20/g, 'hover:bg-brand-gold/10');
  
  // Replace small action buttons (like shopping cart or more-horizontal)
  content = content.replace(/bg-neutral-900 text-neutral-300 hover:text-brand-gold rounded-xl border border-neutral-800 hover:border-brand-gold/g, 'bg-brand-gold/10 text-brand-gold rounded-xl border border-brand-gold/20 hover:bg-brand-gold hover:text-black');
  
  // Fix Reorder button in Fabric Vault
  content = content.replace(/bg-neutral-900 text-brand-gold/g, 'bg-brand-gold/10 text-brand-gold');

  fs.writeFileSync(file, content);
});

console.log("Replacement complete.");
