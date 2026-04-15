import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

function getUserFromStorage() {
  try {
    const stored = localStorage.getItem('elabassist_user');
    const token = localStorage.getItem('elabassist_token');
    return { user: stored ? JSON.parse(stored) : null, token };
  } catch {
    return { user: null, token: null };
  }
}

export function AuthProvider({ children }) {
  const [authState, setAuthState] = useState(() => getUserFromStorage());

  useEffect(() => {
    const handleStorage = () => {
      setAuthState(getUserFromStorage());
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const login = async (credentials) => {
    const { username, password, role } = credentials;
    
    const mockUsers = {
      admin: { id: 2, name: 'Admin User', role: 'admin', branch: 'Enterprise Elabassist' },
      receptionist: { id: 6, name: 'Reception Jane', role: 'receptionist', branch: 'Enterprise Elabassist' },
      laboratorist: { id: 5, name: 'Lab Tech Mike', role: 'laboratorist', branch: 'Enterprise Elabassist' },
    };

    if (username && password) {
      const userData = mockUsers[role] || mockUsers.admin;
      const token = `mock_token_${Date.now()}`;
      
      localStorage.setItem('elabassist_token', token);
      localStorage.setItem('elabassist_user', JSON.stringify(userData));
      setAuthState({ user: userData, token });
      return { success: true, user: userData };
    }
    
    return { success: false, error: 'Invalid credentials' };
  };

  const logout = () => {
    localStorage.removeItem('elabassist_token');
    localStorage.removeItem('elabassist_user');
    setAuthState({ user: null, token: null });
  };

  const isAuthenticated = () => {
    return !!authState.user && !!authState.token;
  };

  const getRedirectPath = () => {
    const role = authState.user?.role;
    if (role === 'laboratorist') return '/laboratorist/dashboard';
    if (role === 'receptionist') return '/receptionist/dashboard';
    return '/';
  };

  return (
    <AuthContext.Provider value={{ user: authState.user, login, logout, isAuthenticated, getRedirectPath, loading: false }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}