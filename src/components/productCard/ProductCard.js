import { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';
import "./productCard.css"

export const ProductCard = ({
    gamesData, basket, pricesInfo,
}) => {
    // ???
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
                        <button className="add-to-basket" type="submit">+ Basket</button>
                        <button className="add-to-watch" type="submit">+ Watchlist</button>
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