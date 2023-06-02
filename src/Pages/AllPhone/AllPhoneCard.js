import React from 'react';

const AllPhoneCard = ({phoneData, setModelData}) => {
    const {img, name, category, originalPrice, resalePrice, use} = phoneData
    return (
        <div>
            <div className="card card-compact border border-gray-100 hover:border-cyan-600 transition duration-300 ease-in-out bg-base-100 shadow-xl ">
  <figure><img src={img} alt="Shoes" className='p-5' /></figure>
  <div className="card-body">
    <h2 className="card-title text-2xl ">{name}</h2>
    <h2 className="card-title font-bold">Category: {category} Phone</h2>
    <p className='text-xl'>Original price: <span className='font-bold'>{originalPrice}</span> $ </p>
    <p className='text-xl'>Resale price:<span className='font-bold'>{resalePrice} $</span> </p>
    <p className='text-xl'>Use:<span className='font-bold'> {use} </span> years</p>
    <div className="card-actions justify-end">
    
      <label onClick={()=>setModelData(phoneData)}  htmlFor="booking-modal" className="btn btn-outline btn-primary px-8 text-xl font-bold rounded-full"> Buy Now</label>
    </div>
  </div>
</div>
        </div>
    );
};

export default AllPhoneCard;