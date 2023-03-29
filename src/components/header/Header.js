import React from "react";
import { useState, useEffect } from "react";
import "./header.css";
import LuxeLogo from "../../images/LUXElogo2.png"
import { loginUser } from "../../utils/user/login";

import { getTokenFromCookie } from '../../common';
import { authCheck } from '../../utils/user/authCheck';


const HeaderBar = ({signMsg, userData, user, setUser}) => {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    useEffect(() => {
        if (document.cookie) {
          let token = getTokenFromCookie("jwt_token");
          if (token === false) {
            setUser(null)
          } else {
            loginWithToken(token)
          }
        }
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
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
        try {
            await loginUser(username, password, setUser);
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <header className="App-header">
            <form className="login" onSubmit={loginSubmit}>
                <h2 className="login-title" > Login </h2>
                <input className="login-container" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                <input className="login-container" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                <button className='register-button' type="submit"> Login </button>
            </form>
            <h4>{signMsg}</h4>
            <img id="logo" src={LuxeLogo} alt="logo"></img>
        </header>
    )
};

export default HeaderBar;