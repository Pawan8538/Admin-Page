import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute({ children, allowedRoles }) {
  const { isAuthenticated, user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center">
        <div className="text-center">
          <div className="text-lg font-bold text-slate-700">Loading...</div>
        </div>
      </div>
    );
  }

  if (!isAuthenticated()) {
    return <Navigate to="/diagnostic/authentication" state={{ from: location }} replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user?.role)) {
    const defaultRoute = user?.role === 'receptionist' 
      ? '/receptionist/dashboard' 
      : user?.role === 'laboratorist'
        ? '/laboratorist/dashboard'
        : '/';
    return <Navigate to={defaultRoute} replace />;
  }

  return children;
}