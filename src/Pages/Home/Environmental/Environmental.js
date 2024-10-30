import React from "react";
import img01 from "../../../../src/images/Recycle-Cell-Phones.jpeg";
import { FaDotCircle } from "react-icons/fa";

const Environmental = () => {
  return (
    <div>
      <div className="container mx-auto my-16">
        <div className="grid grid-cols-2 gap-8 items-center">
          <img src={img01} className=" rounded-lg  w-[100%] " alt="" />
          <div>
            <h1 className="text-3xl font-bold">
              Sell your old electronics to reduce environmental pollution.
            </h1>
            <ul className="py-6 text-xl">
              <li>
                <FaDotCircle /> Find a reputable buyer and erase all personal
                data for safety.
              </li>
              <li>
                <FaDotCircle /> Research prices to get a fair deal and
                prioritize recycling over disposal.
              </li>
              <li>
                {" "}
                <FaDotCircle /> Choose selling over disposal to help the
                environment.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Environmental;
