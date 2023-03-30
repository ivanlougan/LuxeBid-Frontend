export const editAcc = async (username, email, password) => {
    console.log(username)
    try {
        const edit  = await fetch (`${process.env.REACT_APP_BASE_URL}users/editAcc`, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
            })
        })
    } catch (error) {
        console.log(error)
    }
};