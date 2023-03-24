import { useState, useEffect } from 'react';
import "./home.css";

// Components


const Home = ({gamesData, basket}) => {
    //States?

    useEffect(() => {

    }, [])


    return (
        <div className="home-container">
            <h1>THIS IS THE HOME PAGE</h1>
            <h4>Total: £{basket}</h4>
            <div className="game-cards-container">

            </div>

        </div>
    )
};

export default Home;

// {gamesData.map((game, index) => {
//     return (
//     <div className="game-cards" key={index}>
//         {/* <h3>{game.name}</h3> */}
//     </div>
//     )
// }   )}