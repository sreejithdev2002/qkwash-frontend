import React from "react";
import { LogoutIcon, SearchIcon } from "../../Assets/Icons";
import { useNavigate } from "react-router-dom";

function Header({ hide }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="flex justify-between">
      <div className="relative">
        <input
          type="text"
          className="w-[30vw] rounded-md px-5 py-2"
          placeholder="Search here Hub id/Hub Name "
          id="barlowFont"
        />
        <i className="text-[#A4A4A4] absolute top-[15%] right-[15px]">
          <SearchIcon />
        </i>
      </div>
      <button
        className={`${hide} bg-[#7AEC50] rounded-3xl px-5 py-1 font-medium text-lg hover:bg-[#74e74a] transition duration-300`}
        id="barlowFont"
        onClick={handleClick}
      >
        Logout
        <span className="ml-5">
          <LogoutIcon />
        </span>
      </button>
    </div>
  );
}

export default Header;
