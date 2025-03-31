import React, { useState, useEffect } from "react";

const ResponsiveMenu = () => {
  const [isVisible, setIsVisible] = useState(window.innerWidth > 750);
  const [showItems, setShowItems] = useState([false, false, false, false]);

  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth > 750);
      setShowItems([false, false, false, false]); // Hide items on resize
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleShowMenu = () => {
    let index = 0;
    const interval = setInterval(() => {
      setShowItems((prev) => {
        const newItems = [...prev];
        newItems[index] = true;
        return newItems;
      });
      index++;
      if (index >= showItems.length) clearInterval(interval);
    }, 300); // Delay for orderly appearance
  };

  return (
    <div className="text-sm font-medium">
      {/* Button appears when screen width is 750px or less */}
      {!isVisible && (
        <button
          onClick={handleShowMenu}
          className="bg-gray-300 px-4 py-2 rounded-full mb-2"
        >
          Show Menu
        </button>
      )}

      {/* Menu Items */}
      {(isVisible || showItems.some((item) => item)) && (
        <div className="flex flex-col sm:flex-row bg-gray-300 px-6 py-2 rounded-full gap-6">
          {["My Store", "About us", "Contact", "Feedback"].map(
            (item, index) => (
              <span
                key={index}
                className={`cursor-pointer hover:text-red-500 transition-opacity duration-300 ${
                  showItems[index] || isVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                {item}
              </span>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default ResponsiveMenu;
