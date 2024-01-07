import React from "react";
import { Link } from "react-router-dom";
import SearchOrder from "../Order Feature/SearchOrder";
import UserName from "../User Feature/UserName";

const Header = () => {
  return (
    <header className=" mb-4 flex items-center justify-between border-b border-double border-black bg-[#06b6d4] px-6 py-5 uppercase sm:px-10">
      <Link to="/" className="  logofont text-xl tracking-widest ">
        Pizza palace
      </Link>

      <SearchOrder />
      <UserName />
    </header>
  );
};

export default Header;
