import React from 'react';
import img4 from '../../../phone/min-1.png'

const Affordable = () => {
    return (
        <div>
            <h2 className='text-4xl text-center mt-4 mb-4'>Launch Your Own Mobile</h2>
            <div className="hero mt-4 mb-5">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={img4} className="w-full lg:w-1/2 rounded-lg shadow-2xl" alt='' />
    <div>
      <h1 className="text-5xl font-bold">Easy, Fast, and Affordable!</h1>
      <p className="py-6">One of the easiest, fastest, and most affordable ways to expand your current product suite is to launch your own Mobile Brand and thus become a mobile branded reseller.</p>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Affordable;