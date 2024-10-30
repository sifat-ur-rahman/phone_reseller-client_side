import React from "react";
import SaleCard from "./SaleCard";

const BestSale = () => {
  const saleData = [
    {
      id: 1,
      name: "Galaxy-A04",
      less: "30",
      img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a23-5g.jpg",
    },
    {
      id: 2,
      name: "Galaxy-A23",
      less: "35",
      img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a04s.jpg",
    },
    {
      id: 3,
      name: "iPhone 14 Pro",
      less: "25",
      img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-pro.jpg",
    },
    {
      id: 4,
      name: "Oppo A-57",
      less: "40",
      img: "https://fdn2.gsmarena.com/vv/bigpic/oppo-a57s.jpg",
    },
  ];
  return (
    <div className="mt-16 mb-8">
      <h2 className="text-4xl font-extrabold  text-center">
        Less price product
      </h2>
      <div className="grid mx-8 my-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {saleData.map((phone) => (
          <SaleCard key={phone.id} phone={phone}></SaleCard>
        ))}
      </div>
    </div>
  );
};

export default BestSale;
