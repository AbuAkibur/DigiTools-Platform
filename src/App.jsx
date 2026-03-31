import { useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import ProductsSection from './components/ProductsSection';
import Steps from './components/Steps';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';

import PRODUCTS from '../products.json';

function App() {
  const [cart, setCart] = useState([]);
  const prodRef = useRef(null);

  const handleBuy = (product) => {
    if (cart.find((p) => p.id === product.id)) {
      toast.info(`${product.name} is already in your cart!`, {
        position: "top-right",
        autoClose: 3000,
        theme: "light",
      });
      return;
    }

    setCart((prev) => [...prev, product]);
    toast.success(`${product.name} added to cart! 🛒`, {
      position: "top-right",
      autoClose: 3000,
      theme: "light",
    });
  };

  const handleRemove = (id) => {
    const item = cart.find((p) => p.id === id);
    setCart((prev) => prev.filter((p) => p.id !== id));

    if (item) {
      toast.error(`${item.name} removed from cart`, {
        position: "top-right",
        autoClose: 3000,
        theme: "light",
      });
    }
  };

  const handleCheckout = () => {
    setCart([]);
    toast.success("Order placed successfully! Thank you! 🎉", {
      position: "top-right",
      autoClose: 4000,
      theme: "light",
    });
  };

  return (
    <div className="flex flex-col min-h-screen w-full bg-white text-gray-900">
      <Navbar
        cartCount={cart.length}
        onCartClick={() => prodRef.current?.scrollIntoView({ behavior: "smooth" })}
      />

      <main className="flex-1">
        <Hero />
        <Stats />
        <div ref={prodRef}>
          <ProductsSection
            products={PRODUCTS}
            cart={cart}
            onBuy={handleBuy}
            onRemove={handleRemove}
            onCheckout={handleCheckout}
          />
        </div>
        <Steps />
        <Pricing />
        <CTA />
      </main>

      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;