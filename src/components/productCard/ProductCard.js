import { useState, useEffect } from 'react';
// import { faker } from '@faker-js/faker';
import { AddWatchList } from '../../utils/games/addGame';

export const ProductCard = ({
    gamesData, basket, pricesInfo, watchlist, setWatchList, GamesData
}) => {
    // ???
    console.log("watchlist ProductCardjs", watchlist)
    return (
        <div className="home-container">
                <h1>THIS IS THE HOME PAGE</h1>
                <h4>Total: £{basket}</h4>
            <div className="game-cards-container">
                {gamesData.map((game, index) => {
                return (
                    <div className="game-cards" key={index}>
                        <h3>{game.name}</h3>
                        <img src={game.image.thumb_url}></img>
                        <h4>£: {}</h4>
                        <button onClick={() => AddWatchList( game.name, game.image.thumb_url, setWatchList, watchlist)}>Add to watch List</button> 
                    </div> 
                    )
                }
            )};
            </div>
        </div>
    )
    
};




// For the images, the API fetches a few in an array. 
// To access specific ones, use the <image> then dot notation. For tags inside,
// check the console