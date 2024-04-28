import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import jsonLoading from "../loading.json"
import Lottie from "lottie-react"
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user, loading} = useContext(AuthContext);
    if(loading) {
        return <div className="flex justify-center items-center h-[450px]">
            <Lottie animationData={jsonLoading}/>
        </div>
    }
    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;
PrivateRoute.propTypes = {
    children: PropTypes.object
}