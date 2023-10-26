import { createBrowserRouter } from "react-router-dom";
import Routs from "../../layout/Routs/Routs";
import Home from "../../components/pages/HOME/Home";
import Login from "../../components/pages/login/Login";
import SignUp from "../../components/pages/login/SignUp/SignUp";
import PrivateRoute from "../../layout/Routs/PrivateRoute/PrivateRoute";
import Service from "../../components/pages/Service/Service";
import CheckOut from "../../components/pages/CheckOut/CheckOut";
import Bookings from "../../components/pages/Bookings/Bookings";

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
            },
            {
                path:"/signup",
                element:<SignUp></SignUp>
            },
            {
                path:"/service",
                element:<PrivateRoute>
                              <Service></Service>
                       </PrivateRoute>
            },
            {
                path:"/checkout/:id",
                element:<CheckOut></CheckOut>,
                loader:({params})=>fetch(`http://localhost:5002/services/${params.id}`)
              
            },
            {
                path:"/bookigs",
                element:<Bookings></Bookings>,
                
            }
        ]
    }
])

export default Router;