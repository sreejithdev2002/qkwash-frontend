import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Dashboard/Header";
import UserDetailsComponent from "../components/UserDetails/UserDetailsComponent";
import UserDetailsTable from "../components/UserDetails/UserDetailsTable";
import { useParams } from "react-router-dom";
import axios from "axios";

function UserDetails() {
  let data = "hidden";
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
  
  const [userDetailsComponent, setUserDetailsComponent] = useState([]);
  const [error, setError] = useState(null);

  const { usermobile } = useParams();
  console.log(usermobile + " This is Number");

  const fetchData = async () => {
    try {
      const mastermobile = sessionStorage.getItem("mastermobile");
      const sessionToken = sessionStorage.getItem("sessionToken");

      const response = await axios.post(
        `${apiBaseUrl}/masterdashboard/moreuserdetails`,
        {
          mastermobile,
          sessionToken,
          usermobile,
        }
      );

      console.log(response.data.data + " This is the response");

      if (response.status === 200) {
        setUserDetailsComponent(response.data.data);
      } else {
        setError("Failed to fetch data. Please try again.", error);
      }
    } catch (error) {
      setError("Failed to fetch data. Please try again.", error);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-[80vw] bg-[#89F3FF] h-screen overflow-auto px-5 pt-5">
        <Header hide={data} />
        <UserDetailsComponent usermobile={usermobile} />
        <UserDetailsTable userDetailsComponent={userDetailsComponent} />
      </div>
    </div>
  );
}

export default UserDetails;
