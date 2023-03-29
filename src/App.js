import { Route, Routes, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';
import './App.css';

// Page components
import Home from "./pages/home";
import Checkout from "./pages/checkout";
import Profile from "./pages/profile";
import Signup from "./pages/signup";

// Global components

// Functions
import { getTokenFromCookie } from './common';
import { authCheck } from './utils/user/authCheck';

function App() {

  // Global States
  const [gamesData, setGamesData] = useState([]);
  const [pricesInfo, setPricesInfo] = useState([]);
  const [basket, setBasket] = useState([0]);
  const [errorMsg, setErrorMsg] = useState();
  const [signMsg, setSignMsg] = useState();
  const [user, setUser] = useState(null);
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
        // const newData = data.map((newObject) => {
        //   return({
        //     name: newData.data.name,
        //     img: newData.data.thumb_url,
        //     price: faker.commerce.price(10, 70)
        //   })
        // })
        setGamesData(data.data);
        console.log("gamesData state: ", data.data)
        return data;
      } catch (error) {
        console.log(error);
      }
    };
    IGDBgames();
  }, []);

  useEffect(() => {
    if (document.cookie) {
      let token = getTokenFromCookie("jwt_token");
      if (token === false) {
        setUser(null)
      } else {
        loginWithToken(token, setUser)
      }
    }
  }, []);

  const loginWithToken = async (token) => {
    const persistantUser = await authCheck(token);
    await setUser(persistantUser.user);
    // await setWatchList(persistantUser.watchlist);
    // await setBasket() ??
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //       try {
  //           const gameInfo = []
  //           for (let i = 0; i < 10; i++) {
  //               gameInfo.push({
  //                   price: faker.commerce.price(10, 70),
  //               })
  //           }
  //           setPricesInfo(gameInfo)
  //           console.log("pricesInfo state: ", gameInfo)
  //       } catch (error) {
  //         console.log(error)
  //           setErrorMsg("Information unavailable")
  //       }
  // };
  // fetchData();
  // }, []);

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
          errorMsg={errorMsg} setErrorMsg={setErrorMsg}
          pricesInfo={pricesInfo} ></Home>}></Route>

// removed user/setUser from signup components- not being used right now, removed to fix login
// will have to rearrange state for login on signUp - not required for mvp
        <Route path="signup" element={<Signup ></Signup>}></Route>
        <Route path="checkout" element={<Checkout basket={basket}></Checkout>}></Route>
        <Route path="profile" element={<Profile user={user} watchlist={watchlist} setWatchList={setWatchList} gamesData={gamesData} setGamesData={setGamesData}></Profile>}></Route>
      </Routes>


    </div>
  );
};

export default App;