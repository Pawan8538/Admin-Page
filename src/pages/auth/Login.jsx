import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Activity, Eye, EyeOff, Loader2 } from 'lucide-react';
import clsx from 'clsx';

export default function Login() {
  const [form, setForm] = useState({ username: '', password: '', role: 'ADMIN', remember: false });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!form.username || !form.password) {
      setError('Please enter both username and password');
      return;
    }

    setLoading(true);

    setTimeout(async () => {
      const result = await login(form);
      setLoading(false);

      if (result.success) {
        if (result.role === 'ADMIN') {
          navigate('/admin');
        } else if (result.role === 'DOCTOR') {
          navigate('/doctor/dashboard');
        }
      } else {
        setError(result.error);
      }
    }, 800);
  };

  return (
    <div className="w-full max-w-sm">
      <div className="bg-white border-2 border-slate-400 shadow-lg">
        <div className="bg-slate-900 border-b-2 border-slate-700 p-4 text-center">
          <Activity className="h-8 w-8 text-primary-500 mx-auto mb-2" />
          <h1 className="text-lg font-bold text-white">ElabAssist</h1>
          <p className="text-xs text-slate-400 mt-1">Laboratory Management System</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Username</label>
            <input
              type="text"
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              className="w-full border-2 border-slate-400 px-3 py-2 text-sm focus:border-primary-600 focus:outline-none transition-colors"
              placeholder="Enter username"
              disabled={loading}
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="w-full border-2 border-slate-400 px-3 py-2 pr-10 text-sm focus:border-primary-600 focus:outline-none transition-colors"
                placeholder="Enter password"
                disabled={loading}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Login As</label>
            <select
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
              className="w-full border-2 border-slate-400 px-3 py-2 text-sm focus:border-primary-600 focus:outline-none transition-colors bg-white"
              disabled={loading}
            >
              <option value="ADMIN">Administrator</option>
              <option value="DOCTOR">Doctor</option>
            </select>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={form.remember}
                onChange={(e) => setForm({ ...form, remember: e.target.checked })}
                className="w-4 h-4 border-2 border-slate-400 rounded text-primary-600 focus:ring-primary-600"
                disabled={loading}
              />
              <span className="text-xs text-slate-600">Remember me</span>
            </label>
            <Link
              to="/forgot-password"
              className="text-xs text-primary-600 hover:text-primary-700 font-semibold"
            >
              Forgot Password?
            </Link>
          </div>

          {error && (
            <div className="bg-red-50 border-2 border-red-400 text-red-700 px-3 py-2 text-xs font-semibold">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className={clsx(
              "w-full bg-primary-600 text-white py-2 text-sm font-bold uppercase tracking-wide hover:bg-primary-700 transition-colors flex items-center justify-center gap-2",
              loading && "opacity-70 cursor-not-allowed"
            )}
          >
            {loading && <Loader2 className="w-4 h-4 animate-spin" />}
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        <div className="bg-slate-100 border-t-2 border-slate-300 px-6 py-3 text-center">
          <p className="text-xs text-slate-500">
            Demo: admin/admin123 or doctor/doctor123
          </p>
        </div>
      </div>
    </div>
  );
}
