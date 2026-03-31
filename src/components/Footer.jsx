import { Instagram, Facebook, Twitter } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="text-3xl font-extrabold mb-4">DigiTools</div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-semibold text-white mb-5 text-sm tracking-widest">PRODUCT</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {["Features", "Pricing", "Templates", "Integrations"].map(item => <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>)}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-semibold text-white mb-5 text-sm tracking-widest">COMPANY</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {["About", "Blog", "Careers", "Press"].map(item => <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>)}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-semibold text-white mb-5 text-sm tracking-widest">RESOURCES</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {["Documentation", "Help Center", "Community", "Contact"].map(item => <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>)}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-semibold text-white mb-5 text-sm tracking-widest">SOCIAL LINKS</h4>
            <div className="flex gap-4">
              <a href="#" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center"><Instagram size={20} /></a>
              <a href="#" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center"><Facebook size={20} /></a>
              <a href="#" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center"><Twitter size={20} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <div>© 2026 Digitools. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;