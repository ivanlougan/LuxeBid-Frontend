import { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';
import "./home.css";

// Components


const Home = ({ gamesData, basket }) => {
    //States?

    const [gameData, setGameData] = useState([]);
    const [error, setError] = useState(null);
    const [gameInfo, setGameInfo] = useState([]);
    const [pricesData, setPriceInfo] = useState([]);

    useEffect(() => {
        const fetchData = async () => {

            try {
                setError(null);

                const gameInfo = []
                for (let i = 0; i < 10; i++) {

                    gameInfo.push({
                        company: faker.company.Name(),
                        finance: faker.finance.amount(),

                    })
                }
                setGameData(gameInfo)
                console.log(gameData)

            } catch (error) {
                setError("Information unavailable")
            }
        }
        fetchData();

    }, [])

    return (
        <div className="home-container">
            <h1>THIS IS THE HOME PAGE</h1>
            <h4>Total: £{basket}</h4>
            <div className="game-cards-container">

                {gamesData.map((game, index) => {
                    return (
                        <div className="game-cards" key={index}>
                            <h3>{game.name}</h3>
                        </div>
                    )
                }
                )}


            </div>
        </div>
    )
};

export default Home;

