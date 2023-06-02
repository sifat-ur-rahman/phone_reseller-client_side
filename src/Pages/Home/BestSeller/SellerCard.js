import React from 'react';

const SellerCard = ({person}) => {
    console.log(person);
        const { name,img } = person
    return (
        <div>
            <div className="card border border-gray-100 hover:border-cyan-600 transition duration-300 ease-in-out  bg-base-100 shadow-xl">
  <figure className="">
    <img src={img} alt="" className="rounded-xl w-50 h-60" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Name: {name} </h2>
    
    
  </div>
</div>
        </div>
    );
};

export default SellerCard;