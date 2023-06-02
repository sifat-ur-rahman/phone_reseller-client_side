import React from 'react';

const Contact = () => {
    return (
        <div className='bg-base-300 m-8 rounded-lg'>
            <h1 className='text-4xl text-center font-bold pt-4'>Contact our support team</h1>
            <div className='flex flex-col w-full lg:flex-row'>
            <div className='grid flex-grow px-8 card bg-base-300  place-items-center'>
            <div className="form-control w-full ">
                <label className="label">
                 <span className="label-text">Your Email</span>
                </label>
            <input type="text" placeholder="Your Email" className="input input-bordered w-full " />
  
        </div>
        <div className="form-control w-full ">
                <label className="label">
                <span className="label-text">Subject</span>
                </label>
                <input type="text" placeholder="Email Subject" className="input input-bordered w-full " />
        </div>
     </div>
        <div className='grid flex-grow p-8 card bg-base-300  place-items-center'>
        <div className="form-control w-full">
  <label className="label">
    <span className="label-text">Your massage</span>
    
  </label>
  <textarea className="textarea textarea-bordered w-full h-24" placeholder="Your massage"></textarea>
  
</div>
        </div>
        </div>
        <div className='flex justify-center py-4'>
        <button className='btn btn-outline btn-primary px-16 text-xl font-bold rounded-full'>Submit</button>
        </div>
            
        </div>
    );
};

export default Contact;