import React from "react";
import { useNavigate } from "react-router-dom";

function HubDetailsHeader() {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate("/hublist/edit/id");
  };

  const handleDelete = () => {
    console.log("Hub Deleted");
  };

  return (
    <div className="flex justify-between" id="barlowFont">
      <h1 className="my-5 text-2xl font-medium">Hub Details</h1>
      <div>
        <button
          className="px-8 py-2 bg-[#E54040] my-5 rounded-md font-medium mr-2"
          onClick={handleDelete}
        >
          DELETE
        </button>
        <button
          className="px-8 py-2 bg-[#7AEC50] my-5 rounded-md font-medium ml-2"
          onClick={handleEdit}
        >
          EDIT
        </button>
      </div>
    </div>
  );
}

export default HubDetailsHeader;
