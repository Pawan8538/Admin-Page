import { useState, useRef, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
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

export default function TopNavigation() {
  const { logout, user } = useAuth();
  
  const handleLogout = () => {
    logout();
  };

  const navigation = [
    { label: 'Dashboard', to: '/admin', icon: LayoutDashboard },
    { 
      label: 'Patient', icon: Users, 
      dropdown: [
        { label: 'Create Patient', to: '/admin/patient/create' },
        { label: 'Patient List', to: '/admin/patient/list' },
        { label: 'Category', to: '/admin/patient/category' },
      ]
    },
    {
      label: 'Tests', icon: TestTube,
      dropdown: [
        { label: 'Create Test', to: '/admin/tests/create' },
        { label: 'Master Tests List', to: '/admin/tests/list' },
        { label: 'Add Tests', to: '/admin/tests/add' },
      ]
    },
    {
      label: 'Employee', icon: UserCircle,
      dropdown: [
        { label: 'Employee List', to: '/admin/employee/list' },
        { label: 'Add Employee', to: '/admin/employee/create' },
        { label: 'Department', to: '/admin/employee/department' },
        { label: 'Designation', to: '/admin/employee/designation' },
      ]
    },
    {
      label: 'Pathology', icon: Microscope,
      dropdown: [
        { label: 'Lab Tests Config', to: '/admin/pathology/tests' },
        { label: 'Categories', to: '/admin/pathology/categories' },
        { label: 'Reports', to: '/admin/pathology/reports' },
      ]
    },
    {
      label: 'Referral', icon: HeartHandshake,
      dropdown: [
        { label: 'Set Referral', to: '/admin/referral/set' },
        { label: 'Referral List', to: '/admin/referral/list' },
        { label: 'Withdrawals & Rewards', to: '/admin/referral/rewards' },
        { label: 'Statement', to: '/admin/referral/statement' },
        { label: 'Commission Report', to: '/admin/referral/commission' },
        { label: 'Summary', to: '/admin/referral/summary' },
        { label: 'Payout Report', to: '/admin/referral/payout' },
      ]
    },
    {
      label: 'Billing', icon: IndianRupee,
      dropdown: [
        { label: 'Add Tests (Order)', to: '/admin/billing/add' },
        { label: 'Test Bills', to: '/admin/billing/list' },
        { label: 'Due Bill Report', to: '/admin/billing/reports/due' },
        { label: 'Paid Bill Report', to: '/admin/billing/reports/paid' },
        { label: 'Due Collect Report', to: '/admin/billing/reports/collect' },
      ]
    },
    {
      label: 'Settings', icon: Settings,
      dropdown: [
        { label: 'WhatsApp API', to: '/admin/settings/whatsapp' },
        { label: 'SMTP Email Config', to: '/admin/settings/smtp' },
        { label: 'Invoice & Report Formatting', to: '/admin/settings/formatting' },
        { label: 'Tax & Default Discount Rules', to: '/admin/settings/taxes' },
        { label: 'ID Generation & Prefixes', to: '/admin/settings/prefixes' },
        { label: 'System Audit Logs', to: '/admin/settings/audit' },
        { label: 'Database Backup & Restore', to: '/admin/settings/backup' },
        { label: 'Software Updates & Licensing', to: '/admin/settings/updates' }
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
          <div className="hidden md:flex space-x-1">
            {navigation.map((item, idx) => (
              <NavItem key={idx} {...item} />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400">{user?.name || 'Admin'}</span>
            <button
              onClick={handleLogout}
              className="flex items-center gap-1 px-2 py-1 text-xs text-slate-300 hover:bg-red-600 hover:text-white transition-colors"
              title="Logout"
            >
              <LogOut className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
