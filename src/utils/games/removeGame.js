const deleteGame = async () => {
    try {
        const response = await fetch("http://localhost/product/deletegame", {
            method: "DELETE",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                Authorization: `${token}`,
                
            },
            body: JSON.stringify({
                game: game
            })
        })

    } catch (error) {
        console.log(error)
    }
}