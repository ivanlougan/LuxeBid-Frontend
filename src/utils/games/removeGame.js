
export const deleteGame = async (token, game) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}product/deletegame`, {
            method: "DELETE",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                Authorization: `${token}`,
                
            },
            body: JSON.stringify({
                game: game
            })
        });
        const data = response.json();
        return data;
    } catch (error) {
        console.log(error)
    }
};

export const RemoveWatchList = (index, Games, GameList, watchlist, setWatchList) => {
    let storedGames = [...Games]
    let GameCopy = [...watchlist];
    storedGames.push(GameCopy.splice(index, 1)[0])
    GameList(storedGames)
    setWatchList(GameCopy);
    console.log("RemoveWatchList")
};