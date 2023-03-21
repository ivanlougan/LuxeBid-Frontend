// Only call on this function to generate an API authorization token
// Might be best to hide this link in .env?
export const authentication = async () => {
    try {
        const response = await fetch(`${process.env.AUTH}`, {
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