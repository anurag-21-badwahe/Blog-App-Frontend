import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [user, setUser] = useState({
    name: "User",
  });

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
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
                  <span className="text-white mr-2">Welcome, {user.name}!</span>
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
                    onClick={handleLogin}
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
