import { logout } from "../../../utils";

const LogOut = ({setUser}) => { 
    console.log("User is logged out")
    
return(
    <div>
        <button onClick={(e) => logout(e, setUser)}> 
            {/* ^plus other useStates^ */}
            Log Out
        </button>
    </div>
);
};

export default LogOut;