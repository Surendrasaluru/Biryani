import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./CartSlice";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!totalCartQuantity) return null;
  return (
    <div className=" flex items-center justify-between bg-[#373d3d] p-5 text-sm font-semibold uppercase text-[white] sm:px-10 md:text-lg">
      <p className="  space-x-4 sm:space-x-6 ">
        <span>{totalCartQuantity} pizzas</span>
        <span> RS.{totalCartPrice * 8.5}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
