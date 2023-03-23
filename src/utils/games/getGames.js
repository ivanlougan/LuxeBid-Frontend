// Only call on this function to generate an IGDB API authorization token
export const authKeyGen = async () => {
    try {
        const response = await fetch(`${process.env.KEYGEN}`, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        console.log("Authentication: ", data)
        return data
    } catch (error) {
        console.log(error)
    }
};