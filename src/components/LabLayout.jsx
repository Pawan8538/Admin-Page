import { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate, Outlet } from 'react-router-dom';
import { Activity, FileText, List, CheckCircle, LogOut, LayoutTemplate, User } from 'lucide-react';
import clsx from 'clsx';
import { useAuth } from '../context/AuthContext';

function getInitials(name) {
  if (!name) return 'U';
  return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
}

const navItems = [
  { label: 'Dashboard', to: '/laboratorist/dashboard', icon: Activity },
  { label: 'Investigation', to: '/laboratorist/investigation', icon: FileText },
  { label: 'Create Report', to: '/laboratorist/investigation/create', icon: List },
  { label: 'Report List', to: '/laboratorist/investigation/report_list', icon: CheckCircle },
  { label: 'Templates', to: '/laboratorist/investigation/template', icon: LayoutTemplate },
];

export default function LabLayout() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [showProfile, setShowProfile] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/diagnostic/authentication');
  };

  const handleProfileClick = () => {
    setShowProfile(!showProfile);
  };

  const closeProfile = () => {
    setShowProfile(false);
  };

  const profileRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setShowProfile(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <div className="bg-slate-900 border-b-2 border-slate-700 sticky top-0 z-40">
        <div className="max-w-full px-16 lg:px-28">
          <div className="flex items-center justify-between h-10">
            <div className="flex items-center flex-shrink-0">
              <Activity className="h-5 w-5 text-primary-500" />
              <span className="ml-2 text-sm font-bold text-white tracking-tight">ElabAssist</span>
              <span className="ml-2 text-xs text-slate-400 bg-slate-800 px-2 py-0.5">Laboratorist</span>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, idx) => (
                <NavLink
                  key={idx}
                  to={item.to}
                  className={({ isActive }) => clsx(
                    "flex items-center gap-1 px-2 py-1 text-sm font-medium transition-colors hover:bg-slate-800 hover:text-white rounded-none",
                    isActive ? "bg-primary-600 text-white" : "text-slate-300"
                  )}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </div>
            <div className="relative flex items-center gap-2 ml-4 pl-4 border-l border-slate-600" ref={profileRef}>
              <button
                onClick={handleProfileClick}
                className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center text-white hover:bg-primary-700 transition-colors"
              >
                <User className="w-5 h-5" />
              </button>
              {showProfile && (
                <div className="absolute right-0 top-10 w-56 bg-white border-2 border-slate-400 shadow-lg z-50">
                  <div className="p-3 border-b border-slate-300">
                    <div className="text-sm font-bold text-slate-800">{user?.name}</div>
                    <div className="text-xs text-slate-500 capitalize">{user?.role}</div>
                    <div className="text-xs text-slate-400 mt-1">Branch: {user?.branch}</div>
                  </div>
                  <button
                    onClick={() => { closeProfile(); handleLogout(); }}
                    className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50"
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
    </div>
  );
}