import { useState } from 'react';
import ProductCard from './ProductCard';
import CartSection from './CartSection';

function ProductsSection({ products, cart, onBuy, onRemove, onCheckout }) {
  const [tab, setTab] = useState("products");
  const ids = new Set(cart.map((p) => p.id));

  return (
    <section id="products" className="py-16 md:py-24 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center text-gray-900">
          Premium Digital Tools
        </h2>
        <p className="text-center text-gray-500 text-sm sm:text-base mt-3 max-w-xl mx-auto">
          Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
        </p>

        <div className="flex justify-center mt-10 mb-12 lg:mb-16">
          <button
            onClick={() => setTab("products")}
            className={`px-8 md:px-10 py-3.5 text-sm md:text-base font-bold rounded-l-full transition-all border-0 cursor-pointer ${tab === "products" ? "btn-grad text-white" : "bg-gray-100 text-gray-500"}`}
          >
            Products
          </button>
          <button
            onClick={() => setTab("cart")}
            className={`px-8 md:px-10 py-3.5 text-sm md:text-base font-bold rounded-r-full transition-all border-0 cursor-pointer ${tab === "cart" ? "btn-grad text-white" : "bg-gray-100 text-gray-500"}`}
          >
            Cart ({cart.length})
          </button>
        </div>

        {tab === "products" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {products.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onBuy={onBuy}
                inCart={ids.has(p.id)}
              />
            ))}
          </div>
        ) : (
          <CartSection cart={cart} onRemove={onRemove} onCheckout={onCheckout} />
        )}
      </div>
    </section>
  );
}

export default ProductsSection;