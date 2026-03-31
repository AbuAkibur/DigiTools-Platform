import { Check } from 'lucide-react';

const TAG_STYLE = {
  bestseller: "bg-amber-100 text-amber-700",
  popular: "bg-blue-100 text-blue-700",
  new: "bg-emerald-100 text-emerald-700",
};

function ProductCard({ product, onBuy, inCart }) {
  const tagCls = TAG_STYLE[product.tagType] || TAG_STYLE.popular;
  const period = product.period === "one-time" ? "One-Time" : product.period === "monthly" ? "Mo" : "Yr";

  return (
    <div className="card-lift bg-white border border-gray-200 rounded-2xl p-6 md:p-8 relative flex flex-col hover:border-[#8b5cf6] h-full">
      <span className={`absolute top-5 right-5 text-[11px] font-bold px-3 py-1 rounded-full ${tagCls}`}>
        {product.tag}
      </span>

      <div className="text-4xl md:text-5xl mb-5">{product.icon}</div>

      <div className="text-lg md:text-xl font-bold text-gray-900 mb-2">{product.name}</div>

      <div className="text-sm md:text-base text-gray-500 leading-relaxed mb-5 flex-1">
        {product.description || product.desc}
      </div>

      <div className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
        ${product.price}
        <span className="text-sm font-medium text-gray-400">/{period}</span>
      </div>

      <ul className="list-none p-0 my-4 flex flex-col gap-2.5">
        {product.features.map((f, i) => (
          <li key={i} className="flex items-center gap-2.5 text-sm md:text-base text-gray-600">
            <Check size={16} className="text-emerald-500 flex-shrink-0" />
            {f}
          </li>
        ))}
      </ul>

      <button
        onClick={() => onBuy(product)}
        className={`w-full text-white border-0 rounded-xl font-bold text-sm md:text-base cursor-pointer py-3.5 md:py-4 transition-all mt-auto ${inCart ? "btn-added" : "btn-grad"}`}
      >
        {inCart ? "✓ Added to Cart" : "Buy Now"}
      </button>
    </div>
  );
}

export default ProductCard;