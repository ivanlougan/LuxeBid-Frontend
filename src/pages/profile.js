
// import { profile } from "console";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Icon from "../images/user-icon-jpg-18.jpg"
import '../App.css';


const Profile = (props) => {


    return (
        <div className="MainBox">
            <div id="title">
                <h1>PROFILE</h1>
            </div>
            <div className="profileBox">
                <div className="Profilepic">
                    <img id="ProfilePicture" src={Icon} alt="ProfileImage" />
                    <div id="Userinformation"> <h2>Username: </h2>
                        <h2>email:</h2> 
                    </div>
                    <div className="buttonLayout"><button id="EditButton">Edit Profile</button>
                        <button id="EditButton">Logout</button>
                    </div>
                </div>
                <div> <h2 className="WatchTitle">Watch List</h2></div>
            </div>
            <button id="DeleteAccountButton">Delete Account</button>
        </div>
    )
}


export default Profile;

