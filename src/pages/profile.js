// import { profile } from "console";
import { useEffect, useState } from "react";
import { RemoveWatchList } from "../utils/games/removeGame";
import { deleteAcc } from "../utils/user/deleteAcc"
import Icon from "../images/user-icon-jpg-18.jpg"
import "./profile.css";

const Profile = ({ Games, GameList, watchlist, setWatchList, gamesData, user }) => {

    console.log("!!!!!!!!", watchlist)
    console.log(GameList)

    if (document.cookie) {
    return (
        <div className="MainBox">
            <div id="title">
                <h1>YOUR PROFILE</h1>
            </div>
            <div className="profileBox">
                <div className="Profilepic">
                    <img id="ProfilePicture" src={Icon} alt="ProfileImage" />
                    <div id="Userinformation">
                        <h2>Username: {user.username}</h2>
                        <h2>Email: {user.email}</h2>
                    </div>
                    <div className="buttonLayout">
                        <button id="EditButton">Edit Profile</button>
                        <button id="EditButton">Logout</button>
                    </div>
                </div>

                <div className="watchWrapper"> 
                    <div className="watchTitleWrapper">  
                        <h2 className="WatchTitle">Watch List</h2></div>
                    <div className="watchListItems">{watchlist.map((product, index) => {
                        return (
                            <div key={index} className="List" title={product.name}>
                                <p>{product.name}</p>
                                <button value={product.name} onClick={(e) => RemoveWatchList(e, watchlist, setWatchList)}>Remove from watchlist</button>
                            </div>
                        )
                    })}
                    </div>
                </div>
            </div>
            <button id="DeleteAccountButton" onClick={(e) => deleteAcc(user)}>Delete Account</button>
        </div>
    )} else {
        return (
            <div className="MainBox">
                    <h2>New here? Please signup with us first!</h2>
                    <h3>Then you can keep track of all the games you're interested in here!</h3>
            </div>
        )
    }
};

export default Profile;

// Username: {user.username}
// email: {user.email}