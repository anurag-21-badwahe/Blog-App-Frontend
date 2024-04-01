import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../config";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({ firstName: "", email: "" });
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/users/profile');
        setUserData(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchProfileData();
  }, []); 

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser({
      firstName: "User", // Update to firstName instead of name
      email: "", // Clear email when logging out
    });
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">App Logo</div>
        <div>
          <ul className="flex items-center">
            <li className="mx-2 text-white">Feature 1</li>
            <li className="mx-2 text-white">Feature 2</li>
            <li className="mx-2">
              {isLoggedIn ? (
                <div className="flex items-center">
                  <span className="text-white mr-2">Welcome, {user.firstName}!</span> {/* Update to firstName */}
                  <button
                    onClick={handleLogout}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link to="/signin">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Login
                  </button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
