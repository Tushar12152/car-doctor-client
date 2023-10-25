
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute =({children}) => {
    const {user,loading}=useContext(AuthContext)
    if(loading){
        <span className="loading loading-spinner text-info"></span>
    }
    else{
        if(user){
            return  children
        }
        else{
           return <Navigate to='/login'></Navigate>
        }
    }
  
    
   
};

PrivateRoute.propTypes = {
    children:PropTypes.node,
};

export default PrivateRoute;