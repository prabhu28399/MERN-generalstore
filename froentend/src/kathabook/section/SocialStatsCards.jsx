import React from "react";

const SocialStatsCards = () => {
  return (
    <div className="flex gap-4 ml-60">
      {/* Likes Card */}
      <div className="bg-white rounded-lg shadow-sm p-6 w-48 border border-gray-100 hover:shadow-md transition-shadow">
        <div className="text-3xl font-bold text-gray-800">139M</div>
        <div className="text-gray-500 mt-2">LIKES</div>
      </div>

      {/* Retweets Card */}
      <div className="bg-white rounded-lg shadow-sm p-6 w-48 border border-gray-100 hover:shadow-md transition-shadow">
        <div className="text-3xl font-bold text-gray-800">7,182</div>
        <div className="text-gray-500 mt-2">RETWEETS</div>
      </div>
    </div>
  );
};

export default SocialStatsCards;
