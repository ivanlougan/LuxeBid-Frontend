import { useState } from 'react';
import { register } from "../utils/user/register";

const Signup = ({}) => {
    //States?
    const [ username, setUsername] = useState("");
    const [ email, setEmail] = useState("");
    const [ password, setPassword] = useState("");

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log("handle submit")

        await register(username, email, password);
        e.target.reset();
    }

    return (
        
        <div className="signup-container">
            {/* container for image*/}
            <div className="signup-image-container">
            </div>
            {/* container for form */}
            <div className="signup-form-container">
                <form onSubmit={submitHandler}>
                    <input placeholder='username' onChange={(e) => setUsername(e.target.value)} />
                    <input placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
                    <input placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
                    <button type='submit' >register</button>
                </form>

            </div>
        </div>
    )
};

export default Signup;