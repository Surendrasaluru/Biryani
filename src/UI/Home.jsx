import { useSelector } from "react-redux";
import CreateUser from "../User Feature/CreateUser";
import { useNavigate } from "react-router-dom";
import Foooter from "./Foooter";

function Home() {
  const username = useSelector((state) => state.user.username);
  const navigate = useNavigate();

  function handleContinue(e) {
    navigate("/menu");
  }
  return (
    <div className="my-10 text-center sm:my-16">
      <h1 className=" mb-[90px]  mt-5 text-[25px] font-semibold text-[#06b6d4] sm:px-6 md:text-[32px] ">
        Pizza is the{"  "}
        <span className="font-bold text-black">breakfast of champions.</span>
        <br />
        It is the glue that holds us all together.
      </h1>

      {username === "" ? (
        <CreateUser />
      ) : (
        <button
          className="mt-4 w-[160px] rounded-md border bg-red-500 p-2 text-white "
          onClick={handleContinue}
        >
          CONTINUE ORDERING {username}
        </button>
      )}
      <Foooter />
    </div>
  );
}

export default Home;
