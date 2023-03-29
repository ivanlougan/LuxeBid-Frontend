import { BrowserRouter } from "react-router-dom";
import { useState, useContext } from "react";
import HeaderBar from "../header/Header";
import FooterBar from "../footer/Footer";
import UserContext from "../userContext/UserContext";


const Layout = ({children}) => {

  console.log("leyiyt childrem", children)
  const [user, setUser] = useState(null);

  return (
    <>
        <BrowserRouter>
            <UserContext.Provider value={{user, setUser}}>
            <HeaderBar setUser={setUser}/>
                <main>{children}</main>
            <FooterBar/>
            </UserContext.Provider>
        </BrowserRouter>
    </>
  )
}

export default Layout