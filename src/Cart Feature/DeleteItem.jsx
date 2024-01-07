import { useDispatch } from "react-redux";
import { deleteItem } from "./CartSlice";

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => dispatch(deleteItem(pizzaId))}
        className=" h-[35px] w-[130px] rounded-lg bg-red-500 text-sm text-yellow-50 "
      >
        Delete Pizza 😢
      </button>
    </div>
  );
}

export default DeleteItem;
