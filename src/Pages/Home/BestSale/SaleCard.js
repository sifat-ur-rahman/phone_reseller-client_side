import React from "react";

const SaleCard = ({ phone }) => {
  const { name, img, less } = phone;
  return (
    <div className="">
      <div className="card border border-gray-100 hover:border-cyan-600 transition duration-300 ease-in-out  bg-base-100 shadow-xl">
        <p className="relative bg-red-600 text-white -m-4 self-end font-bold p-1  rounded-2xl">
          - {less} %
        </p>
        <figure className="">
          <img src={img} alt={name} className="rounded-xl p-3 w-44 h-52" />
        </figure>

        <div className="card-body items-center text-center">
          <h2 className="card-title">Name: {name} Phone</h2>
        </div>
      </div>
    </div>
  );
};

export default SaleCard;
