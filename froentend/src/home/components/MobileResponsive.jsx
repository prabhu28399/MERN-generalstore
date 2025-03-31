import { useState } from "react";
// import react from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import React, { memo } from "react";

const MobileResponsive = ({
  menuItems = ["Home", "About Us", "Contacts", "Feedback"],
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sm:hidden">
      {/* Menu Button */}
      <button
        className="p-2 bg-gray-800 text-white rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar Menu */}
      {isOpen && (
        <div className="fixed top-0 left-0 h-screen w-6 bg-transparent z-50">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 h-screen w-[24px] bg-transparent"
          />
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-6 h-screen w-full max-w-[300px] bg-gray-900 text-white p-4 shadow-lg"
          >
            <button
              className="absolute top-4 right-4 text-white"
              onClick={() => setIsOpen(false)}
            >
              <X size={24} />
            </button>

            <ul className="mt-10 space-y-4">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className="text-lg cursor-pointer hover:text-gray-400"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default MobileResponsive;
