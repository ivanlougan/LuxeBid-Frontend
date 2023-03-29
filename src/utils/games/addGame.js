

export const addGames = async (token, games) => {
     
    try {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}product/addgame`, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                Authorization: `${token}`,
            },

            body: JSON.stringify({
                games: games
            })
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
    }
};

export const AddWatchList = (index, gamesData, GameList, watchlist, setWatchList) => {
    let storedGames = [...gamesData]
    let GameCopy = [...GameList] 
    GameCopy.push(gamesData.splice(index, 1)[0])
    // GameList(storedGames);
    // setWatchList(GameCopy);
    console.log("AddWatchList")
    console.log(gamesData)
};