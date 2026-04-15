import TopNavigation from './TopNavigation';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <TopNavigation />
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Outlet />
      </main>
      <footer className="bg-slate-200 border-t-2 border-slate-400 p-2 flex justify-between items-center text-xs text-slate-600">
        <div className="flex gap-4">
          <span className="border-r border-slate-400 pr-4">Branch: Main Hospital HQ</span>
          <span className="text-primary-700">Database Active (32ms)</span>
        </div>
        <div>
          ElabAssist v4.2.0 | Build 8912
        </div>
      </footer>
    </div>
  );
}
