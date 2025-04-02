import React, { useState, useEffect } from "react";
import { FaUser, FaSearch } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons"; // Import the brand icon
import MobileResponsive from "./MobileResponsive";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false); // Hide when scrolling down
      } else {
        setIsVisible(true); // Show when scrolling up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 py-3 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center gap-4">
        <MobileResponsive />
        <img
          src="./src/assets/home/pplogo.jpg"
          alt="Red Bull Logo"
          className="h-20 w-20"
        />
      </div>
      <div className="hidden sm:flex flex items-center bg-gray-300 px-6 py-2 rounded-full gap-6 text-sm font-medium">
        <span className="cursor-pointer hover:text-red-500">My Store</span>
        <span className="cursor-pointer hover:text-red-500">About us</span>
        <span className="cursor-pointer hover:text-red-500">Contact</span>
        <span className="cursor-pointer hover:text-red-500">Feedback</span>
      </div>
      <div className="flex items-center gap-4 text-xl">
        {/* User Icon with Hover */}
        <div
          className="relative"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <FaUser className="cursor-pointer hover:text-red-500 text-white" />

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-0 w-40 bg-white shadow-lg rounded-lg p-2">
              <ul className="text-gray-800">
                <li className="hover:bg-gray-100">
                  <a
                    href="/signup"
                    className="flex items-center gap-2 p-2 w-full"
                  >
                    📍 Sign up
                  </a>
                </li>
                <li className="hover:bg-gray-100">
                  <a
                    href="/login"
                    className="flex items-center gap-2 p-2 w-full"
                  >
                    📺 Login
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Search Icon */}
        <FontAwesomeIcon
          icon={faSearchengin}
          className="cursor-pointer hover:text-red-500 text-white text-2xl"
        />
      </div>
    </nav>
  );
};

export default Header;
