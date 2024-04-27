import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    if(loading) {
        
    }
    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;