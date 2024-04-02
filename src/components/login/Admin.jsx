import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProfileComponent = () => {
  const [profileData, setProfileData] = useState(null);
  const [error, setError] = useState(null);
  let getUser = JSON.parse(localStorage.getItem("admin")) || false;

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(
          `https://hadzhicars.pythonanywhere.com/api/auth/profile/${getUser.id}/`
        );
        setProfileData(response.data);
        console.log(profileData);
      } catch (error) {
        setError(error);
      }
    };
    fetchProfileData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="w-[500px] bg-[#fff] px-[40px] flex flex-col items-center justify-center text-[#000] font-[600] relative">
        <Link
          to="/"
          className="absolute top-[-14px] left-[-5px]  bg-[red] w-[30px] h-[30px] flex items-center justify-center rounded-[50%] "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path>
          </svg>
        </Link>
        <h1>Profile</h1>
        {profileData ? (
          <div>
            <p>
              FullName: {profileData.first_name + "-" + profileData.last_name}
            </p>
            <p>Email: {profileData.email}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default ProfileComponent;
