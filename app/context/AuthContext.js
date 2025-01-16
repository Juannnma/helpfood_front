import React, { createContext, useContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const [jwt, setJwt] = useState(null); 

    const login = async (token, userData) => {
        try {
            await AsyncStorage.setItem('userToken', token);
            setIsAuthenticated(true);
            setUser(userData);
            setJwt(token); 
        } catch (error) {
            console.error("Error al guardar el token:", error);
        }
    };

    const logout = async () => {
        try {
            await AsyncStorage.removeItem('userToken');
            setIsAuthenticated(false);
            setUser(null);
            setJwt(null);
        } catch (error) {
            console.error("Error al eliminar el token:", error);
        }
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, user, jwt }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
