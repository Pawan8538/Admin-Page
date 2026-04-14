import { useState, useRef, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { 
  LayoutDashboard, Users, TestTube, UserCircle, 
  Microscope, HeartHandshake, Receipt, ChevronDown, Activity
} from 'lucide-react';
import clsx from 'clsx';

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
            "flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-slate-800 hover:text-white",
            isOpen ? "bg-slate-800 text-white" : "text-slate-300"
          )}
        >
          <Icon className="w-4 h-4" />
          <span>{label}</span>
          <ChevronDown className={clsx("w-3 h-3 transition-transform", isOpen && "rotate-180")} />
        </button>
        {isOpen && (
          <div className="absolute left-0 mt-2 w-48 bg-white border border-slate-200 rounded-md shadow-lg py-1 z-50">
            {dropdown.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary-600 transition-colors"
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
        "flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-slate-800 hover:text-white",
        isActive ? "bg-primary-600 text-white" : "text-slate-300"
      )}
    >
      <Icon className="w-4 h-4" />
      <span>{label}</span>
    </NavLink>
  );
};

export default function TopNavigation() {
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
        { label: 'Create New Test', to: '/tests/create' },
        { label: 'Test Master Config', to: '/tests/config' },
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
        { label: 'Queue / Worklist', to: '/pathology/queue' },
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
      label: 'Billing', icon: Receipt,
      dropdown: [
        { label: 'Add Tests (Order)', to: '/billing/add' },
        { label: 'Test Bills', to: '/billing/list' },
        { label: 'Due Bill Report', to: '/billing/reports/due' },
        { label: 'Paid Bill Report', to: '/billing/reports/paid' },
        { label: 'Due Collect Report', to: '/billing/reports/collect' },
      ]
    }
  ];

  return (
    <div className="bg-slate-900 shadow-sm sticky top-0 z-40 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center flex-shrink-0">
            <Activity className="h-8 w-8 text-primary-500" />
            <span className="ml-2 text-xl font-bold text-white tracking-tight">ElabAssist <span className="font-light text-slate-400">Admin</span></span>
          </div>
          <div className="hidden md:flex ml-10 space-x-1">
            {navigation.map((item, idx) => (
              <NavItem key={idx} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
