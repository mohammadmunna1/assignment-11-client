import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PrivateRoute = ({children}) => {
    const {user, loading}= useContext(AuthContext)
    const location= useLocation()

    if (loading) return <progress className="progress w-56"></progress> 
    if(user?.email) return children
    else {
        toast.warning('You have to log in first to view details')
    }
    
    return (
        <>
        <Navigate to='/login' state={{from: location}} replace></Navigate>
        <ToastContainer/>
        </>
    
    )
};

export default PrivateRoute;