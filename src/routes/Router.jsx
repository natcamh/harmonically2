import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import ProtectedRoute from "./ProtectedRoute";
import Profile from "../components/Profile";
import Layout from "./Layout";
import App from "../App"; 
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />, 
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "login",
                element: <Login />,
            },
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
    {
        path: "*",
        element: <h1>Not Found</h1>,
    },
]);

export { router };
