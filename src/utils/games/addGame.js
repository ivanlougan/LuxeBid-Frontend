const addGames = async () => {
    try {
        const response = await fetch("http://localhost/product/addgame", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                Authorization: `$[token]`,
            },

            body: JSON.stringify({
                games: games
            })
        })
    } catch (error) {
        console.log(error)
    }
}