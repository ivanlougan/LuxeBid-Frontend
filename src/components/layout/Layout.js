import { BrowserRouter } from "react-router-dom";
import HeaderBar from "../header/Header";
import FooterBar from "../footer/Footer";

const Layout = ({children}) => {
  return (
    <>
        <BrowserRouter>
            <HeaderBar/>
                <main>{children}</main>
            <FooterBar/>
        </BrowserRouter>
    </>
  )
}

export default Layout