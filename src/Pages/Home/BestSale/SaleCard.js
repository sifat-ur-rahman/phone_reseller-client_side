import React from 'react';


const SaleCard = ({phone}) => {
    const { name,img, } = phone
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
  <figure className="">
    <img src={img} alt="Shoes" className="rounded-xl w-50 h-60" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Name: {name} Phone</h2>
    
    
  </div>
</div>
        </div>
    );
};

export default SaleCard;