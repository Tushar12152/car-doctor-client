import { Outlet } from "react-router-dom";
import Footer from "../../components/pages/Footer/Footer";
import Nav from "../../components/pages/nav/Nav";

const Routs = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Routs;