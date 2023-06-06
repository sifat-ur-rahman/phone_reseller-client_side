import React from 'react';
import CategoryCard from './CategoryCard';

const Category = () => {
    const categoryData = [
        {
            id : 1,
            category : '3G',
            describe : 'If you want 3G phone',
            img: 'https://i.ibb.co/BLHZ7L1/images.jpg',
            

        },
        {
            id : 2,
            category : '4G',
            describe : 'If you want 4G phone',
            img: 'https://i.ibb.co/fv2m3Lb/images-1.jpg',


        },
        {
            id : 3,
            category : '5G',
            describe : 'If you want 5G phone',
            img: 'https://i.ibb.co/PC9Mr4s/images-2.jpg',


        }
    ]
    return (
        <div className='mt-16 mb-8'>
            <h2 className='text-4xl font-extrabold  text-center'>Phone Category</h2>
            <div className='grid mx-8 my-8 gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
               categoryData.map((categori)=> <CategoryCard
               key={categori.id}
               categori = {categori}
               ></CategoryCard>) 
            }

            </div>
        </div>
    );
};

export default Category;