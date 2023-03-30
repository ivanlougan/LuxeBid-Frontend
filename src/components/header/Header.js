import React from "react";
import { useState, useEffect } from "react";
import "./header.css";
import LuxeLogo from "../../images/LUXElogo2.png"
import { loginUser } from "../../utils/user/login";

import { getTokenFromCookie } from '../../common';
import { authCheck } from '../../utils/user/authCheck';
import { useCookies } from "react-cookie"; // npm i react-cookie


const HeaderBar = ({ signMsg, userData, user, setUser }) => {


  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);

  useEffect(() => {
    if (document.cookie) {
      let token = getTokenFromCookie("jwt_token");
      if (token === false) {
        setUser({
          username: null,
          email: null,
          password: null
        })
      } else {
        loginWithToken(token)
      }
    }
    // eslint-disable-next-line
  }, []); 

  const loginWithToken = async (token) => {
    console.log("login with token: ", token);
    const persistantUser = await authCheck(token);
    await setUser(persistantUser.user);
    // await setWatchList(persistantUser.watchlist);
    // await setBasket() ??
  };

  const loginSubmit = async (e) => {
    e.preventDefault();

    try {
      await loginUser(username, password, setUser);
    } catch (error) {
      console.log(error)
    }

    e.target.reset();

  };

  const logout = (e) => {
    removeCookie("jwt_token");
    window.location.reload(false);
    console.log(cookies, setCookie);
  }


  if (!document.cookie) {

    return (
      <header className="App-header">
        <form className="login" onSubmit={loginSubmit}>
          <h2 className="login-title" > Login </h2>
          <input className="login-container" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
          <input type="password" className="login-container" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          <button className='register-button' type="submit"> Login </button>
        </form>
        <h4>{signMsg}</h4>
        <img id="logo" src={LuxeLogo} alt="logo"></img>
      </header>
    )
  } else {

    return (
      <div className="logout">
        <header className="App-header">
          <button className='logout-button' type="submit" onClick={logout}> Logout </button>

          <h2> Welcome back! {user.username} </h2>

          <h4>{signMsg}</h4>
          <img id="logo" src={LuxeLogo} alt="logo"></img>
        </header>
      </div>
    )
  }
};

export default HeaderBar;