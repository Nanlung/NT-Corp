import React from "react";

const TopCards = () => {
  return (
    <div className="grid lg:grid-cols-5 gap-4 p-4">
      <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold">$13,000</p>
          <p className="text-gray-700">Daily Revenue</p>
        </div>
        <p className="bg-gray-300 flex justify-center items-center p-2 rounded-lg">
          <span className="text-gray-700 text-lg">+20%</span>
        </p>
      </div>
      <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold">$4,745,000</p>
          <p className="text-gray-700">Annual Revenue</p>
        </div>
        <p className="bg-gray-300 flex justify-center items-center p-2 rounded-lg">
          <span className="text-gray-700 text-lg">+14%</span>
        </p>
      </div>
      <div className=" bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold">1300</p>
          <p className="text-gray-700">Customers</p>
        </div>
        <p className="bg-gray-300 flex justify-center items-center p-2 rounded-lg">
          <span className="text-gray-700 text-lg">+15%</span>
        </p>
      </div>
    </div>
  );
};

export default TopCards;
