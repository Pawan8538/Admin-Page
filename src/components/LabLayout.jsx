import { NavLink, useNavigate, Outlet } from 'react-router-dom';
import { Activity, FileText, List, CheckCircle, LogOut, LayoutTemplate } from 'lucide-react';
import clsx from 'clsx';
import { useAuth } from '../context/AuthContext';

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

  const handleLogout = () => {
    logout();
    navigate('/diagnostic/authentication');
  };

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
            <div className="flex items-center gap-2 ml-4 pl-4 border-l border-slate-600">
              <div className="text-right">
                <div className="text-[10px] font-bold text-primary-400 uppercase">Laboratorist</div>
                <div className="text-xs text-white">{user?.name}</div>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center gap-1 px-2 py-1 text-sm font-medium text-slate-300 hover:text-red-400 transition-colors"
                title="Logout"
              >
                <LogOut className="w-4 h-4" />
              </button>
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