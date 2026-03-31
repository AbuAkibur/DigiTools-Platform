import { Play } from 'lucide-react';

function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-16 items-center">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-5 bg-[#ede9fe] text-brand">
            <span className="w-2 h-2 rounded-full inline-block bg-brand"></span>
            New: AI-Powered Tools Available
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.1] text-gray-900 mb-5 md:mb-6">
            Supercharge Your
            <br className="hidden md:block" /> Digital Workflow
          </h1>
          <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
            Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="btn-grad text-white border-0 rounded-full font-semibold text-base cursor-pointer px-8 py-3.5 transition-all">
              Explore Products
            </button>
            <button className="flex items-center justify-center gap-2 bg-transparent border border-gray-300 text-gray-800 rounded-full font-semibold text-base cursor-pointer px-8 py-3.5 transition-all hover:border-brand hover:text-brand">
              <Play size={16} /> Watch Demo
            </button>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-2xl mt-8 lg:mt-0" style={{ boxShadow: "0 20px 60px rgba(124,58,237,.18)" }}>
          <img
            src="/assets/banner.png"
            alt="DigiTools Banner"
            className="w-full block"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
          />
          <div className="hidden w-full h-64 md:h-96 bg-gradient-to-br from-brand-light to-brand-mid items-center justify-center text-6xl">
            🤖
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;