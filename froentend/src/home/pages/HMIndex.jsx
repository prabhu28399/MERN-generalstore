import React from "react";
import Header from "../components/Header";
import Body from "../components/Body";
import Hero1 from "../components/Hero1";

const HMIndex = () => {
  return (
    <div
      className="h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('src/assets/home/desertwhite.jpg')" }}
    >
      <Header />
      <Hero1 />
      <Body />
    </div>
  );
};

export default HMIndex;
