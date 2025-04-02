import React from "react";
// import Unav from "../../user/sections/Unav";
import UheaderCompnt from "../../user/components/UheaderCompnt";
import InvoiceComponent from "../sections/InvoiceComponent";

const Billing = () => {
  return (
    <div className="bg-slate-200 min-h-screen">
      <UheaderCompnt />
      <div className="flex">
        {/* <div className="flex">
          {/* <Unav /> *
        </div> */}

        {/* Main Content Area */}
        <div className="flex-1">
          <div className="p-4">
            <InvoiceComponent />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
