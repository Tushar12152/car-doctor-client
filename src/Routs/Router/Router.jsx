import { createBrowserRouter } from "react-router-dom";
import Routs from "../../layout/Routs/Routs";
import Home from "../../components/pages/HOME/Home";

const Router = createBrowserRouter([
    {
        path:'/',
        element:<Routs></Routs>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            }
        ]
    }
])

export default Router;