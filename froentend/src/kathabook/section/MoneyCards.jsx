import { FaMoneyBillWheat } from "react-icons/fa6";
import React, { memo } from "react";
import { FaAmazonPay } from "react-icons/fa";

const MoneyCards = () => {
  const stats = [
    {
      platform: "You Will Give",
      // icon: <FaMoneyBillTransfer className="text-blue-600 text-xl" />,
      icon: <FaAmazonPay className="text-red-600 text-xl" />,
      count: "786K",
      bgColor: "bg-red-100",
      textColor: "text-red-600",
    },
    {
      platform: "You Will Get",
      icon: <FaMoneyBillWheat className="text-green-600 text-xl" />,
      count: "42K",
      bgColor: "bg-green-100",
      textColor: "text-green-600",
    },
  ];

  return (
    <div className="flex items-center gap-4 ml-100">
      {stats.map(({ platform, icon, count, bgColor, textColor }) => (
        <div
          key={platform}
          className={`flex items-center justify-between p-4 rounded-lg ${bgColor} shadow-md w-64`}
        >
          <div className="flex items-center gap-2">
            <span className={`p-2 rounded-full ${textColor} bg-opacity-20`}>
              {icon}
            </span>
            <span className="text-gray-800 font-medium">{platform}</span>
          </div>
          <span className={`font-bold ${textColor} text-lg`}>{count}</span>
        </div>
      ))}
    </div>
  );
};

export default MoneyCards;
