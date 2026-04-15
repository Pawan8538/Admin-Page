import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Activity, ArrowLeft, CheckCircle, Loader2 } from 'lucide-react';
import clsx from 'clsx';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Please enter your email address');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1000);
  };

  if (sent) {
    return (
      <div className="w-full max-w-sm">
        <div className="bg-white border-2 border-slate-400 shadow-lg">
          <div className="bg-slate-900 border-b-2 border-slate-700 p-4 text-center">
            <Activity className="h-8 w-8 text-primary-500 mx-auto mb-2" />
            <h1 className="text-lg font-bold text-white">ElabAssist</h1>
          </div>

          <div className="p-6 text-center">
            <div className="bg-green-100 border-2 border-green-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-lg font-bold text-slate-800 mb-2">Check Your Email</h2>
            <p className="text-sm text-slate-600 mb-4">
              We've sent a password reset link to <strong>{email}</strong>
            </p>
            <Link
              to="/login"
              className="inline-block bg-primary-600 text-white px-6 py-2 text-sm font-bold hover:bg-primary-700 transition-colors"
            >
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-sm">
      <div className="bg-white border-2 border-slate-400 shadow-lg">
        <div className="bg-slate-900 border-b-2 border-slate-700 p-4 text-center">
          <Activity className="h-8 w-8 text-primary-500 mx-auto mb-2" />
          <h1 className="text-lg font-bold text-white">ElabAssist</h1>
          <p className="text-xs text-slate-400 mt-1">Reset Your Password</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <p className="text-sm text-slate-600">
            Enter your registered email address and we'll send you a link to reset your password.
          </p>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-2 border-slate-400 px-3 py-2 text-sm focus:border-primary-600 focus:outline-none transition-colors"
              placeholder="Enter your email"
              disabled={loading}
            />
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
            {loading ? 'Sending...' : 'Send Reset Link'}
          </button>

          <Link
            to="/login"
            className="flex items-center justify-center gap-2 text-sm text-slate-600 hover:text-primary-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Login
          </Link>
        </form>
      </div>
    </div>
  );
}
