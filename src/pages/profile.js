
import { profile } from "console";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../App.css';


const Profile = (props) => {


    return (
        <div>
            <div className="profileBox">
                <div id="title">
                    <h1>User</h1>
                </div>

                {/* <img id="ProfilePicture" src="/images/ProfileIcon.png" alt="ProfileImage" /> */}

                <button id="EditProfileButton">Edit Profile</button>
                <button id="LogoutButton">Logout</button>
            </div>

            <div><button id="DeleteAccountButton">Delete Account</button></div>
        </div>


    )



}


