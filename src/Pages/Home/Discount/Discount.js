import React from 'react';
import Countdown from './Countdown';

const Discount = () => {
    return (
        <div className='bg-red-200  lg:p-10 lg:m-9 grid justify-items-center rounded-lg shadow-xl shadow-red-100'>
            <h1 className='text-4xl lg:px-8 mx-5 items-center'>
                30% discount on all your purchases. Time to take the offer is 
            </h1>
            <div className='text-4xl lg:px-8 lg:mx-5 my-4 items-center font-extrabold'>
            <Countdown></Countdown>
            </div>
        </div>
    );
};

export default Discount;