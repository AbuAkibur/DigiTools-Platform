function CTA() {
  return (
    <div className="cta-grad text-white py-16 md:py-24 px-4 w-full">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Ready To Transform Your Workflow?</h2>
        <p className="text-white/80 text-lg mb-10">Join thousands of professionals who are already using DigiTools to work smarter. Start your free trial today.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-brand font-bold px-10 py-4 rounded-full border-0 cursor-pointer hover:bg-gray-100 transition-colors">Explore Products</button>
          <button className="bg-transparent text-white font-bold px-10 py-4 rounded-full border-2 border-white/60 cursor-pointer hover:bg-white/10 transition-colors">View Pricing</button>
        </div>
        <p className="text-white/65 text-sm mt-6">14-day free trial • No credit card required • Cancel anytime</p>
      </div>
    </div>
  );
}

export default CTA;