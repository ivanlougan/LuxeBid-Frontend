import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';

// Pages
import Home from "./pages/home";
import Checkout from "./pages/checkout";
import Profile from "./pages/profile";
import Signup from "./pages/signup";

//Components
import HeaderBar from "./components/header/Header"

// import { authentication } from './utils/games/getGames';

function App() {

  // Global States
  const [gamesData, setGamesData] = useState([])
  const [errorMsg, setErrorMsg] = useState(null)
  const [signMsg, setSignMsg] = useState(null)
  const [user, setUser] = useState({
    username: null,
    email: null,
    password: null
  });

  useEffect(() => {
    const IGDBgames = async () => {
      try {
          const response = await fetch(`${process.env.REACT_APP_DEV_URL}getGames`, {
              method: "POST",
              mode: "cors",
              headers: {
                  "Content-Type": "application/json",
              }
          });
          const data = await response.json();
          // const gameInfo = data.map()
          setGamesData(data);
          console.log("Test")
          console.log("IDGB get games response: ", data);
          // return data;
      } catch (error) {
          console.log(error);
      }
  };
  IGDBgames();
  }, [])

  // Navbar + Router here?

  return (
    <div className="App">

      <HeaderBar />

      <BrowserRouter>
        <nav id="navbar">
          <Link to="/">Home</Link>
          <Link to="/signup">Signup</Link>
          <Link to="/checkout">Checkout</Link>
          <Link to="/profile">Profile</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="signup" element={<Signup></Signup>}></Route>
          <Route path="checkout" element={<Checkout></Checkout>}></Route>
          <Route path="profile" element={<Profile></Profile>}></Route>
        </Routes>
      </BrowserRouter>


      <div>
        {gamesData.map((game, index) => {
          return (
            <div key={index}>
              <h3>{game.name}</h3>
            </div>
          )
        })}
      </div>

    </div>
  );
};

export default App;