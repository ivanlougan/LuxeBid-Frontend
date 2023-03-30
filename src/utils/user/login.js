import { writeCookie } from "../../common";

export const loginUser = async (username, password, setUser) => {
    console.log(username, password);
    const body = JSON.stringify({
        username: username,
        password: password
    });
    console.log(body);
    try {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}users/login`, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body
        });
        console.log(response)
        const data = await response.json();
        console.log(data)
        setUser(data.user);
        writeCookie("jwt_token", data.user.token, 7)
    } catch (error) {
        console.log(error)
    }
};