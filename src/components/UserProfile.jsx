import React from "react";
import { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const UserProfile = () => {
  let navigate = useNavigate();

  useEffect(() => {
    let check = localStorage.getItem("user");
    if (check === "" || check === null) {
      navigate("/UserProfile");
    }
  }, []);

  const [user, setUser] = useState("");

  useEffect(() => {
    // Retrieve the data from local storage
    const userData = localStorage.getItem("user");
    console.log("userData", userData);
    if (userData) {
      try {
        // Split the hyphen-separated string into an array
        const userDetailsArray = userData.split(" - ");

        // Map the array values to user properties
        const [
          UserId,
          FirstName,
          LastName,
          UserName,
          Email,
          Mobile,
          ProfilePic,
        ] = userDetailsArray;
        const user = {
          UserId,
          FirstName,
          LastName,
          UserName,
          Email,
          Mobile,
          ProfilePic,
        };

        setUser(user);
        console.log("user", user);
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    } else {
      console.log("No user data found in local storage");
    }
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  let handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/LoginScreen");
  };

  let handleEditProfile = () => {
    navigate("/UpdateProfile");
  };

  return (
    <div className="profile">
      <div className="profile-body">
        <div
          className="profile-body-img"
          style={{
            backgroundImage: "url('../Assests/user-profile-logo-img.jpg')",
          }}
        ></div>
        <h1>
          {user.FirstName} {user.LastName}
        </h1>
        <h2>{user.UserName}</h2>
        <div className="profile-body-details">
          <div>
            <h4>Email</h4>:<p>{user.Email}</p>
          </div>
          <div>
            <h4>Phone</h4>:<p>{user.Mobile}</p>
          </div>
        </div>
        <div className="profile-edit">
          <button
            className="btn-edit-profile"
            onClick={() => handleEditProfile()}
          >
            Edit Profile
          </button>
          <button className="btn-logout" onClick={() => handleLogout()}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
