import { useSelector } from "react-redux";
import { formatCurrency } from "../Utilities/helpers";
import DeleteItem from "./DeleteItem";
import UpdateCartItem from "./UpdateCartItem";
import { getCurrentQuantityById } from "./CartSlice";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));

  return (
    <li className="py-3 text-lg font-bold">
      <p>
        {quantity}&times; {name}
      </p>

      <div className="flex items-center justify-evenly">
        <p className="text-md font-semibold">{formatCurrency(totalPrice)}</p>
        <UpdateCartItem pizzaId={pizzaId} currentQuantity={currentQuantity} />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
