import { getTokenFromCookie } from "../../common";

export const deleteAcc = async (username, email, password) => {
    console.log(username)
    try {
        const token = getTokenFromCookie("jwt_token")

        const response = await fetch(`${process.env.REACT_APP_BASE_URL}users/deleteAcc`, {
            method: "DELETE",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                Authorization: `${token}`
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
            }),
        })
        const data = await response.json();
        // data.user.token = jwtToken; ??
        return data;
    } catch (error) {
        console.log(error)
    }
};