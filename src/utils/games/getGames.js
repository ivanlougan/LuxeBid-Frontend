// Only call on this function to generate an API authorization token
// Might be best to hide this link in .env?
export const authentication = async () => {
    try {
        const response = await fetch("https://id.twitch.tv/oauth2/token?client_id=zzsc5u3kro28y6yizq1zjq27vxwce7&client_secret=m83n6s047uvbe3o77e9wp4iz97m0hg&grant_type=client_credentials", {
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