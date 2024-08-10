import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

function Login() {
    const { actions } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch("https://sandbox.academiadevelopers.com/users/profiles/login/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const result = await response.json();
            if (response.ok) {
                const { token, user__id } = result;
                actions.login(token, user__id); // Asegúrate de que `actions` contenga `login`
            } else {
                // Manejo de errores
                console.error("Error:", result.message);
            }
        } catch (error) {
            console.error("Error en la solicitud:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
                Contraseña:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button type="submit">Iniciar sesión</button>
        </form>
    );
}

export default Login;
