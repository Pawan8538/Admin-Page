import { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { Activity, Lock, User, LogIn, ChevronDown } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const roles = [
  { id: 'admin', label: 'Admin' },
  { id: 'receptionist', label: 'Receptionist' },
  { id: 'laboratorist', label: 'Laboratorist' },
];

const roleCredentials = {
  admin: { username: 'admin', password: 'admin123' },
  receptionist: { username: 'reception', password: 'recep123' },
  laboratorist: { username: 'labtech', password: 'lab123' },
};

export default function Login() {
  const navigate = useNavigate();
  const { login, isAuthenticated, getRedirectPath } = useAuth();
  const [selectedRole, setSelectedRole] = useState('admin');
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('admin123');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRoleChange = (e) => {
    const role = e.target.value;
    setSelectedRole(role);
    const creds = roleCredentials[role];
    if (creds) {
      setUsername(creds.username);
      setPassword(creds.password);
    }
  };

  if (isAuthenticated()) {
    return <Navigate to="/" replace />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!username || !password) {
      setError('Please enter username and password');
      setLoading(false);
      return;
    }

    const result = await login({ username, password, role: selectedRole });
    
    setLoading(false);
    
    if (result.success) {
      const redirectPath = getRedirectPath();
      navigate(redirectPath);
    } else {
      setError(result.error || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="bg-white border-2 border-slate-400 shadow-lg w-full max-w-md">
        <div className="bg-slate-900 border-b-2 border-slate-700 p-4 flex items-center justify-center gap-3">
          <Activity className="h-8 w-8 text-primary-500" />
          <div>
            <h1 className="text-xl font-bold text-white tracking-wide">ElabAssist</h1>
            <p className="text-[10px] text-slate-400 uppercase tracking-widest">Diagnostic Management System</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Select Login Type</label>
            <div className="relative">
              <select
                value={selectedRole}
                onChange={handleRoleChange}
                className="w-full pl-3 pr-9 py-2 text-sm border-2 border-slate-400 focus:border-primary-600 focus:outline-none appearance-none bg-white"
              >
                {roles.map((role) => (
                  <option key={role.id} value={role.id}>{role.label}</option>
                ))}
              </select>
              <ChevronDown className="h-4 w-4 text-slate-400 absolute right-3 top-2.5 pointer-events-none" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Username</label>
            <div className="relative">
              <User className="h-4 w-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                name="username"
                autoComplete="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-sm border-2 border-slate-400 focus:border-primary-600 focus:outline-none"
                placeholder="Enter username"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Password</label>
            <div className="relative">
              <Lock className="h-4 w-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="password"
                name="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-sm border-2 border-slate-400 focus:border-primary-600 focus:outline-none"
                placeholder="Enter password"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4"
            />
            <label htmlFor="rememberMe" className="text-xs text-slate-600">Remember Me</label>
          </div>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-3 py-2 text-xs font-bold">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-4 border-2 border-primary-800 flex items-center justify-center gap-2 disabled:opacity-50"
          >
            <LogIn className="h-4 w-4" />
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        <div className="border-t-2 border-slate-300 p-2 text-center">
          <p className="text-[10px] text-slate-500">ElabAssist v4.2.0 | Build 8912</p>
        </div>
      </div>
    </div>
  );
}