import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const { categoryName, img, describe } = category;
  return (
    <div className="container ">
      <div className="card border border-gray-100 hover:border-cyan-600 transition duration-300 ease-in-out  shadow-xl">
        <figure className="">
          <img src={img} alt="Shoes" className="rounded-xl w-44 mt-3 h-52" />
        </figure>
        <div className="p-5 grid items-center justify-center text-center">
          <h2 className="text-2xl font-semibold">
            Category: {categoryName} Phone
          </h2>
          <p className="pt-1 pb-3">{describe}</p>
          <div className="card-actions">
            <Link to={`/category/${categoryName}`}>
              <button className="btn btn-outline btn-primary px-16 text-xl font-bold rounded-full">
                See More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
