import React from "react";
import { Link } from "react-router-dom";

const Hero1 = () => {
  return (
    <div className="text-center pt-40 alignitems-center">
      <h1 className="text-5xl">ALWAYS HAVE FUN</h1>

      <button>
        <Link to="/uindex">INDEX</Link>
      </button>
    </div>
  );
};

export default Hero1;
