import { writeCookie} from "../../common"

export const loginUser = async (username, password, setUser) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}users/loginuser`, {
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