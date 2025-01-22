import React, { useState, useEffect } from "react";
import { LogoutIcon, SearchIcon } from "../../Assets/Icons";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

function Header({ hide }) {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [allHubs, setAllHubs] = useState([]);
  const [filteredHubs, setFilteredHubs] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

  const handleLogout = () => {
    sessionStorage.clear();
    toast.success("User logged out successfully");
    navigate("/");
  };

  useEffect(() => {
    const fetchHubs = async () => {
      try {
        const mastermobile = sessionStorage.getItem("mastermobile");
        const sessionToken = sessionStorage.getItem("sessionToken");

        const response = await axios.post(
          `${apiBaseUrl}/masterdashboard/hublistpage`,
          {
            mastermobile,
            sessionToken,
          }
        );
        setAllHubs(response.data.data);
      } catch (error) {
        console.error("Error fetching hubs:", error);
        toast.error("Failed to fetch hubs");
      } finally {
        setLoading(false);
      }
    };

    fetchHubs();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredHubs([]);
    } else {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      const results = allHubs.filter(
        (hub) =>
          hub.hubname.toLowerCase().includes(lowerCaseSearchTerm) ||
          hub.hubid.toString().includes(lowerCaseSearchTerm)
      );
      setFilteredHubs(results);
    }
  }, [searchTerm, allHubs]);

  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <div className="relative">
          <input
            type="text"
            className="w-[55vw] lg:w-[30vw] rounded-md px-2 lg:px-5 py-2 text-sm lg:text-base"
            placeholder="Search here Hub id/Hub Name"
            id="barlowFont"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            autoComplete="off"
          />
          <i className="text-[#A4A4A4] absolute top-[15%] right-[15px]">
            <SearchIcon />
          </i>
        </div>
        <button
          className={`${hide} text-xs text-nowrap bg-[#7AEC50] rounded-xl ml-1 lg:ml-0 lg:rounded-3xl px-2 lg:px-5 py-1 font-medium lg:text-lg hover:bg-[#74e74a] transition duration-300`}
          id="barlowFont"
          onClick={handleLogout}
        >
          Logout
          <span className="ml-2 lg:ml-5">
            <LogoutIcon />
          </span>
        </button>
      </div>

      <div className="mt-10 absolute">
        {loading && <p className="text-sm text-gray-500">Loading hubs...</p>}
        {!loading && filteredHubs.length > 0 && (
          <ul
            className="bg-white border border-gray-300 rounded-md max-h-60 overflow-y-auto w-[55vw] lg:w-[30vw]"
            id="scrollbar"
          >
            {filteredHubs.map((hub) => (
              <li
                key={hub.hubid}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => navigate(`/hublist/${hub.hubid}`)}
              >
                {hub.hubname} (ID: {hub.hubid})
              </li>
            ))}
          </ul>
        )}
        {!loading && filteredHubs.length === 0 && searchTerm && (
          <p className="text-sm text-gray-500">No results found</p>
        )}
      </div>
    </div>
  );
}

export default Header;
