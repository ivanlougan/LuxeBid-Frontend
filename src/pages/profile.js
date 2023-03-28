// import { profile } from "console";
import { useEffect, useState } from "react";
import { RemoveWatchList } from "../utils/games/removeGame";
import { deleteAcc } from "../utils/user/deleteAcc"
import Icon from "../images/user-icon-jpg-18.jpg"
import "./profile.css";


const Profile = ({ Games, GameList, watchlist, setWatchList, gamesData, user }) => {

    return (
        <div className="MainBox">
            <div id="title">
                <h1>PROFILE</h1>
            </div>
            <div className="profileBox">
                <div className="Profilepic">
                    <img id="ProfilePicture" src={Icon} alt="ProfileImage" />
                    <div id="Userinformation"> <h2>Username:</h2>
                        <h2>email: </h2>
                    </div>
                    <div className="buttonLayout"><button id="EditButton">Edit Profile</button>
                        <button id="EditButton">Logout</button>
                    </div>


                </div>

                
                <div> <div>  <h2 className="WatchTitle">Watch List</h2></div>

                    <div className="watchListItems">{gamesData.map((GamesData, index) => {
                        return (
                            <div>
                                <p>{GamesData.name}</p>
                                {/* <img className='ChosenItem' src={gamesData.name} alt="gameproduct"></img> */}
                                <button onClick={() => RemoveWatchList(index)}>Remove from watchlist</button>
                            </div>
                        )
                    })}
                    </div>
                </div>
            </div>
            <button id="DeleteAccountButton" onClick={(e) => deleteAcc()}>Delete Account</button>
        </div>
    )
};

export default Profile;


// Username: {user.username}
// email: {user.email}