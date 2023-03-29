import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import HeaderBar from "../header/Header";
import FooterBar from "../footer/Footer";


const Layout = ({children}) => {

  const [user, setUser] = useState(null);

  return (
    <>
        <BrowserRouter>
            <HeaderBar setUser={setUser}/>
                <main>{children}</main>
            <FooterBar/>
        </BrowserRouter>
    </>
  )
}

export default Layout