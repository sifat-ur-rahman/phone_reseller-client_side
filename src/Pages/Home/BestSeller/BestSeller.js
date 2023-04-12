import React from 'react';
import SellerCard from './SellerCard';

const BestSeller = () => {
    const sellerData = [
        {
            id : 1,
            name : 'Eleanor',
            img: 'https://i.ibb.co/ZSqrvM1/avatar-2027367-340.png',
        },
        {
            id : 2,
            name : 'Baldwin',
            img: 'https://i.ibb.co/zRb4HpT/images-2.jpg',
        },
        {
            id : 3,
            name : 'Lillian',
            img: 'https://i.ibb.co/wdqNG4f/pngtree-cute-girl-avatar-material-png-image-4023832.jpg',
        },
        {
            id : 4,
            name : 'Fabian',
            img: 'https://i.ibb.co/xHXGr4s/download.jpg',
        },
        {
            id : 5,
            name : 'Scarlett',
            img: 'https://i.ibb.co/HYQj3RW/istockphoto-1331335261-612x612.jpg',
        }
    ]
    return (
        <div className='mt-16 mb-8'>
        <h2 className='text-4xl font-extrabold  text-center'>Best Seller this month</h2>
        <div className='grid mx-8 my-8 gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-5'>
        {
           sellerData.map((person)=> <SellerCard
           key={person.id}
           person = {person}
           ></SellerCard>) 
        }

        </div>
    </div>
    );
};

export default BestSeller;