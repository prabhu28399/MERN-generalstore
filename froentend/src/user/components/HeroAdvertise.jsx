import React, { useState, useEffect } from "react";

const HeroAdvertise = () => {
  const images = [
    "https://4kwallpapers.com/images/walls/thumbs_3t/7561.jpg",
    "https://4kwallpapers.com/images/walls/thumbs_3t/13228.jpg",
    "https://4kwallpapers.com/images/walls/thumbs_3t/12815.jpg",
    // "https://4kwallpapers.com/images/walls/thumbs_3t/13414.jpg",
    "https://4kwallpapers.com/images/walls/thumbs_3t/13396.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="pt-20 ml-60 bg-transparent p-10">
      <div className="mb-8">
        <h3 className="text-3xl font-bold text-gray-800">
          Welcome Prabhu Prakash
        </h3>
      </div>

      {/* Image slideshow container */}
      <div className="flex justify-center mb-10">
        <div className="w-[80%] h-50 relative overflow-hidden">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Featured content ${index + 1}`}
              className={`w-full h-full object-cover rounded-lg shadow-xl transition-opacity duration-1000 absolute top-0 left-0 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentImageIndex ? "bg-gray-800" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroAdvertise;
