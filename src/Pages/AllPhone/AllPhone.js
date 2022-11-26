import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllPhoneCard from './AllPhoneCard';
import BuyModal from '../BuyModal/BuyModal'


const AllPhone = () => {
    const phone = useLoaderData()
    const [modelData, setModelData] = useState(null)
    // console.log(phone);
    return (
        <div className='mt-8 mb-8'>
            <h2 className='text-4xl text-center'>This is {phone.length} phone</h2>
            <div className='grid mt-8 gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                phone.map(phoneData=> <AllPhoneCard
                key={phoneData._id}
                phoneData={phoneData}
                setModelData = {setModelData}
                ></AllPhoneCard>)
            }
            </div>

            {
            modelData &&
            <BuyModal
            modelData={modelData}
            setModelData= {setModelData}
            ></BuyModal> }
           
        </div>
    );
};

export default AllPhone;