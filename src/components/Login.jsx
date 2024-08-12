import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

function Login() {
    const { actions } = useAuth();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch("https://sandbox.academiadevelopers.com/api-auth/", { 
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }), 
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.detail || 'Error en la solicitud'); 
            }

            const result = await response.json();
            const { token, username: returnedUsername } = result; 

            actions.login(token, returnedUsername); 
        } catch (error) {
            console.error("Error en la solicitud:", error.message || error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input 
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    required
                />
            </label>
            <label>
                Contraseña:
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required
                />
            </label>
            <button type="submit">Iniciar sesión</button>
        </form>
    );
}

export default Login;
