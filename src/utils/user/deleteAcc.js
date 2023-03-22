const deleteAcc = async (username, email) => {
    console.log(username)
    try {
        const token = getTokenFromCookie("jwt_token")

        const response = await fetch("http://localhost/users/deleteAcc", {
            method: "DELETE",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
            }),
        })
        const data = await response.json();
        data.user.token = jwtToken;

        return data;
    } catch (error) {
        console.log(error)
    }
}