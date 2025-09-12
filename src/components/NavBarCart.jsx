import { useSelector } from "react-redux";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

function NavbarCart() {
  const items = useSelector((state) => state.cart.items);
  const totalQty = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <div className="relative p-2 hover:text-blue-300">
      <ShoppingCartIcon className="h-6 w-6 shrink-0" />
      {totalQty > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full px-1.5">
          {totalQty}
        </span>
      )}
    </div>
  );
}

export default NavbarCart;
