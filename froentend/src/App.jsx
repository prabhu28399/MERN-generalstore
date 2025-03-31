import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HMIndex from "./home/pages/HMIndex";
import Uindex from "./user/pages/Uindex";
import INcategory from "./inventory/pages/INcategory";
import INproduct from "./inventory/pages/INproduct";
import INlocation from "./inventory/pages/INlocation";
import INstock from "./inventory/pages/INstock";
import KathaIndex from "./kathabook/pages/KathaIndex";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HMIndex />} />
        <Route path="/uindex" element={<Uindex />} />

        {/* inventory routes  */}
        <Route path="/category" element={<INcategory />} />
        <Route path="/product" element={<INproduct />} />
        <Route path="/location" element={<INlocation />} />
        <Route path="/stock" element={<INstock />} />

        {/* kathabook routes  */}
        <Route path="/kathabook" element={<KathaIndex />} />
      </Routes>
    </Router>
  );
}

export default App;
