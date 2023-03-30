import "./home.css";

// Components
import { ProductCard } from '../components/productCard/ProductCard';

const Home = ({
    gamesData, setGamesData, basket, setBasket, setErrorMsg, Games, watchlist, setWatchList
}) => {

    return (
        <div className="gameCard">
        <ProductCard
            gamesData={gamesData} setGamesData={setGamesData}
            basket={basket} setBasket={setBasket}
            watchlist={watchlist} setWatchList={setWatchList} 
        />
        </div> 
    )
};
export default Home;