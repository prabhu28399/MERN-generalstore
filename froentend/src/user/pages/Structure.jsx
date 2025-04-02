import React from "react";

const Structure = () => {
  return (
    <div className="relative flex w-full h-screen overflow-hidden">
      {/* Left Green Section */}
      <div className="flex-1 bg-green-700 p-4 flex flex-col items-center justify-center">
        <div className="text-white text-6xl font-bold mb-8">
          √<span className="border-b-2 border-white">1</span>
        </div>
        <h4 className="text-white text-center max-w-md">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
          tempora necessitatibus sunt dolores odit voluptate culpa? Dolorem ipsa
          accusamus, hic voluptatem, debitis quas eum ut suscipit maxime
          laudantium tenetur vitae molestias deleniti. Consequuntur.
        </h4>
      </div>

      {/* Wavy Divider */}
      <div className="absolute inset-y-0 left-1/2 w-[10px] bg-transparent -translate-x-1/2">
        <svg
          className="h-full w-full"
          viewBox="0 0 10 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5,0 C10,25 0,50 5,75 C10,100 0,125 5,150"
            fill="none"
            stroke="white"
            strokeWidth="3"
          />
        </svg>
      </div>

      {/* Right Blue Section */}
      <div className="flex-1 bg-blue-400 p-4 flex items-center justify-center">
        <h4 className="text-white text-center max-w-md">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
          tempora necessitatibus sunt dolores odit voluptate culpa? Dolorem ipsa
          accusamus, hic voluptatem, debitis quas eum ut suscipit maxime
          laudantium tenetur vitae molestias deleniti. Consequuntur.
        </h4>
      </div>
    </div>
  );
};

export default Structure;
