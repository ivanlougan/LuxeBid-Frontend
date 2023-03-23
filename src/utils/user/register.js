const register = async (username, email, password) => {
    console.log(password)
    try {
        const response = await fetch("http://localhost/users/register", {
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
    
        })
        const data = await response.json();


    } catch (error) {
        console.log(error)
        
    }
    
    };