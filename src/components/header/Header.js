import React from "react";
import { useState } from "react";
import "./header.css";
import LuxeLogo from "../../images/LUXElogo2.png"
import { loginUser } from "../../utils/user/login";

const HeaderBar = ({signMsg, userData, setUser}) => {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const loginSubmit = async (e) => {
        e.preventDefault();
        console.log(username, password)
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