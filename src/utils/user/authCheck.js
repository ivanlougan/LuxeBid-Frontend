export const authCheck = async (jwtToken) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}users/authcheck`, {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                Authorization: `${jwtToken}`,
            },
        });
        const data = await response.json();
        return data
    } catch (error) {
        console.log(error);
    }
};