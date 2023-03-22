import { useState, useEffect } from 'react';

const Home = ({gamesData}) => {
    //States?

    useEffect(() => {

    }, [])


    return (
        <div className="home-container">
            <h1>THIS IS THE HOME PAGE</h1>

            {gamesData.map((game, index) => {
                return (
                <div key={index}>
                    <h3>{game.name}</h3>
                </div>
                )
            })}
        </div>
    )
};

export default Home;