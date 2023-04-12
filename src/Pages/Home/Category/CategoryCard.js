import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({categori}) => {
    const { category,img, describe,} = categori
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
  <figure className="">
    <img src={img} alt="Shoes" className="rounded-xl w-50 h-60" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Category: {category} Phone</h2>
    <p>{describe}</p>
    <div className="card-actions">
      <Link to={`/category/${category}`}><button className="btn btn-primary">See More</button></Link>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default CategoryCard;