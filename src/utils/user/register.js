export const register = async (username, email, password) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}users/registeruser`, {
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