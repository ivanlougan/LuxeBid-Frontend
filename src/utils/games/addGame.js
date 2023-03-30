

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

export const AddWatchList = (gameName, gameImage, setWatchList, watchlist ) => {
    console.log("!!!!!!!!!!")
    // let watchlist = []
    const newGameToWatchlist = {
        name: gameName, 
        image: gameImage,
    }
    // watchlist.push(newGameToWatchlist)
    setWatchList([...watchlist,newGameToWatchlist])
    // let storedGames = [...gamesData]
    // // let GameCopy = [...watchlist] 
    // console.log(watchlist)
    // // gamesData.push(storedGames)
    // gamesData.push(storedGames.splice(index, 1)[0])
    // GamesData(storedGames);
    // // setWatchList(GameCopy);
    // console.log("AddWatchList")
    // // console.log(gamesData)
};

