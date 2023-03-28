import React from "react";
import { useState } from "react";
import "./header.css";
import LuxeLogo from "../../images/LUXElogo2.png"
import { loginUser } from "../../utils/user/login";

const HeaderBar = ({signMsg, user, setUser}) => {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const loginSubmit = async (e) => {
        e.preventDefault();
        console.log(username, password)
        try {
            await loginUser(username, password);
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <header className="App-header">
            <form className="login-input" onSubmit={loginSubmit}>
                <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                <input placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                <button id="login-btn" type="submit">Login</button>
            </form>
            <h4>{signMsg}</h4>
            <img id="logo" src={LuxeLogo} alt="logo"></img>
            <button id="logout-btn" type="submit">Logout</button>
      </header>
    )
};

export default HeaderBar;