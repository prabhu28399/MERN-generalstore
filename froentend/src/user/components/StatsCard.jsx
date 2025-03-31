import React from "react";
import { FaShoppingCart, FaUsers, FaTicketAlt } from "react-icons/fa";

const statsData = [
  {
    type: "progress",
    title: "Out of Stock",
    current: 13,
    total: 30,
    icon: (
      <FaShoppingCart className="text-5xl text-white opacity-50 absolute top-3 right-3" />
    ),
    color: "from-pink-500 to-purple-500",
  },
  {
    type: "count",
    title: "Billing",
    count: "15.07k",
    percent: "9.23%",
    icon: (
      <FaUsers className="text-5xl text-white opacity-50 absolute top-3 right-3" />
    ),
    color: "from-blue-500 to-indigo-500",
  },
  {
    type: "comparison",
    title: "Kathabook",
    positive: "+300",
    negative: "-400",
    icon: (
      <FaTicketAlt className="text-5xl text-white opacity-50 absolute top-3 right-3" />
    ),
    color: "from-green-500 to-emerald-500",
  },
];

const StatsCard = () => {
  return (
    <div className="flex gap-6 ml-60 justify-center">
      {statsData.map((stat, index) => (
        <div
          key={index}
          className={`relative w-72 p-5 rounded-lg shadow-lg bg-gradient-to-r ${stat.color} text-white`}
        >
          <h3 className="text-lg font-semibold">{stat.title}</h3>

          {stat.type === "progress" && (
            <>
              <div className="flex items-center justify-between mt-2">
                <p className="text-3xl font-bold">
                  {stat.current}/{stat.total}
                </p>
                <span className="text-sm bg-white/20 px-2 py-1 rounded-lg">
                  {((stat.current / stat.total) * 100).toFixed(1)}%
                </span>
              </div>
              {/* Progress Bar */}
              <div className="mt-4 bg-white/30 h-2 rounded-full">
                <div
                  className="bg-white h-2 rounded-full"
                  style={{ width: `${(stat.current / stat.total) * 100}%` }}
                ></div>
              </div>
            </>
          )}

          {stat.type === "count" && (
            <>
              <div className="flex items-center justify-between mt-2">
                <p className="text-3xl font-bold">{stat.count}</p>
                <span className="text-sm bg-white/20 px-2 py-1 rounded-lg">
                  {stat.percent} ↑
                </span>
              </div>
              <div className="mt-4 bg-white/30 h-2 rounded-full">
                <div
                  className="bg-white h-2 rounded-full"
                  style={{ width: stat.percent }}
                ></div>
              </div>
            </>
          )}

          {stat.type === "comparison" && (
            <div className="flex justify-between items-center mt-4">
              <span className="text-xl font-bold text-green-300">
                {stat.positive}
              </span>
              <span className="text-xl font-bold text-red-300">
                {stat.negative}
              </span>
            </div>
          )}

          {stat.icon}
        </div>
      ))}
    </div>
  );
};

export default StatsCard;
