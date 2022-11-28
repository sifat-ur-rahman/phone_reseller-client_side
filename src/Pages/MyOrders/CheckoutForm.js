import React, { useEffect, useState } from 'react';

import {useStripe, CardElement, useElements, PaymentElement} from '@stripe/react-stripe-js'


const CheckoutForm = ({data}) => {
    const [cardError, setCardError] = useState('')
    const [success, setSuccess] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const [clientSecret, setClientSecret] = useState("")

    const stripe = useStripe();
    const elements = useElements();
    const {resalePrice, email, Buyer, _id} = data
    // console.log(data);

    useEffect(() => {
        
        fetch("http://localhost:5000/create-payment-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ resalePrice }),
        })
          .then((res) => res.json())
          .then((data) => setClientSecret(data.clientSecret));
      }, [resalePrice]);

    const handleSubmit = async(event) =>{
        event.preventDefault();
        if(!stripe || !elements){
            return
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
          }

          const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
          if (error) {
            console.log('[error]', error);
            setCardError(error.message)
          } else {
            console.log('[PaymentMethod]', paymentMethod);
            setCardError('')
          }
          setSuccess('')
          const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method:{
                    card: card,
                    billing_details: {
                        name: Buyer,
                        email: email
                    },
                },
            },
          );
          if(confirmError){
            setCardError(confirmError.message)
            return
          }
          if(paymentIntent.status === "succeeded"){
            
            const payment = {
                resalePrice,
                transactionId: paymentIntent.id,
                email,
                bookingId: _id

            }
            fetch('http://localhost:5000/payments',{
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payment)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setSuccess('Your Payment completed')
            setTransactionId(paymentIntent.id)
            })
          }
         
      
    }

    return (
       <>
        <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '26px',
                color: 'rgb(120 53 15)',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className='btn btn-primary btn-sm mt-4' type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
      <p className='text-red-500'>{cardError}</p>
      {
        success && <div>
            <p>{success}</p>
            <p>your transactionId: <span>{transactionId}</span> </p>
        </div>
      }
       </>
    );
};

export default CheckoutForm;