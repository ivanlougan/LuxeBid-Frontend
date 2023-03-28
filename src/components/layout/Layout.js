import { BrowserRouter } from "react-router-dom";
import HeaderBar from "../header/Header";
import FooterBar from "../footer/Footer";

const Layout = ({children, signMsg, setSignMsg, user, setUser}) => {
  return (
    <>
        <BrowserRouter>
            <HeaderBar 
              signMsg={signMsg} setSignMsg={setSignMsg} 
              user={user} setUser={setUser}/>
                <main>{children}</main>
            <FooterBar/>
        </BrowserRouter>
    </>
  )
}

export default Layout