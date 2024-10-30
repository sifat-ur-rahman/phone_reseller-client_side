import React from "react";

const Capturing = () => {
  return (
    <div>
      <div className="container mx-auto mt-14 mb-5">
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          <div className="px-5">
            <h1 className="text-3xl font-bold">
              Capturing Eye-Catching Photos and Writing a Compelling Description
            </h1>
            <p className="py-6 text-base">
              To resell your phone, take high-quality, well-lit photos from
              multiple angles to showcase its condition and features. In the
              description, be honest about specifications, condition, and any
              warranty. List included items like cables or packaging.
              Transparency builds trust with buyers.
            </p>
          </div>
          <img
            src="https://i.ibb.co/0f5FKb4/DLJFtt-Mg-LMb-NSsr9-Rx-P8-HX-1200-80.jpg"
            className="w-full  rounded-lg shadow-2xl"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Capturing;
