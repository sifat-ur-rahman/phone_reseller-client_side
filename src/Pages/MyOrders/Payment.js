import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {loadStripe } from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51M8vwOE9LpIQ2iIlkaiN4YVScivTfrCR3iDY44Y41lxoejx28M9ogQSGTcElZwmxWydq6g6c36yW6Er8w5MdZihB00AnoWoBsm');

const Payment = () => {
    const data = useLoaderData()
    
    return (
        <div>
            <h3 className='text-3xl'>payment for: {data.product} </h3>
            <p className='text-xl'>please pay <strong>$ {data.resalePrice}</strong>  for your phone </p>
            <div className='w-auto p-4 my-12 bg-stone-200'>
            <Elements stripe={stripePromise}>
      <CheckoutForm 
      data = {data} />
    </Elements>
            </div>
        </div>
    );
};

export default Payment;