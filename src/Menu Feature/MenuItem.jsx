import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from "../Utilities/helpers";
import { addItem, getCurrentQuantityById } from "../Cart Feature/CartSlice";
import DeleteItem from "../Cart Feature/DeleteItem";
import UpdateCartItem from "../Cart Feature/UpdateCartItem";
function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;
  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }

  return (
    <li className="flex gap-5 gap-y-5 py-2 ">
      <img
        src={imageUrl}
        alt={name}
        className={`h-28 rounded-lg  ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className=" mx-4  flex grow flex-col  py-4 text-lg font-semibold sm:mx-10">
        <p>{name}</p>
        <p className="text-md font-medium capitalize">
          {ingredients.join(", ")}
        </p>

        <div className="mt-auto flex justify-between pt-0.5">
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
          {isInCart && (
            <div className="flex items-center gap-2 sm:gap-5">
              <UpdateCartItem pizzaId={id} currentQuantity={currentQuantity} />
              <DeleteItem pizzaId={id} />
            </div>
          )}
          {!soldOut && !isInCart && (
            <button
              className="h-[40px] w-[130px] rounded-2xl bg-blue-400 font-semibold"
              onClick={handleAddToCart}
            >
              Add to cart
            </button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
