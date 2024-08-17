import React from "react";
import img01 from "../../../../src/images/Recycle-Cell-Phones.jpeg";

const Environmental = () => {
  return (
    <div>
      <div className="hero min-h-screen mx-auto">
        <div className="hero-content flex-col lg:flex-row ">
          <img src={img01} className=" rounded-lg  w-[100%] " alt="" />
          <div>
            <h1 className="text-5xl font-bold">
              Sell your old electronics products to reduce environmental
              pollution!
            </h1>
            <ul className="py-6 text-xl">
              <li>
                Find a reputable buyer for your old electronics to ensure they
                are properly disposed of or recycled.
              </li>
              <li>
                Before selling, make sure to erase all personal data from your
                device to protect your privacy.
              </li>
              <li>
                Research the value of your old electronics to ensure you get a
                fair price when selling.
              </li>
              <li>
                Always prioritize selling over throwing away old electronics to
                minimize environmental pollution.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Environmental;
