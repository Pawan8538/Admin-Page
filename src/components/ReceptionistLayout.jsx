import { useState, useRef, useEffect } from 'react';
import { NavLink, useNavigate, Link, Outlet } from 'react-router-dom';
import { Activity, Calendar, Users, IndianRupee, LogOut, ChevronDown, User } from 'lucide-react';
import clsx from 'clsx';
import { useAuth } from '../context/AuthContext';

function getInitials(name) {
  if (!name) return 'U';
  return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
}

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
          <Icon className="w-4 h-4" />
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
      <Icon className="w-4 h-4" />
      <span>{label}</span>
    </NavLink>
  );
};

export default function ReceptionistLayout() {
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

  const navigation = [
    { label: 'Dashboard', to: '/receptionist/dashboard', icon: Activity },
    { label: 'Appointments', to: '/receptionist/appointments', icon: Calendar },
    { 
      label: 'Patients', icon: Users, 
      dropdown: [
        { label: 'Create Patient', to: '/receptionist/patients/create' },
        { label: 'Patient List', to: '/receptionist/patients/list' },
        { label: 'Category', to: '/receptionist/patients/category' },
      ]
    },
    { 
      label: 'Billing', icon: IndianRupee, 
      dropdown: [
        { label: 'Create Test Bill', to: '/receptionist/billing/add' },
        { label: 'Test Bills', to: '/receptionist/billing/list' },
        { label: 'Due Report', to: '/receptionist/billing/reports/due' },
        { label: 'Paid Report', to: '/receptionist/billing/reports/paid' },
        { label: 'Collection Report', to: '/receptionist/billing/reports/collect' },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <div className="bg-slate-900 border-b-2 border-slate-700 sticky top-0 z-40">
        <div className="max-w-full px-16 lg:px-28">
          <div className="flex items-center justify-between h-10">
            <div className="flex items-center flex-shrink-0">
              <Activity className="h-5 w-5 text-primary-500" />
              <span className="ml-2 text-sm font-bold text-white tracking-tight">ElabAssist</span>
              <span className="ml-2 text-xs text-slate-400 bg-slate-800 px-2 py-0.5">Receptionist</span>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              {navigation.map((item, idx) => (
                <NavItem key={idx} {...item} />
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