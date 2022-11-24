import React from 'react';
import Affordable from '../Affordable/Affordable';
import Carousel from '../Carousel/Carousel';
import Category from '../Category/Category';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
           <Affordable></Affordable>
           <Category></Category>
        </div>
    );
};

export default Home;