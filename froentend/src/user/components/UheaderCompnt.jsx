import React, { useState } from "react";
import {
  FaUser,
  FaSearch,
  FaCommentDots,
  FaBell,
  FaRegNewspaper,
} from "react-icons/fa";

const UheaderCompnt = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-12 flex items-center justify-between px-6 bg-white shadow-md z-50">
      {/* Logo Section */}
      {/* <div className="flex items-center gap-3">
        <img
          src="./src/assets/home/pplogo.jpg"
          alt="Logo"
          className="h-10 w-10"
        />
        <h3 className="font-bold text-red-500 text-lg">PRABHA DARLING</h3>
      </div> */}
      <div className="flex items-center gap-3">
        <a href="/uindex" className="flex items-center gap-3">
          {" "}
          {/* Added link wrapper */}
          <img
            src="./src/assets/home/pplogo.jpg"
            alt="Logo"
            className="h-10 w-10"
          />
          <h3 className="font-bold text-red-500 text-lg">PRABHA DARLING</h3>
        </a>
      </div>

      {/* Search Bar - 70% width, beside icons */}
      <div className="flex items-center gap-6">
        <form className="w-[70%]">
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="search"
              id="default-search"
              className="w-full p-2 pl-10 text-sm border-2 border-gray-600 rounded-full bg-slate-200 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search..."
              required
            />
          </div>
        </form>

        {/* Icons Section */}
        <FaCommentDots className="cursor-pointer hover:text-blue-500 text-xl" />
        <FaBell className="cursor-pointer hover:text-blue-500 text-xl" />
        <FaRegNewspaper className="cursor-pointer hover:text-blue-500 text-xl" />

        {/* Profile Image with Dropdown */}
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src="https://d2gwgwt9a7yxle.cloudfront.net/what_is_user_id_in_net_banking_mobile_871b681e52.jpg"
            alt="Profile"
            className="h-10 w-10 rounded-full cursor-pointer"
          />
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
              <div className="flex items-center p-2 border-b border-gray-300">
                <img
                  src="https://d2gwgwt9a7yxle.cloudfront.net/what_is_user_id_in_net_banking_mobile_871b681e52.jpg"
                  alt="Profile"
                  className="h-10 w-10 rounded-full mr-2"
                />
                <div>
                  <p className="font-semibold">John Doe</p>
                  <p className="text-sm text-gray-500">john.doe@example.com</p>
                </div>
              </div>
              <div className="flex justify-between p-2">
                <a
                  href="/manage-settings"
                  className="flex items-center text-gray-700 hover:text-blue-500"
                >
                  <FaUser className="mr-2" /> Manage Settings
                </a>
                <button className="text-gray-700 hover:text-blue-500">
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Dog GIF */}
        <img
          src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2gxNmd5cjNxOWhtbHNlbWE5dHh5eDJvcDBpenQ0eGx5YXhtNnk4NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7x3PHPSMXSONHFuOK4/giphy.gif"
          alt="Dog GIF"
          className="h-10 w-10 rounded-full"
        />
      </div>
    </nav>
  );
};

export default UheaderCompnt;
