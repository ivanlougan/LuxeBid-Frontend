import { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';
import "./home.css";

// Components
import { ProductCard } from '../components/productCard/ProductCard';

const Home = ({ 
    gamesData, setGamesData, basket, setBasket, pricesInfo, setPricesInfo 
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
                // setErrorMsg("Information unavailable")
            }
        }
        fetchData();
        console.log("Times faker is being called:")
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
        <ProductCard 
            gamesData={gamesData} setGamesData={setGamesData}
            basket={basket} setBasket={setBasket}
            pricesInfo={pricesInfo} setPricesInfo={setPricesInfo}
            />
    )
};

export default Home;