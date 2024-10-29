import React from "react";

const Captivating = () => {
  return (
    <div className="mx-auto container">
      <div className="hero mt-28 mb-5">
        <div className="grid lg:grid-cols-2 gap-9 items-center">
          <div className="">
            <h1 className="text-3xl font-bold">
              Creating an appealing product listing is crucial to grab the
              attention of potential buyers.{" "}
            </h1>
            <p className="py-6 text-lg">
              Begin with high-quality, well-lit photographs that showcase your
              phone from various angles. Highlight any unique features or
              exceptional aspects of your device. Craft a compelling title....
            </p>
          </div>
          <img
            src="https://i.ibb.co/bQJbvmV/photo-1574471270926-9e553a2fbd11.jpg"
            className="w-full  rounded-lg shadow-2xl"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Captivating;
