import React from "react";
import { Outlet } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import './styles.css';

function App() {
    return (
        <AuthProvider>
            
            <Outlet /> 
        </AuthProvider>
    );
}

export default App;
