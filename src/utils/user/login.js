import { useState } from "react";

const Login = ({user, setUser}) => { 
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const submitHandler = async (e, setUser) => {
        e.preventDefault();
        console.log("login button clicked");
        try {
            const userData = await login(e, username, password);
    
            if (userData.message === "success") {
                setUser(userData.user);
            }
        } catch (error){
            console.log("error")
        }
    };

return (
    <div className="Login-Container">
        <form onSubmit={(e) => submitHandler(e, setUser)} > 
            <input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
/>
            <input
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            />
        </form> 
    </div>
    );
};

export default Login;