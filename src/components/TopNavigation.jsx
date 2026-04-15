import { useState, useRef, useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, Users, TestTube, UserCircle, 
  Microscope, HeartHandshake, IndianRupee, ChevronDown, Activity, Settings, LogOut
} from 'lucide-react';
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

export default function TopNavigation() {
  const navigate = useNavigate();
  const { user, logout, isAuthenticated } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/diagnostic/authentication');
  };

  const navigation = [
    { label: 'Dashboard', to: '/', icon: LayoutDashboard },
    { 
      label: 'Patient', icon: Users, 
      dropdown: [
        { label: 'Create Patient', to: '/patient/create' },
        { label: 'Patient List', to: '/patient/list' },
        { label: 'Category', to: '/patient/category' },
      ]
    },
    {
      label: 'Tests', icon: TestTube,
      dropdown: [
        { label: 'Create Test', to: '/tests/create' },
        { label: 'Master Tests List', to: '/tests/list' },
        { label: 'Add Tests', to: '/tests/add' },
      ]
    },
    {
      label: 'Employee', icon: UserCircle,
      dropdown: [
        { label: 'Employee List', to: '/employee/list' },
        { label: 'Add Employee', to: '/employee/create' },
        { label: 'Department', to: '/employee/department' },
        { label: 'Designation', to: '/employee/designation' },
      ]
    },
    {
      label: 'Pathology', icon: Microscope,
      dropdown: [
        { label: 'Lab Tests Config', to: '/pathology/tests' },
        { label: 'Categories', to: '/pathology/categories' },
        { label: 'Reports', to: '/pathology/reports' },
      ]
    },
    {
      label: 'Referral', icon: HeartHandshake,
      dropdown: [
        { label: 'Set Referral', to: '/referral/set' },
        { label: 'Referral List', to: '/referral/list' },
        { label: 'Withdrawals & Rewards', to: '/referral/rewards' },
        { label: 'Statement', to: '/referral/statement' },
        { label: 'Commission Report', to: '/referral/commission' },
        { label: 'Summary', to: '/referral/summary' },
        { label: 'Payout Report', to: '/referral/payout' },
      ]
    },
    {
      label: 'Billing', icon: IndianRupee,
      dropdown: [
        { label: 'Add Tests (Order)', to: '/billing/add' },
        { label: 'Test Bills', to: '/billing/list' },
        { label: 'Due Bill Report', to: '/billing/reports/due' },
        { label: 'Paid Bill Report', to: '/billing/reports/paid' },
        { label: 'Due Collect Report', to: '/billing/reports/collect' },
      ]
    },
    {
      label: 'Settings', icon: Settings,
      dropdown: [
        { label: 'WhatsApp API', to: '/settings/whatsapp' },
        { label: 'SMTP Email Config', to: '/settings/smtp' },
        { label: 'Invoice & Report Formatting', to: '/settings/formatting' },
        { label: 'Tax & Default Discount Rules', to: '/settings/taxes' },
        { label: 'ID Generation & Prefixes', to: '/settings/prefixes' },
        { label: 'System Audit Logs', to: '/settings/audit' },
        { label: 'Database Backup & Restore', to: '/settings/backup' },
        { label: 'Software Updates & Licensing', to: '/settings/updates' }
      ]
    }
  ];

  return (
    <div className="bg-slate-900 border-b-2 border-slate-700 sticky top-0 z-40 rounded-none">
      <div className="max-w-full px-16 lg:px-28">
        <div className="flex items-center justify-between h-10">
          <div className="flex items-center flex-shrink-0">
            <Activity className="h-5 w-5 text-primary-500" />
            <span className="ml-2 text-sm font-bold text-white tracking-tight">ElabAssist</span>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item, idx) => (
              <NavItem key={idx} {...item} />
            ))}
            {isAuthenticated() && (
              <div className="flex items-center gap-2 ml-4 pl-4 border-l border-slate-600">
                <div className="text-right">
                  <div className="text-[10px] font-bold text-primary-400 uppercase">{user?.role}</div>
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
