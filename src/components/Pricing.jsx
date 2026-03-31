import { Check } from 'lucide-react';

function Pricing() {
  const plans = [
    { name: "Starter", tagline: "Perfect for getting started", price: "$0", period: "/Month", features: ["Access to 10 free tools", "Basic templates", "Community support", "1 project per month"], btnText: "Get Started Free", featured: false },
    { name: "Pro", tagline: "Best for professionals", price: "$29", period: "/Month", features: ["Access to all premium tools", "Unlimited templates", "Priority support", "Unlimited projects", "Cloud sync", "Advanced analytics"], btnText: "Start Pro Trial", featured: true, badge: "Most Popular" },
    { name: "Enterprise", tagline: "For teams and businesses", price: "$99", period: "/Month", features: ["Everything in Pro", "Team collaboration", "Custom integrations", "Dedicated support", "SLA guarantee", "Custom branding"], btnText: "Contact Sales", featured: false },
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center text-gray-900 mb-4">Simple, Transparent Pricing</h2>
        <p className="text-center text-gray-500 text-sm sm:text-base mb-12 max-w-lg mx-auto">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((p) => (
            <div key={p.name} className={`card-lift rounded-2xl p-8 flex flex-col relative ${p.featured ? "pricing-feat text-white shadow-2xl scale-105" : "bg-white border border-gray-200 text-gray-900"}`}>
              {p.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-[11px] font-bold px-4 py-1 rounded-full bg-amber-400 text-amber-900">{p.badge}</div>
              )}
              <div className="text-2xl font-bold mb-1">{p.name}</div>
              <div className={`text-sm ${p.featured ? "text-white/80" : "text-gray-400"}`}>{p.tagline}</div>
              <div className="text-5xl font-extrabold mt-6 mb-8">
                {p.price}
                <span className={`text-lg font-medium ${p.featured ? "text-white/70" : "text-gray-400"}`}>{p.period}</span>
              </div>
              <ul className="list-none p-0 flex-1 mb-8 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className={`flex items-center gap-2.5 text-sm ${p.featured ? "text-white" : "text-gray-600"}`}>
                    <Check size={14} style={{ color: p.featured ? "#a7f3d0" : "#10b981", flexShrink: 0 }} />
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-xl font-bold border-0 cursor-pointer text-sm md:text-base ${p.featured ? "bg-white text-brand" : "btn-grad text-white"}`}>
                {p.btnText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;