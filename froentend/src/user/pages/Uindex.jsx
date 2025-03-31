import React from "react";
import UheaderCompnt from "../components/UheaderCompnt";
import Unav from "../sections/Unav";
import HeroAdvertise from "../components/HeroAdvertise";
import Hero from "../sections/Hero";
import StatsCard from "../components/StatsCard";
// import Hero from "../components/Hero"; // Make sure the path is correct

const Uindex = () => {
  return (
    <div className="bg-slate-200 min-h-screen">
      <UheaderCompnt />
      <div className="flex">
        {/* Navigation - stays the same */}
        <div className="flex">
          <Unav />
        </div>

        {/* Main Content Area */}
        <div className="flex-1">
          {/* HeroAdvertise Component */}
          <div className="p-4">
            <HeroAdvertise />
          </div>

          {/* Hero Component */}
          <div className="p-4">
            <StatsCard />
          </div>
          <div className="p-4">
            <Hero />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Uindex;
