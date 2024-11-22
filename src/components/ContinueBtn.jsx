import React from "react";
import { useNavigate } from "react-router-dom";

function ContinueBtn({path}) {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/${path}`);
    };
  return (
    <button className="rounded-3xl bg-[#7AEC50] hover:bg-[#6edd45] px-10 py-2 mx-1 font-medium transition duration-300"
    onClick={handleClick}
    >
      Continue
    </button>
  );
}

export default ContinueBtn;
