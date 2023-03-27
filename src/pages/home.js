import { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';
import "./home.css";

// Components
import { ProductCard } from '../components/productCard/ProductCard';

const Home = ({
    gamesData, setGamesData, basket, setBasket, pricesInfo, setPricesInfo, setErrorMsg, Games, GameList, Watchlist, setWatchList
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


    // add to watch list

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
        <ProductCard
            gamesData={gamesData} setGamesData={setGamesData}
            basket={basket} setBasket={setBasket}
            pricesInfo={pricesInfo} setPricesInfo={setPricesInfo}
        />
    )
};





export default Home;