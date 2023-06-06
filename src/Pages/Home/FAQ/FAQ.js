import React from 'react';
import FAQCard from './FAQCard';


const FAQ = () => {

    return (
        <div className='p-4 bg-slate-100 m-8 rounded-xl'>
            <FAQCard title="How do I maximize the value of my phone during resale?" content="To maximize the value of your phone, present it in excellent condition, capture appealing photos, write an accurate description, choose the right selling platform, time your sale strategically, and set a competitive price based on market trends."></FAQCard>
            <FAQCard title="Is it safe to sell my phone online?" content="Selling your phone online can be safe if you take necessary precautions. Use reputable platforms, ensure secure payment methods, and follow best practices for shipping and communication to protect yourself and your buyer."></FAQCard>
            <FAQCard title="What are the benefits of phone resale?" content="Phone resale allows you to earn money from your old phone, reduce electronic waste, contribute to a more sustainable approach to technology consumption, and provide others with affordable access to devices."></FAQCard>
   
  

        </div>
    );
};

export default FAQ;