import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search Order#"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="px-4 py-2 mx-4 rounded-e-3xl bg-slate-200 placeholder:text-black md:w-72 md:px-8 md:py-4 focus:outline-none focus:ring-black"
      />
    </form>
  );
}

export default SearchOrder;
