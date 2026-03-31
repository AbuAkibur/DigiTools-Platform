import { ShoppingCart } from 'lucide-react';

function CartSection({ cart, onRemove, onCheckout }) {
  const total = cart.reduce((s, p) => s + p.price, 0);

  return (
    <div className="max-w-2xl mx-auto w-full">
      <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-bold mb-6">Your Cart</h3>

        {cart.length === 0 ? (
          <div className="text-center py-16 text-gray-400">
            <ShoppingCart size={80} className="mx-auto mb-4 text-gray-300" />
            <p className="text-lg md:text-xl font-semibold text-gray-700 mb-2">Your cart is empty</p>
            <p className="text-sm">Browse our products and add items to get started.</p>
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-4">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center gap-4 md:gap-6 bg-gray-50 rounded-xl p-4 md:p-5">
                  <span className="text-3xl md:text-4xl shrink-0">{item.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-sm md:text-base truncate">{item.name}</div>
                    <div className="text-gray-500 text-xs md:text-sm mt-1">${item.price}</div>
                  </div>
                  <button
                    onClick={() => onRemove(item.id)}
                    className="text-red-500 hover:text-red-600 font-bold text-sm bg-transparent border-0 cursor-pointer shrink-0"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center pt-6 mt-6 border-t border-gray-200">
              <span className="text-gray-500 text-lg font-medium">Total:</span>
              <span className="text-3xl md:text-4xl font-extrabold text-gray-900">${total}</span>
            </div>

            <button
              onClick={onCheckout}
              className="btn-grad w-full text-white border-0 rounded-xl font-bold py-4 mt-6 text-base md:text-lg cursor-pointer transition-transform hover:-translate-y-1"
            >
              Proceed To Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default CartSection;