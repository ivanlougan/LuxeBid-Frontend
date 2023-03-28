// import { profile } from "console";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Icon from "../images/user-icon-jpg-18.jpg"
import "./profile.css";


const Profile = ({Games, GameList, watchlist, setWatchList, gamesData}) => {

    // WatchList functionality


    const RemoveWatchList = (index) => {
        let storedGames = [...Games]
        let GameCopy = [...watchlist];
        storedGames.push(GameCopy.splice(index, 1)[0])
        GameList(storedGames)
        setWatchList(GameCopy);
    }


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
                <div> <h2 className="WatchTitle">Watch List</h2>
                
                {gamesData.map((GamesData, index) => {
                    return (
                        <div>
                           <img className='ChosenItem' src={GamesData.name} alt="gameproduct"></img>
                            <button onClick={() => RemoveWatchList(index)}>Remove from watchlist</button>
                        </div>
                    )
                })}
                
                </div>

                



            </div>
            <button id="DeleteAccountButton">Delete Account</button>
        </div>
    )
};

export default Profile;