import { useAuth } from "../contexts/AuthContext"
import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({ children }) {
    const { state } = useAuth('state');
    const location = useLocation();

    if (!state.isAuthenticated) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}