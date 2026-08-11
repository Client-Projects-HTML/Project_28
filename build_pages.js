const fs = require('fs');

const contactHtml = fs.readFileSync('contact.html', 'utf8');

// The footer starts at <!-- LUXURY FOOTER -->
const headerMatch = contactHtml.match(/(.*?<!-- HERO SECTION -->)/s);
const footerMatch = contactHtml.match(/(<!-- LUXURY FOOTER -->.*)/s);

if (headerMatch && footerMatch) {
  const header = headerMatch[1];
  const footer = footerMatch[1];

  const helpFaqContent = header + `
  <!-- HELP & FAQ SECTION -->
  <section class="pt-32 pb-24 bg-brand-black transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        <!-- Left Column -->
        <div class="space-y-8">
          <div class="space-y-4">
            <h4 class="text-brand-gold font-bold text-sm tracking-widest uppercase">Customer Care</h4>
            <h1 class="text-4xl sm:text-5xl font-serif font-bold text-white leading-tight">We'd Love To Hear From You</h1>
            <p class="text-neutral-400 text-lg leading-relaxed max-w-lg">
              Have a question about your bespoke tailoring, studio hours, or fabric availability? Reach out below.
            </p>
          </div>

          <div class="space-y-4">
            <!-- Card 1: Store Hotline -->
            <div class="flex items-center gap-6 p-6 rounded-2xl border border-neutral-800 bg-brand-card hover:border-brand-gold/50 transition-colors">
              <div class="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0">
                <i data-lucide="phone" class="w-6 h-6"></i>
              </div>
              <div>
                <p class="text-neutral-400 text-sm mb-1">Studio Hotline</p>
                <p class="text-white font-bold text-lg">1-800-ATELIER</p>
              </div>
            </div>

            <!-- Card 2: Email Support -->
            <div class="flex items-center gap-6 p-6 rounded-2xl border border-neutral-800 bg-brand-card hover:border-brand-gold/50 transition-colors">
              <div class="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0">
                <i data-lucide="mail" class="w-6 h-6"></i>
              </div>
              <div>
                <p class="text-neutral-400 text-sm mb-1">Email Support</p>
                <p class="text-white font-bold text-lg">support@ateliervogue.com</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column (Form Card) -->
        <div class="bg-brand-card border border-neutral-800 rounded-3xl p-8 sm:p-10 shadow-2xl">
          <form class="space-y-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div class="space-y-2">
                <label class="block text-xs font-semibold uppercase tracking-wider text-neutral-400">Your Name</label>
                <input type="text" placeholder="John Doe" class="w-full bg-neutral-900 border border-neutral-800 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors">
              </div>
              <div class="space-y-2">
                <label class="block text-xs font-semibold uppercase tracking-wider text-neutral-400">Email Address</label>
                <input type="email" placeholder="john@example.com" class="w-full bg-neutral-900 border border-neutral-800 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors">
              </div>
            </div>
            
            <div class="space-y-2">
              <label class="block text-xs font-semibold uppercase tracking-wider text-neutral-400">Subject</label>
              <input type="text" placeholder="Question about bespoke suiting..." class="w-full bg-neutral-900 border border-neutral-800 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors">
            </div>

            <div class="space-y-2">
              <label class="block text-xs font-semibold uppercase tracking-wider text-neutral-400">Message</label>
              <textarea rows="4" placeholder="How can our tailoring experts assist you?" class="w-full bg-neutral-900 border border-neutral-800 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors resize-none"></textarea>
            </div>

            <button type="button" class="w-full bg-brand-gold text-black font-bold uppercase tracking-wider py-4 rounded-xl hover:bg-brand-goldHover transition-colors shadow-lg shadow-brand-gold/20">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  </section>
  ` + footer;

  const locationContent = header + `
  <!-- STUDIO HOURS & LOCATION SECTION -->
  <section class="pt-32 pb-24 bg-brand-black transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
      
      <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h4 class="text-brand-gold font-bold text-sm tracking-widest uppercase">Visit Us</h4>
        <h1 class="text-4xl sm:text-5xl font-serif font-bold text-white leading-tight">Studio Hours & Location</h1>
        <p class="text-neutral-400 text-lg leading-relaxed">
          Step into the world of Atelier Vogue. Discover our exquisite fabrics and experience personalized consultations at our flagship studio.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        <!-- Left: Map Placeholder -->
        <div class="h-[500px] w-full rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-900 relative group">
          <img src="https://images.unsplash.com/photo-1524813686514-a57563d77965?q=80&w=1470&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
          <div class="absolute inset-0 bg-brand-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
            <a href="#" class="px-8 py-3 bg-brand-gold text-black font-bold uppercase tracking-wider rounded-full hover:bg-brand-goldHover transition-colors">
              Get Directions
            </a>
          </div>
        </div>

        <!-- Right: Info -->
        <div class="space-y-10">
          
          <!-- Address Card -->
          <div class="bg-brand-card border border-neutral-800 rounded-3xl p-8 space-y-4">
            <div class="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-6">
              <i data-lucide="map-pin" class="w-6 h-6"></i>
            </div>
            <h3 class="text-2xl font-serif font-bold text-white">Flagship Studio</h3>
            <p class="text-neutral-400 text-lg leading-relaxed">
              123 Couture Avenue,<br>
              Fashion District, FD 90210<br>
              New York, NY
            </p>
          </div>

          <!-- Hours Card -->
          <div class="bg-brand-card border border-neutral-800 rounded-3xl p-8">
            <div class="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-6">
              <i data-lucide="clock" class="w-6 h-6"></i>
            </div>
            <h3 class="text-2xl font-serif font-bold text-white mb-6">Operating Hours</h3>
            
            <div class="space-y-4">
              <div class="flex justify-between items-center border-b border-neutral-800 pb-3">
                <span class="text-neutral-300 font-medium">Monday - Friday</span>
                <span class="text-brand-gold font-bold">10:00 AM - 7:00 PM</span>
              </div>
              <div class="flex justify-between items-center border-b border-neutral-800 pb-3">
                <span class="text-neutral-300 font-medium">Saturday</span>
                <span class="text-brand-gold font-bold">11:00 AM - 5:00 PM</span>
              </div>
              <div class="flex justify-between items-center pb-2">
                <span class="text-neutral-500 font-medium">Sunday</span>
                <span class="text-neutral-500 font-bold uppercase text-sm">Closed / Appointment Only</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  </section>
  ` + footer;

  // Overwrite titles
  const hF = helpFaqContent.replace('<title>Contact & Studio Locations | Atelier Vogue Tailoring Studio</title>', '<title>Help & FAQ | Atelier Vogue Tailoring Studio</title>');
  const lF = locationContent.replace('<title>Contact & Studio Locations | Atelier Vogue Tailoring Studio</title>', '<title>Studio Hours & Location | Atelier Vogue Tailoring Studio</title>');

  fs.writeFileSync('help-faq.html', hF, 'utf8');
  fs.writeFileSync('location.html', lF, 'utf8');
  console.log("Created help-faq.html and location.html");
} else {
  console.log("Could not parse contact.html");
}
