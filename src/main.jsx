import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App"; 
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";
import ProtectedRoute from "./routes/ProtectedRoute";
import Layout from "./routes/Layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: "login", element: <Login /> },
            {
                path: "profile",
                element: (
                    <ProtectedRoute>
                        <Profile />
                    </ProtectedRoute>
                ),
            },
        ],
    },
    { path: "*", element: <h1>Not Found</h1> },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
