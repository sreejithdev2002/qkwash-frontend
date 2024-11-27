import React from "react";

function ContinueBtn({ click }) {
  return (
    <button
      className="rounded-3xl bg-[#7AEC50] hover:bg-[#6edd45] px-10 py-2 mx-1 font-medium transition duration-300"
      onClick={click}
    >
      Continue
    </button>
  );
}

export default ContinueBtn;
