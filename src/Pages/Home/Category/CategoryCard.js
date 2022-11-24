import React from 'react';

const CategoryCard = ({category}) => {
    const {name,img, describe,id} = category
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl h-20" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{describe}</p>
    <div className="card-actions">
      <button className="btn btn-primary">See More</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default CategoryCard;