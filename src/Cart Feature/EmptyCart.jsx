import { Link } from "react-router-dom";
import Foooter from "../UI/Foooter";

function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-lg font-bold">
        Your cart is still empty. Start adding some pizzas :)
      </p>
      <img
        src="https://img.freepik.com/free-vector/hand-drawn-pizza-cartoon-illustration_23-2150609991.jpg?size=626&ext=jpg&ga=GA1.1.758321973.1704537089&semt=ais"
        alt="logo"
        className="mt-10 w-72 rounded-full border "
      />
      <Link
        className="mt-5 h-[45px] w-[150px]  rounded-lg bg-blue-400 px-4 py-2"
        to="/menu"
      >
        &larr; Back to menu
      </Link>
      <Foooter />
    </div>
  );
}

export default EmptyCart;
