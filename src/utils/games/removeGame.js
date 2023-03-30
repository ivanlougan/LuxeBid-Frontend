
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

export const RemoveWatchList = (e, watchlist, setWatchList) => {
    let watchlistCopy = [...watchlist];
    console.log("!!!!!!!!")
    console.log(e.target.value)
    setWatchList(watchlistCopy.filter(el => el.name !== e.target.value ))
    console.log(watchlist)
};