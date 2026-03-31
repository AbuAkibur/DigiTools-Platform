import { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";

function Navbar({ cartCount, onCartClick }) {
  const [open, setOpen] = useState(false);
  const links = ["Products", "Features", "Pricing", "Testimonials", "FAQ"];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[68px]">
          <span className="logo-grad text-2xl font-extrabold cursor-pointer">
            DigiTools
          </span>

          <ul className="hidden lg:flex items-center gap-7">
            {links.map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  className="text-gray-500 hover:text-[#7c3aed] font-medium text-sm"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <button
              onClick={onCartClick}
              className="relative p-2 text-gray-500 hover:text-[#7c3aed]"
            >
              <ShoppingCart size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#7c3aed] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <button className="hidden md:block bg-transparent text-gray-600 hover:text-[#7c3aed] font-semibold text-sm">
              Login
            </button>
            <button className="btn-grad hidden md:block text-white rounded-full font-semibold text-sm px-5 py-2.5">
              Get Started
            </button>

            <button className="lg:hidden" onClick={() => setOpen(!open)}>
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <div
          className={`mob-menu lg:hidden border-t border-gray-100 ${open ? "open" : ""}`}
        >
          <ul className="py-2">
            {links.map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2.5 text-gray-700 hover:bg-brand-light hover:text-brand"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
