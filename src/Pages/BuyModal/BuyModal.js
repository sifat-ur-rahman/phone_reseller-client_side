import React, { useContext } from 'react';
import toast  from 'react-hot-toast';


import { AuthContext } from '../../Contexts/AuthProvider';

const BuyModal = ( {modelData, setModelData}) => {
    const {name, resalePrice,} =  modelData
    console.log(modelData);
    const {user} = useContext(AuthContext)

    const handleBooking = event => {
        event.preventDefault()
        const form = event.target 
        
        const buyerName = form.name.value
        const email = form.email.value
        const phone = form.phone.value


        console.log(email,phone);

        const booking ={
            
            product: name,
            Buyer: buyerName,
          
            email,
            phone
        }

        console.log(booking);
        fetch('http://localhost:5000/bookings', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if(data.acknowledged){
            setModelData(null)
            toast.success('Booking confirmed')
            
          }
          
          
        })
        
    } 

    return (
        <>
          <input type="checkbox" id="booking-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">{name} </h3>
    <form onSubmit={handleBooking}  className='grid grid-cols-1 gap-3 mt-10'>
        <p>resalePrice</p>
    <input type="text"  defaultValue={resalePrice}  readOnly  className="input input-bordered input-info w-full " />
  
   
    
    <input name='name' type="text" defaultValue={user?.displayName} readOnly placeholder="Your Name" className="input input-bordered input-info w-full " />
    <input name='email'readOnly defaultValue={user?.email} type="email" placeholder="Email Address" className="input input-bordered input-info w-full " />
    <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered input-info w-full " />
    <br />
    <input className='btn btn-accent w-full ' type="submit" value="Submit" />

    </form>
  </div>
</div>  
        </>
    );
};

export default BuyModal;