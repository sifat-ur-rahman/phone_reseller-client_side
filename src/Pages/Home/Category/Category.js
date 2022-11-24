import React from 'react';
import CategoryCard from './CategoryCard';

const Category = () => {
    const categoryData = [
        {
            id : 1,
            name : '3G Phone',
            img: 'https://thumbs.dreamstime.com/z/logo-de-la-technologie-du-sans-fil-g-53001725.jpg',
            

        },
        {
            id : 2,
            name : '4G Phone',
            img: 'https://img.freepik.com/premium-photo/4g-icon_104576-129.jpg?w=2000',


        },
        {
            id : 3,
            name : '5G Phone',
            img: 'https://www.shutterstock.com/image-vector/5g-symbol-internet-vector-technology-260nw-1389387017.jpg',


        }
    ]
    return (
        <div className='mt-16 mb-8'>
            <h2 className='text-4xl text-center'>Phone Category</h2>
            <div className='grid mt-8 gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
               categoryData.map((category)=> <CategoryCard
               key={category.id}
               category = {category}
               ></CategoryCard>) 
            }

            </div>
        </div>
    );
};

export default Category;