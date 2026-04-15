import { useState, useRef, useEffect } from 'react';
import { NavLink, useNavigate, Link, Outlet } from 'react-router-dom';
import { Activity, Calendar, Users, IndianRupee, LogOut, ChevronDown } from 'lucide-react';
import clsx from 'clsx';
import { useAuth } from '../context/AuthContext';

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

  const handleLogout = () => {
    logout();
    navigate('/diagnostic/authentication');
  };

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
            <div className="flex items-center gap-2 ml-4 pl-4 border-l border-slate-600">
              <div className="text-right">
                <div className="text-[10px] font-bold text-primary-400 uppercase">Receptionist</div>
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