import React from 'react';
import Affordable from '../Affordable/Affordable';
import Carousel from '../Carousel/Carousel';
import Category from '../Category/Category';
import Contact from '../Contact/Contact';
import Discount from '../Discount/Discount';
import Environmental from '../Environmental/Environmental';
import BestSale from '../BestSale/BestSale';
import BestSeller from '../BestSeller/BestSeller';
import FAQ from '../FAQ/FAQ';
import Capturing from '../Capturing/Capturing';


const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
           <Affordable></Affordable>
           <Discount></Discount>
           <Category></Category>
           <Environmental></Environmental>
           <BestSale></BestSale>
           <Capturing></Capturing>
           <BestSeller></BestSeller>
           <FAQ></FAQ>
           <Contact></Contact>
        </div>
    );
};

export default Home;