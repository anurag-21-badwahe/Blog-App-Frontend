import React, { useState } from 'react';

const Navbar = () => {
  // State to track user authentication
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Dummy user data
  const [user, setUser] = useState({
    name: "John Doe", // Replace with actual user data
    // Add more user data fields as needed
  });

  // Function to handle login
  const handleLogin = () => {
    // Simulate login process, can be replaced with actual authentication logic
    // For demonstration purposes, just toggling the isLoggedIn state
    setIsLoggedIn(true);
  };

  // Function to handle logout
  const handleLogout = () => {
    // Simulate logout process
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
                  <button onClick={handleLogout} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Logout
                  </button>
                </div>
              ) : (
                <button onClick={handleLogin} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Login
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
