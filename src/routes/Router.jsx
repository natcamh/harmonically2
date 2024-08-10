import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import ProtectedRoute from "../routes/ProtectedRoute";
import Profile from "../components/Profile";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [
            {
                index: true, // path: "/"
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/profile",
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

export { Router };
