import React from "react";

const Advertise = () => {
  return (
    <div>
      <div className="container mx-auto mt-14 mb-5">
        <div className="grid grid-cols-2 gap-6 items-center">
          <div className="px-5">
            <h1 className="text-3xl font-bold">
              Before diving into the resale process, it's essential to evaluate
              the condition of your phone.
            </h1>
            <p className="py-6 text-base">
              Physical appearance, functionality, battery life, and accessories
              greatly influence resale value. Carefully check for any cosmetic
              or functional issues, and be transparent about the phone's
              condition. This honesty ensures fair pricing and builds trust with
              buyers.
            </p>
          </div>
          <img
            src="https://i.ibb.co/sq5n3qM/11622059775-0.jpg"
            className="w-full  rounded-lg shadow-2xl"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Advertise;
