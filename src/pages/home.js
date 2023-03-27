import { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';
import "./home.css";

// Components
import { ProductCard } from '../components/productCard/ProductCard';

const Home = ({ 
    gamesData, setGamesData, basket, setBasket, pricesInfo, setPricesInfo 
}) => {
    //States?

    return (
        <ProductCard 
            gamesData={gamesData} setGamesData={setGamesData}
            basket={basket} setBasket={setBasket}
            pricesInfo={pricesInfo} setPricesInfo={setPricesInfo}
            />
    )
};

export default Home;