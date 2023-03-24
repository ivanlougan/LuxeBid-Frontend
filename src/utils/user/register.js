export const register = async (username, email, password) => {
    console.log(password)
    try {
        const response = await fetch("http://localhost/users/registeruser", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
            }),
        });
        const data = await response.json();
        console.log("Register response: ", data);
    } catch (error) {
        console.log(error)
        
    }
};