import { useContext } from "react";
import { AuthContext } from "../Authprovider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRouter = ({children}) => {
    const  { user,loding} = useContext(AuthContext);
    const location = useLocation();
    console.log(location .pathname);
    if(loding) {
        return <span className="loading loading-bars loading-lg"></span>;
    }
    if(user){
        return children ;
    }
    return <Navigate state={location.pathname} to={'/login'} />;
};

export default PrivetRouter;