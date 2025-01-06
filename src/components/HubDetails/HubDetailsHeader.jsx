import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function HubDetailsHeader({ hubId }) {
  const navigate = useNavigate();
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

  const handleEdit = () => {
    navigate(`/hublist/edit/${hubId}`);
  };

  const handleDelete = async () => {
    try {
      const mastermobile = sessionStorage.getItem("mastermobile");
      const sessionToken = sessionStorage.getItem("sessionToken");

      const response = await axios.post(
        `${apiBaseUrl}/masterdashboard/deletehub`,
        {
          mastermobile,
          sessionToken,
          hubid: hubId,
        }
      );

      if (response.status === 200) {
        toast.success("Hub deleted successfully");
        navigate("/hublist");
      } else {
        toast.error("Failed to delete hub");
      }
    } catch (error) {
      toast.error("An error occured!");
    }
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
