import { useState, useEffect } from 'react';
import "./home.css";

// Components


const Home = ({gamesData}) => {
    //States?

    useEffect(() => {

    }, [])


    return (
        <div className="home-container">
            <h1>THIS IS THE HOME PAGE</h1>

            <div className="game-cards">
                {gamesData.map((game, index) => {
                    return (
                    <div key={index}>
                        <h3>{game.name}</h3>
                    </div>
                    )
            }   )}
            </div>

        </div>
    )
};

export default Home;