import React from "react";
import UheaderCompnt from "../../user/components/UheaderCompnt";
import Unav from "../../user/sections/Unav";
import HeroAdvertise from "../../user/components/HeroAdvertise";
import MoneyCards from "../section/MoneyCards";
import KathaNameInfo from "../section/KathaNameInfo";
// import KathaNameInfo from "../section/KathaNameInfo";

const KathabookName = () => {
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
          <div className="p-4">
            <MoneyCards />
          </div>
          <div className="p-4">
            <KathaNameInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KathabookName;
