import { Route, Routes, Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import './App.css';
import UserContext from './components/userContext/UserContext';

// Page components
import Home from "./pages/home";
import Checkout from "./pages/checkout";
import Profile from "./pages/profile";
import Signup from "./pages/signup";

// Global components: moved to layout

// Functions

function App() {

  const { user } = useContext(UserContext);

  // Global States
  const [gamesData, setGamesData] = useState([]);
  const [basket, setBasket] = useState([0]);
  const [errorMsg, setErrorMsg] = useState();
  
  const [watchlist, setWatchList] = useState([]);

  useEffect(() => {
    const IGDBgames = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}getGames`, {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          }
        })
        if (!response.ok) {
          setErrorMsg("Error: cannot fetch data from API")
        }
        const data = await response.json();
        setGamesData(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    IGDBgames();
  }, []);

  // Passing the global states down to the components that require it
  return (
    <div className="App">

      <nav id="navbar">
        <Link to="/">Home</Link>
        <Link to="/checkout">Checkout</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/profile">Profile</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home
          gamesData={gamesData}
          basket={basket} setBasket={setBasket}
          errorMsg={errorMsg} setErrorMsg={setErrorMsg} user={user} watchlist={watchlist} setWatchList={setWatchList} setGamesData={setGamesData}></Home>}></Route>
{/* // removed user/setUser from signup components- not being used right now, removed to fix login
// will have to rearrange state for login on signUp - not required for mvp */}
        <Route path="signup" element={<Signup ></Signup>}></Route>
        <Route path="checkout" element={<Checkout basket={basket}></Checkout>}></Route>
        <Route path="profile" element={<Profile user={user} watchlist={watchlist} setWatchList={setWatchList} gamesData={gamesData} setGamesData={setGamesData} ></Profile>}></Route>
      </Routes>
    </div>
  );
};

export default App;