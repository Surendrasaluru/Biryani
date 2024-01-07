import { useNavigate, useRouteError } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();
  //console.log(error.statusText);

  return (
    <div className="ml-4 sm:ml-8 mt-6">
      <h1>Something went wrong 😢</h1>
      <p>{error.data} </p>
      <button
        className="bg-[#06b6d4] rounded-lg w-[130px] h-[35px] "
        onClick={() => navigate(-1)}
      >
        &larr; Go back
      </button>
    </div>
  );
}

export default Error;
