import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios'
import axiosInstance from './axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null); // null represents the initial loading state
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const backendServerURL = "http://localhost:8000/api/auth-status"
        const checkAuthStatus = async () => {
            try {
                const response = await axiosInstance.get('/api/auth-status');
                // debugger;
                // const response = await axios.get(backendServerURL, {
                    // withCredentials: true,
                    // headers: {
                    //     'Authorization': `Bearer ${token}`
                    // }
                // });
                // console.log(`auth response fe: ${response.status}`);
                
                const authStatus = response.status === 200 ? true : false;
                // const authStatus = true;
                console.log(authStatus)
                setIsAuthenticated(authStatus);
            } catch (error) {
                console.error(error);
                setIsAuthenticated(false);
            } finally {
                setLoading(false);
            }
        }
        checkAuthStatus();
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, loading, setLoading }}>
            { children }
        </AuthContext.Provider>
    )
}
