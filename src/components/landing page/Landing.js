import React from 'react';

//components
import Hero from "./Hero";
import Categories from './Categories';
import Products from './Products';

const Landing = () => {
    return (
        <>
           <Hero /> 
           <Categories />
           <Products />
           
        </>
    );
};

export default Landing;