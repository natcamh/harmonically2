import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Router } from "./routes/Router";
import { AuthProvider } from "./contexts/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={Router}>
    <AuthProvider>
        
    </AuthProvider>
</RouterProvider>
);
