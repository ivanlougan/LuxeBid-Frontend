import { writeCookie, getTokenFromCookie } from "../../common"

export const loginUser = async (username, password, setUser) => {
    try {
        const response = await fetch("http://localhost/users/login", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password
            }),
        });
        const data = await response.json()
        setUser(data.user);
        writeCookie("jwt_token", data.user.token, 7)
    } catch (error) {
        console.log(error)
    }
};