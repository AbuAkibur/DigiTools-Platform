import { User, Package, Rocket } from "lucide-react";

function Steps() {
  const steps = [
    {
      num: "01",
      icon: <User size={32} stroke="#7c3aed" />,
      name: "Create Account",
      desc: "Sign up for free in seconds. No credit card required to get started.",
    },
    {
      num: "02",
      icon: <Package size={32} stroke="#7c3aed" />,
      name: "Choose Products",
      desc: "Browse our catalog and select the tools that fit your needs.",
    },
    {
      num: "03",
      icon: <Rocket size={32} stroke="#7c3aed" />,
      name: "Start Creating",
      desc: "Download and start using your premium tools immediately.",
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-[#f8f7ff] w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center text-gray-900 mb-4">
          Get Started In 3 Steps
        </h2>
        <p className="text-center text-gray-500 text-sm sm:text-base mb-12">
          Start using premium digital tools in minutes, not hours.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          {steps.map((s) => (
            <div
              key={s.num}
              className="card-lift bg-white border border-gray-200 rounded-2xl p-8 lg:p-10 relative text-center"
            >
              <div className="absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white bg-brand">
                {s.num}
              </div>
              <div className="step-icon-bg w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                {s.icon}
              </div>
              <div className="text-xl font-bold text-gray-900 mb-3">
                {s.name}
              </div>
              <div className="text-sm text-gray-500 leading-relaxed">
                {s.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Steps;
