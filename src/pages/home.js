import { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';
import "./home.css";
import { AddWatchList } from '../utils/games/addGame';

// Components
import { ProductCard } from '../components/productCard/ProductCard';

const Home = ({
    gamesData, setGamesData, basket, setBasket, pricesInfo, setPricesInfo, setErrorMsg, Games, GameList, Watchlist, setWatchList
}) => {

    return (
        <div className="gameCard">
        <ProductCard
            gamesData={gamesData} setGamesData={setGamesData}
            basket={basket} setBasket={setBasket}
            pricesInfo={pricesInfo} setPricesInfo={setPricesInfo}  
        />
        </div> 
    )
};
export default Home;