import { createBrowserRouter } from "react-router-dom";
import Routs from "../../layout/Routs/Routs";
import Home from "../../components/pages/HOME/Home";
import Login from "../../components/pages/login/Login";

const Router = createBrowserRouter([
    {
        path:'/',
        element:<Routs></Routs>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/login",
                element:<Login></Login>
            }
        ]
    }
])

export default Router;