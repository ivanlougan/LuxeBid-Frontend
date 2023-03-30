import { useState } from 'react';
import { register } from "../utils/user/register";
import pic from "../images/signuppic.png";
import "../pages/signup.css";


const Signup = ({ }) => {
    //States?
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log("Signup submit");

        await register(username, email, password);
        e.target.reset();
    }

    return (

        <div className="signup-container">
            {/* container for image*/}
            <div className="signup-image-container">
                <img id="picture" src={pic} alt="image" />
            </div>
            {/* container for form */}
            <div className="signup-form-container">
                <h2> Please provide your details </h2>
                <form onSubmit={submitHandler} >
                    <input className="input-container" placeholder='username' onChange={(e) => setUsername(e.target.value)} />
                    <input className="input-container" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" className="input-container" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                    <button className='register-button' type='submit' > REGISTER BRO </button>
                </form>
            </div>
        </div>
    )
};

export default Signup;