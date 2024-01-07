import { useDispatch } from "react-redux";
import { decreaseItem, increaseItem } from "./CartSlice";

function UpdateCartItem({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        className="mx-2 w-8 rounded-full bg-red-400 text-lg font-bold"
        onClick={() => dispatch(decreaseItem(pizzaId))}
      >
        -
      </button>
      <span className="pr-3 text-sm font-medium">{currentQuantity}</span>
      <button
        className="w-8 rounded-full bg-green-400 text-lg font-bold"
        onClick={() => dispatch(increaseItem(pizzaId))}
      >
        +
      </button>
    </div>
  );
}

export default UpdateCartItem;
