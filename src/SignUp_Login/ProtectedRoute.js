import React, { useContext } from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { isAuthenticated, loading } = useAuth();

    if (loading) {
        return <div>loading...</div>;
    }

    // return (
    //     <Route
    //     {...rest}
    //     render={(props) => isAuthenticated ? 
    //         (<Component key={props.location.key} {...props} />) 
    //         : 
    //         redirect("/login")
    //     }
    //     />
    // )
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute