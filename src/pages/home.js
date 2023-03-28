import { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';
import "./home.css";

// Components
import { ProductCard } from '../components/productCard/ProductCard';

const Home = ({
    gamesData, setGamesData, basket, setBasket, pricesInfo, setPricesInfo, setErrorMsg, Games, GameList, Watchlist, setWatchList
}) => {

    const AddWatchList = (index) => {
        let storedGames = [...Games]
        let GameCopy = [...Watchlist]
        GameCopy.push(storedGames.splice(index, 1)[0]);
        GameList(storedGames);
        setWatchList(GameCopy);
         return (
           <button onClick={() => AddWatchList}>Add to watch list</button>
        )
    }

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