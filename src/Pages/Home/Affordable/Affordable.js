import React from "react";
import img4 from "../../../phone/min-1.png";

const Affordable = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-4xl text-center font-extrabold mt-8 mb-4 ">
        Launch Your Own Mobile
      </h2>
      <div className="hero mt-4 mb-5">
        <div className="grid lg:grid-cols-2 gap-9 items-center ">
          <div className="px-5">
            <h1 className="text-4xl font-bold">Easy, Fast, and Affordable!</h1>
            <p className="py-6 text-lg">
              One of the easiest, fastest, and most affordable ways to expand
              your current product suite is to launch your own Mobile Brand and
              thus become a mobile branded reseller.
            </p>
          </div>
          <img src={img4} className="w-full  rounded-lg " alt="" />
        </div>
      </div>
    </div>
  );
};

export default Affordable;
