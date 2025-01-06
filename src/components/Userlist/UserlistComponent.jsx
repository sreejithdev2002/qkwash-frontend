import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function UserlistComponent() {
  const [userList, setUserList] = useState([]);
  const [error, setError] = useState(null);

  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

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
        const sortedData = response.data.data.sort(
          (a, b) => a.userid - b.userid
        );
        setUserList(sortedData);
        console.log(sortedData);
      } else {
        setError("Failed to fetch data. Please try again.", error);
      }
    } catch (error) {
      setError("An error occurred while fetching the data.");
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const navigate = useNavigate();


  return (
    <div id="barlowFont">
      <h1 className="my-5 font-semibold text-2xl text-[#464255]">User List</h1>
      <div className="flex flex-col">
        {userList.map((data) => (
          <div
            key={data.userid}
            className="grid grid-cols-4 mx-0 justify-start bg-[#D9D9D9] hover:bg-[#d4d3d3] rounded-2xl p-4 my-3 transition duration-300 cursor-pointer"
            onClick={() => {
              navigate(`/userlist/${data.usermobile}`);
            }}
          >
            <div>
              <h1 className="text-2xl text-[#464255] font-medium pl-5">
                {data.username}
              </h1>
              <p className="font-medium text-[#A3A3A3] text-xl pl-5">
                #{data.userid}
              </p>
            </div>
            <div>
              <h2 className="font-medium text-center">Mobile Number</h2>
              <p className="font-medium text-center">{data.usermobile}</p>
            </div>
            <div>
              <h2 className="font-medium text-center">Total Wash</h2>
              <p className="font-medium text-center">{data.numberofWashes || 0}</p>
            </div>
            <div>
              <h2 className="font-medium text-center">Total Dry</h2>
              <p className="font-medium text-center">{data.numberofDryers || 0}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserlistComponent;
