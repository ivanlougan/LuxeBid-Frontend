import React from "react";
import "./header.css";
import LuxeLogo from "../../images/logo.png"

const HeaderBar = ({errorMsg, signMsg}) => {


    return (
        <header className="App-header">
            <h4>SignMsg: {signMsg}</h4>
            <h3>LUXE GAMING HEADER TITLE HERE?</h3>
            <img id="logo" src={LuxeLogo} alt="logo"></img>
            {errorMsg !== null && <h3>{errorMsg}</h3>}
      </header>
    )
};

export default HeaderBar;