// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HMIndex from "./home/pages/HMIndex";
// import Uindex from "./user/pages/Uindex";
// import INcategory from "./inventory/pages/INcategory";
// import INproduct from "./inventory/pages/INproduct";
// import INlocation from "./inventory/pages/INlocation";
// import INstock from "./inventory/pages/INstock";
// import KathaIndex from "./kathabook/pages/KathaIndex";
// import KathabookName from "./kathabook/pages/KathabookName";
// import Billing from "./billing/pages/Billing";
// import Signup from "./user/pages/Signup";
// import Login from "./user/pages/Login";
// import ForgotPassword from "./user/pages/ForgotPassword";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<HMIndex />} />
//         <Route path="/uindex" element={<Uindex />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/fpwd" element={<ForgotPassword />} />

//         {/* inventory routes  */}
//         <Route path="/category" element={<INcategory />} />
//         <Route path="/product" element={<INproduct />} />
//         <Route path="/location" element={<INlocation />} />
//         <Route path="/stock" element={<INstock />} />

//         {/* kathabook routes  */}
//         <Route path="/kathabook" element={<KathaIndex />} />
//         <Route path="/kathabook/name" element={<KathabookName />} />

//         {/* billing routes  */}
//         <Route path="/billing" element={<Billing />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Home Pages
import HMIndex from "./home/pages/HMIndex";

// User Pages
import Uindex from "./user/pages/Uindex";
import Signup from "./user/pages/Signup";
import Login from "./user/pages/Login";
import ForgotPassword from "./user/pages/ForgotPassword";

// Inventory Pages
import INcategory from "./inventory/pages/INcategory";
import INproduct from "./inventory/pages/INproduct";
import INlocation from "./inventory/pages/INlocation";
import INstock from "./inventory/pages/INstock";

// Kathabook Pages
import KathaIndex from "./kathabook/pages/KathaIndex";
import KathabookName from "./kathabook/pages/KathabookName";

// Billing Pages
import Billing from "./billing/pages/Billing";

// Context Providers
import { CategoryProvider } from "./context/inventory/CategoryContext"; // Adjust the path as necessary

function App() {
  return (
    <CategoryProvider>
      <Router>
        <Routes>
          {/* Home Routes */}
          <Route path="/" element={<HMIndex />} />

          {/* User Routes */}
          <Route path="/uindex" element={<Uindex />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/fpwd" element={<ForgotPassword />} />

          {/* Inventory Routes */}
          <Route path="/category" element={<INcategory />} />
          <Route path="/product" element={<INproduct />} />
          <Route path="/location" element={<INlocation />} />
          <Route path="/stock" element={<INstock />} />

          {/* Kathabook Routes */}
          <Route path="/kathabook" element={<KathaIndex />} />
          <Route path="/kathabook/name" element={<KathabookName />} />

          {/* Billing Routes */}
          <Route path="/billing" element={<Billing />} />

          {/* Catch-all Route for 404 Not Found */}
          <Route path="*" element={<h2>404 Not Found</h2>} />
        </Routes>
      </Router>
    </CategoryProvider>
  );
}

export default App;
