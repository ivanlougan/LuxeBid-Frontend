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
import FooterBar from './components/footer/Footer';

// import { authKeyGen } from './utils/games/getGames';

function App() {

  // Global States
  const [gamesData, setGamesData] = useState([])
  const [basket, setBasket] = useState([])
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
          setGamesData(data);
          console.log("IDGB get games response: ", data);
          // return data;
      } catch (error) {
          console.log(error);
      }
  };
  IGDBgames();
  }, [])

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
          <Route path="/" element={<Home gamesData={gamesData}></Home>}></Route>
          <Route path="signup" element={<Signup></Signup>}></Route>
          <Route path="checkout" element={<Checkout basket={basket}></Checkout>}></Route>
          <Route path="profile" element={<Profile></Profile>}></Route>
        </Routes>
      </BrowserRouter>

        <FooterBar />
    </div>
  );
};

export default App;