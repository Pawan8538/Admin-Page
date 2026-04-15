import { Activity } from 'lucide-react';
import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <div className="bg-slate-900 border-b-2 border-slate-700 px-4 py-3">
        <div className="flex items-center gap-2 max-w-7xl mx-auto">
          <Activity className="h-5 w-5 text-primary-500" />
          <span className="text-sm font-bold text-white tracking-tight">ElabAssist</span>
        </div>
      </div>
      <main className="flex-1 flex items-center justify-center p-4">
        <Outlet />
      </main>
      <footer className="bg-slate-200 border-t-2 border-slate-400 p-2 text-center text-xs text-slate-600">
        ElabAssist v4.2.0 | Build 8912
      </footer>
    </div>
  );
}
