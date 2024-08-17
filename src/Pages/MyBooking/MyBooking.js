import React from "react";

const MyBooking = () => {
  return (
    <div>
      <h2 className="text-center text-4xl font-bold py-5">
        Welcome to Phone Resale <br />
        Dashboard
      </h2>
      <div className="grid grid-cols-3 gap-4 mt-8 mx-4">
        <div className="border border-blue-300 font-bold text-center py-3 rounded-lg cursor-pointer hover:bg-lime-50">
          <h4 className="text-3xl">You have</h4>
          <h3 className="text-4xl text-orange-500">17</h3>
          <p className="text-3xl">product</p>
        </div>
        <div className="border border-blue-300 font-bold text-center py-3 rounded-lg cursor-pointer hover:bg-amber-50">
          <h4 className="text-3xl">You have</h4>
          <h3 className="text-4xl text-blue-500">5</h3>
          <p className="text-3xl">Sellers</p>
        </div>
        <div className="border border-blue-300 font-bold text-center py-3 rounded-lg cursor-pointer hover:bg-green-50">
          <h4 className="text-3xl">You have</h4>
          <h3 className="text-4xl text-green-600">8</h3>
          <p className="text-3xl">Buyers</p>
        </div>
      </div>
    </div>
  );
};

export default MyBooking;
