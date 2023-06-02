import React from 'react';


const SaleCard = ({phone}) => {
    const { name,img, } = phone
    return (
        <div>
            <div className="card border border-gray-100 hover:border-cyan-600 transition duration-300 ease-in-out  bg-base-100 shadow-xl">
  <figure className="">
    <img  src={img} alt="Shoes" className="rounded-xl p-3 w-50 h-60" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Name: {name} Phone</h2>
    
    
  </div>
</div>
        </div>
    );
};

export default SaleCard;