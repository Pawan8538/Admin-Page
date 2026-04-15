import { createContext, useContext, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

const getInitialState = () => {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');
  const userName = localStorage.getItem('userName');
  
  if (token && role) {
    return { user: { token, role, name: userName }, loading: false };
  }
  return { user: null, loading: false };
};

export const AuthProvider = ({ children }) => {
  const [state, setState] = useState(getInitialState);
  const navigate = useNavigate();
  const { user, loading } = state;

  const login = useCallback(async (credentials) => {
    const mockUsers = {
      admin: { username: 'admin', password: 'admin123', role: 'ADMIN', name: 'Administrator' },
      doctor: { username: 'doctor', password: 'doctor123', role: 'DOCTOR', name: 'Dr. Smith' },
    };

    const foundUser = Object.values(mockUsers).find(
      (u) => u.username === credentials.username && u.password === credentials.password
    );

    if (foundUser) {
      const token = `token_${foundUser.role}_${Date.now()}`;
      localStorage.setItem('token', token);
      localStorage.setItem('role', foundUser.role);
      localStorage.setItem('userName', foundUser.name);
      const userData = { token, role: foundUser.role, name: foundUser.name };
      setState({ user: userData, loading: false });
      return { success: true, role: foundUser.role };
    }

    return { success: false, error: 'Invalid credentials' };
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('userName');
    setState({ user: null, loading: false });
    navigate('/login');
  }, [navigate]);

  const isAuthenticated = () => {
    return !!localStorage.getItem('token');
  };

  const getRole = () => {
    return localStorage.getItem('role');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-slate-600">Loading...</div>
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated, getRole }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
