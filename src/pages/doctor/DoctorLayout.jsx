import { useState, useRef, useEffect } from 'react';
import { NavLink, Link, Outlet } from 'react-router-dom';
import { 
  Activity, LayoutDashboard, Calendar, Users, FileText, 
  FlaskConical, ChevronDown, LogOut
} from 'lucide-react';
import clsx from 'clsx';
import { useAuth } from '../../context/AuthContext';

const NavItem = ({ to, icon: Icon, label, dropdown }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (dropdown) {
    return (
      <div className="relative" ref={dropdownRef}>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={clsx(
            "flex items-center gap-1 px-2 py-1 text-sm font-medium transition-colors hover:bg-slate-800 hover:text-white rounded-none",
            isOpen ? "bg-slate-800 text-white" : "text-slate-300"
          )}
        >
          {Icon && <Icon className="w-4 h-4" />}
          <span>{label}</span>
          <ChevronDown className={clsx("w-3 h-3 transition-transform", isOpen && "rotate-180")} />
        </button>
        {isOpen && (
          <div className="absolute left-0 mt-0 w-48 bg-white border-2 border-slate-400 shadow-sm py-1 z-50 rounded-none">
            {dropdown.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-1 text-sm text-slate-700 hover:bg-slate-200 hover:text-primary-800 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <NavLink 
      to={to}
      className={({ isActive }) => clsx(
        "flex items-center gap-1 px-2 py-1 text-sm font-medium transition-colors hover:bg-slate-800 hover:text-white rounded-none",
        isActive ? "bg-primary-600 text-white" : "text-slate-300"
      )}
    >
      {Icon && <Icon className="w-4 h-4" />}
      <span>{label}</span>
    </NavLink>
  );
};

export default function DoctorLayout() {
  const { logout, user } = useAuth();

  const navigation = [
    { label: 'Dashboard', to: '/doctor/dashboard', icon: LayoutDashboard },
    { 
      label: 'Appointments', icon: Calendar, 
      dropdown: [
        { label: "Today's Appointments", to: '/doctor/appointments' },
        { label: 'All Appointments', to: '/doctor/appointments' },
        { label: 'Calendar View', to: '/doctor/appointments' },
      ]
    },
    { 
      label: 'Patients', icon: Users, 
      dropdown: [
        { label: 'Patient List', to: '/doctor/appointments' },
        { label: 'Search Patient', to: '/doctor/appointments' },
        { label: 'Add Patient', to: '/doctor/appointments' },
      ]
    },
    { 
      label: 'Prescriptions', icon: FileText, 
      dropdown: [
        { label: 'Write Prescription', to: '/doctor/appointments' },
        { label: 'View History', to: '/doctor/appointments' },
      ]
    },
    { 
      label: 'Lab', icon: FlaskConical, 
      dropdown: [
        { label: 'Lab Requests', to: '/doctor/appointments' },
        { label: 'Pending Results', to: '/doctor/appointments' },
        { label: 'Create Request', to: '/doctor/appointments' },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <div className="bg-slate-900 border-b-2 border-slate-700 sticky top-0 z-40 rounded-none">
        <div className="max-w-full px-16 lg:px-28">
          <div className="flex items-center justify-between h-10">
            <div className="flex items-center flex-shrink-0">
              <Activity className="h-5 w-5 text-primary-500" />
              <span className="ml-2 text-sm font-bold text-white tracking-tight">ElabAssist</span>
              <span className="ml-3 text-xs text-slate-400 bg-slate-800 px-2 py-0.5 rounded">Doctor Panel</span>
            </div>
            <div className="hidden md:flex space-x-1">
              {navigation.map((item, idx) => (
                <NavItem key={idx} {...item} />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400">{user?.name || 'Doctor'}</span>
              <button
                onClick={logout}
                className="flex items-center gap-1 px-2 py-1 text-xs text-slate-300 hover:bg-red-600 hover:text-white transition-colors"
                title="Logout"
              >
                <LogOut className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Outlet />
      </main>

      <footer className="bg-slate-200 border-t-2 border-slate-400 p-2 flex justify-between items-center text-xs text-slate-600">
        <div className="flex gap-4">
          <span className="border-r border-slate-400 pr-4">User: {user?.name || 'Doctor'}</span>
          <span className="border-r border-slate-400 pr-4">Role: Doctor</span>
          <span className="text-primary-700">Branch: Main Hospital HQ</span>
        </div>
        <div>
          ElabAssist v4.2.0 | Build 8912
        </div>
      </footer>
    </div>
  );
}
