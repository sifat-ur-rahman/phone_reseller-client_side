import React from 'react';
import CategoryCard from './CategoryCard';

const Category = () => {
    const categoryData = [
        {
            id : 1,
            category : '3G',
            describe : 'If you want 3G phone',
            img: 'https://uidesign.gbtcdn.com/gb_blog/2843/3G-smartfon.png',
            

        },
        {
            id : 2,
            category : '4G',
            describe : 'If you want 3G phone',
            img: 'https://img.freepik.com/premium-photo/4g-icon_104576-129.jpg?w=2000',


        },
        {
            id : 3,
            category : '5G',
            describe : 'If you want 3G phone',
            img: 'https://www.shutterstock.com/image-vector/5g-symbol-internet-vector-technology-260nw-1389387017.jpg',


        }
    ]
    return (
        <div className='mt-16 mb-8'>
            <h2 className='text-4xl text-center'>Phone Category</h2>
            <div className='grid mt-8 gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
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