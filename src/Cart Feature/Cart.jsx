import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./CartSlice";
import EmptyCart from "./EmptyCart";
import Foooter from "../UI/Foooter";

function Cart() {
  const cart = useSelector(getCart);
  const username = useSelector((state) => state.user.username);
  const dispatch = useDispatch();
  if (!cart.length) return <EmptyCart />;
  return (
    <div className="ml-4 sm:ml-8">
      <Link to="/menu" className="text-md text-black   hover:text-white">
        {" "}
        <button className="h-[35px] w-[130px] rounded-lg bg-[#06b6d4] ">
          {" "}
          Back to menu
        </button>
      </Link>

      <h2 className="mt-7 text-lg font-medium">Your cart {username}</h2>

      <ul className="mt-3 divide-y divide-slate-400 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-7">
        <button className="mr-5 mt-8 h-[35px] w-[130px] rounded-lg bg-[#06b6d4] ">
          <Link to="/order/new">Order pizzas 🍕</Link>
        </button>
        <button
          onClick={() => dispatch(clearCart())}
          className="mt-8 h-[35px] w-[130px] rounded-lg bg-red-500 text-yellow-50 "
        >
          Clear cart 🗑
        </button>
      </div>
      <div>
        <Foooter />
      </div>
    </div>
  );
}

export default Cart;
