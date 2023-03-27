import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';
import './App.css';

// Page components
import Home from "./pages/home";
import Checkout from "./pages/checkout";
import Profile from "./pages/profile";
import Signup from "./pages/signup";

// Global components
import HeaderBar from "./components/header/Header";
import FooterBar from './components/footer/Footer';

function App() {

  // Global States
  const [gamesData, setGamesData] = useState([]);
  const [pricesInfo, setPricesInfo] = useState([]);

  const [basket, setBasket] = useState([0]); // Basket used by faker?
  const [errorMsg, setErrorMsg] = useState("errorMsg state is working");
  const [signMsg, setSignMsg] = useState("DEFAULT USER");
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
          console.log("DATA: ", data.data)
          setGamesData(data.data);
          return data;
      } catch (error) {
          console.log(error);
      }
  };
  IGDBgames();
  }, []);

  // Passing the global states down to the components that require it
  return (
    <div className="App">

      {/* <HeaderBar signMsg={signMsg} user={user}/> */}

        <nav id="navbar">
            <Link to="/">Home</Link>
            <Link to="/checkout">Checkout</Link>
            <Link to="/signup">Signup</Link>
            <Link to="/profile">Profile</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home 
              gamesData={gamesData} setGamesData={setGamesData}
              basket={basket} setBasket={setBasket} 
              errorMsg={errorMsg} setErrorMsg={setErrorMsg}
              pricesInfo={pricesInfo} setPricesInfo={setPricesInfo}></Home>}></Route>

          <Route path="signup" element={<Signup user={user} setUser={setUser}></Signup>}></Route>
          <Route path="checkout" element={<Checkout basket={basket}></Checkout>}></Route>
          <Route path="profile" element={<Profile user={user}></Profile>}></Route>
        </Routes>
        

       

    </div>
  );
};

export default App;