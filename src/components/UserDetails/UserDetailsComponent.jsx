import axios from "axios";
import React, { useEffect, useState } from "react";

function UserDetailsComponent({ usermobile }) {
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

  const [user, setUser] = useState([]);
  const [filteredUser, setFilteredUser] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const mastermobile = sessionStorage.getItem("mastermobile");
      const sessionToken = sessionStorage.getItem("sessionToken");

      const response = await axios.post(
        `${apiBaseUrl}/masterdashboard/userdetails`,
        {
          mastermobile,
          sessionToken,
        }
      );

      if (response.status === 200) {
        setUser(response.data.data);
      } else {
        setError("Failed to fetch data. Please try again.");
      }
    } catch (err) {
      setError("Failed to fetch data. Please try again.");
      console.error(err);
    }
  };

  useEffect(() => {
    if (user.length > 0) {
      const filterUser = user.find((data) => data.usermobile === usermobile);
      setFilteredUser(filterUser || null);
    }
  }, [user, usermobile]);

  useEffect(() => {
    fetchData();
  }, [usermobile]);

  return (
    <div id="barlowFont">
      <h1 className="my-5 font-semibold text-2xl text-[#464255]">User List</h1>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : filteredUser ? (
        <div className="grid grid-cols-5 px-5 items-center">
          <div>
            <h1 className="font-medium text-[#464255] text-3xl">
              {filteredUser.username.toUpperCase()}
            </h1>
            <p className="font-medium text-[#A3A3A3] text-lg">
              #{filteredUser.userid}
            </p>
          </div>
          <div>
            <h1 className="font-medium text-lg">Mobile Number</h1>
            <p className="font-medium text-lg">{filteredUser.usermobile}</p>
          </div>
        </div>
      ) : (
        <p className="text-gray-500">No user found with this mobile number.</p>
      )}
    </div>
  );
}

export default UserDetailsComponent;
