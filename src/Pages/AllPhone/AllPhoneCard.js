import React from 'react';

const AllPhoneCard = ({phoneData, setModelData}) => {
    const {img, name, category, originalPrice, resalePrice, use} = phoneData
    return (
        <div>
            <div className="card card-compact  bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <h2 className="card-title">Category: {category} Phone</h2>
    <p>Original price: {originalPrice}</p>
    <p>Resale price: {resalePrice}</p>
    <p>Use: {use} years</p>
    <div className="card-actions justify-end">
    
      <label onClick={()=>setModelData(phoneData)}  htmlFor="booking-modal" className="btn btn-primary text-white"> Buy Now</label>
    </div>
  </div>
</div>
        </div>
    );
};

export default AllPhoneCard;