
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

export const RemoveWatchList = (index, GamesData, watchlist, setWatchList) => {
    let storedGames = [...GamesData]
    let GameCopy = [...watchlist];
    storedGames.push(GamesData.splice(index, 1)[0])
    setWatchList(GameCopy);
    console.log("RemoveWatchList")
    console.log(GamesData)
};