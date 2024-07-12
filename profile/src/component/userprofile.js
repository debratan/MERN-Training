import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "./AuthCOntext";

export default function Userprofile() {
  const [profile, setProfile] = useState({ name: "", email: "", bio: "" });
  const { isAuthenticated, login, logout } = useContext(AuthContext);
  useEffect(() => {
    axios
      .get("http://localhost:5000/profile")
      .then((response) => {
        setProfile(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the profile!.", error);
      });
  }, [isAuthenticated]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:5000/profile", profile)
      .then((response) => {
        alert("Profile Update successfully");
      })
      .catch((error) => {
        console.error("There was an error while update.");
      });
  };

  return (
    <div className="main">
      {
        isAuthenticated? (
          <div>
          <h1>User Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div></div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={profile.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Bio:</label>
          <textarea
            name="bio"
            value={profile.bio}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit">Update Profile</button>
      </form>
      <button onClick={logout}>Log Out</button>
      </div>
        ):
        (
          <div>
          <h1>Please Login to view your profile</h1>
          <button onClick={login}>Log In</button>
          </div>
        )
      }
      
    </div>
  );
}
