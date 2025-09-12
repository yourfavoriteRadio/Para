import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} from "../store/cartSlice";
import {
  TrashIcon,
  PlusCircleIcon,
  MinusCircleIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

export default function Cart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = items
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  if (items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-10 text-center">
        <ShoppingCartIcon className="mx-auto h-16 w-16 text-gray-400" />
        <h2 className="mt-4 text-lg font-semibold text-gray-700">
          Your cart is empty
        </h2>
        <p className="text-sm text-gray-500">
          Add some products and they’ll show up here.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-xl font-bold mb-6">Your Cart</h1>

      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center bg-white shadow rounded-lg p-3 hover:shadow-md transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 object-contain rounded bg-gray-50"
            />

            <div className="flex-1 ml-4">
              <h2 className="text-sm font-semibold text-gray-800 line-clamp-1">
                {item.name}
              </h2>
              <p className="text-xs text-gray-500">
                ${(item.price * item.quantity).toFixed(2)} •{" "}
                <span className="text-gray-700">${item.price} each</span>
              </p>

              <div className="flex items-center gap-2 mt-2">
                <button
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                  className="text-gray-600 hover:text-blue-600"
                >
                  <MinusCircleIcon className="h-5 w-5" />
                </button>
                <span className="px-2 text-sm font-medium">
                  {item.quantity}
                </span>
                <button
                  onClick={() => dispatch(increaseQuantity(item.id))}
                  className="text-gray-600 hover:text-blue-600"
                >
                  <PlusCircleIcon className="h-5 w-5" />
                </button>
              </div>
            </div>

            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className="ml-4 text-red-500 hover:text-red-700"
            >
              <TrashIcon className="h-5 w-5" />
            </button>
          </div>
        ))}
      </div>

      {/* Cart total + clear button */}
      <div className="mt-6 flex justify-between items-center border-t pt-4">
        <span className="text-lg font-semibold">Total: ${total}</span>
        <button
          onClick={() => dispatch(clearCart())}
          className="bg-red-500 hover:bg-red-400 text-white px-4 py-2 rounded-lg text-sm"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}
