import { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';
import "./home.css";

// Components


const Home = ({ 
    gamesData, basket, errorMsg, setErrorMsg, pricesInfo, setPricesInfo 
}) => {
    //States?

    useEffect(() => {
        const fetchData = async () => {
            try {
                const gameInfo = []
                for (let i = 0; i < 10; i++) {
                    gameInfo.push({
                        // company: faker.company.Name(),
                        price: faker.commerce.price(10, 70),
                    })
                }
                setPricesInfo(gameInfo)
            } catch (error) {
                setErrorMsg("Information unavailable")
            }
        }
        fetchData();
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const gameInfo = []
                for (let i = 0; i < 10; i++) {
                    gameInfo.push({
                        // company: faker.company.Name(),
                        price: faker.commerce.price(10, 70),
                    })
                }
                setPricesInfo(gameInfo)
            } catch (error) {
                setErrorMsg("Information unavailable")
            }
        }
        fetchData();
    }, [])

    return (
        <div className="home-container">
            <h1>THIS IS THE HOME PAGE</h1>
            <h4>Total: £{basket}</h4>
            <div className="game-cards-container">
                {pricesInfo.map((info, index) => {
                    return (
                        <div className="game-cards" key={index}>
                            <h3>{info.price}</h3>
                        </div>
                    )
                }
                )};
            </div>
        </div>
    )
};

export default Home;