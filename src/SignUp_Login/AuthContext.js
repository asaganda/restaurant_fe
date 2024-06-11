import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null); // null represents the initial loading state
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const backendServerURL = "http://localhost:8000/api/auth-status"
        const checkAuthStatus = async () => {
            try {
                const response = await axios.get(backendServerURL,{ "username": "asaganda3", "password": "testburger123" }, { withCredentials: true });
                console.log(response);
                setIsAuthenticated(response.status === 200);
            } catch (error) {
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

export const useAuth = () => useContext(AuthContext);
