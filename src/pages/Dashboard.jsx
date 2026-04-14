import { Search, FileText, Settings, Activity, Clock, Users, DollarSign } from 'lucide-react';
import clsx from 'clsx';

export default function Dashboard() {
  const recentAppts = [
    { id: 'APT-992', time: '10:30 AM', name: 'John Doe', doctor: 'Dr. Sarah Connor', status: 'Waiting' },
    { id: 'APT-993', time: '10:45 AM', name: 'Jane Smith', doctor: 'Dr. John Watson', status: 'In Consult' },
    { id: 'APT-994', time: '11:00 AM', name: 'Robert King', doctor: 'Dr. Sarah Connor', status: 'Booked' },
  ];

  const pendingLabs = [
    { id: 'REQ-8012', name: 'Alice Wong', tests: 'CBC, LFT', priority: 'URGENT' },
    { id: 'REQ-8013', name: 'Tom Hardy', tests: 'KFT, Lipid Profile', priority: 'Routine' },
    { id: 'REQ-8014', name: 'Emma Stone', tests: 'Thyroid Panel', priority: 'Routine' },
  ];

  return (
    <div className="max-w-full space-y-2 flex flex-col min-h-screen pb-10 relative">
      
      {/* Header Area */}
      <div className="flex justify-between items-center border-b-2 border-slate-400 pb-1 mb-2 bg-slate-200 p-2 border-2 rounded-none">
        <div className="flex items-center gap-4">
          <h1 className="text-lg font-bold text-slate-800 tracking-wide uppercase">System Dashboard</h1>
          <span className="text-xs font-semibold text-slate-600 bg-white border border-slate-400 px-2 py-0.5">14-APR-2026</span>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="relative border border-slate-500 bg-white w-64">
             <Search className="h-3 w-3 text-slate-400 absolute left-2 top-1.5" />
             <input type="text" placeholder="Patient ID, Name..." className="w-full pl-6 pr-1 py-0.5 text-xs focus:ring-0 border-none outline-none" />
          </div>
          <button className="bg-primary-600 px-2 py-1 border border-primary-800 text-xs text-white hover:bg-primary-700 flex items-center gap-1">
             <FileText className="w-3 h-3" /> Investment Report
          </button>
          <button className="bg-slate-300 px-2 py-1 border border-slate-500 text-xs text-slate-800 hover:bg-slate-400 flex items-center gap-1">
             <Settings className="w-3 h-3" /> Settings
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
        <div className="bg-white border-2 border-slate-400 p-2 flex items-center gap-3">
          <div className="bg-blue-100 border border-blue-400 p-2"><Users className="w-5 h-5 text-blue-700"/></div>
          <div>
            <div className="text-xs font-bold text-slate-600 uppercase">Today's Patients</div>
            <div className="text-lg font-bold text-slate-900 leading-tight">142 <span className="text-xs text-green-600 font-bold">(+12)</span></div>
          </div>
        </div>
        <div className="bg-white border-2 border-slate-400 p-2 flex items-center gap-3">
          <div className="bg-purple-100 border border-purple-400 p-2"><Clock className="w-5 h-5 text-purple-700"/></div>
          <div>
            <div className="text-xs font-bold text-slate-600 uppercase">Total Appointments</div>
            <div className="text-lg font-bold text-slate-900 leading-tight">87 <span className="text-xs text-slate-500 font-semibold">(14 Pending)</span></div>
          </div>
        </div>
        <div className="bg-white border-2 border-slate-400 p-2 flex items-center gap-3">
          <div className="bg-orange-100 border border-orange-400 p-2"><Activity className="w-5 h-5 text-orange-700"/></div>
          <div>
            <div className="text-xs font-bold text-slate-600 uppercase">Pending Lab Results</div>
            <div className="text-lg font-bold text-red-700 leading-tight">45 <span className="text-[10px] text-red-600 block leading-none">Immediate Action Req.</span></div>
          </div>
        </div>
        <div className="bg-white border-2 border-slate-400 p-2 flex items-center gap-3">
          <div className="bg-green-100 border border-green-400 p-2"><DollarSign className="w-5 h-5 text-green-700"/></div>
          <div>
            <div className="text-xs font-bold text-slate-600 uppercase">Daily Collection (Est)</div>
            <div className="text-lg font-bold text-slate-900 leading-tight">₹4,250 <span className="text-xs text-slate-500 font-semibold">(To Collect: ₹480)</span></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 flex-1 mt-2">
        {/* Recent Appointments */}
        <div className="border-2 border-slate-400 bg-white flex flex-col">
          <div className="p-1 border-b-2 border-slate-400 bg-slate-200 flex justify-between items-center">
            <h2 className="text-sm font-bold text-slate-800">Recent Appointments</h2>
            <div className="flex gap-1">
              <button className="px-2 py-0.5 text-xs border border-slate-500 bg-white hover:bg-slate-50">Refresh List</button>
              <button className="px-2 py-0.5 text-xs border border-primary-800 bg-primary-600 text-white hover:bg-primary-700">View All</button>
            </div>
          </div>
          <table className="min-w-full divide-y divide-slate-300 border-b border-slate-400">
            <thead className="bg-slate-300">
              <tr>
                <th className="px-2 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">Appt ID</th>
                <th className="px-2 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">Time</th>
                <th className="px-2 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">Patient Name</th>
                <th className="px-2 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">Doctor</th>
                <th className="px-2 py-1 text-center text-xs font-bold text-slate-800 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
               {recentAppts.map((a, i) => (
                 <tr key={i} className="hover:bg-blue-50">
                    <td className="px-2 py-1 border-r border-slate-300 text-xs font-bold text-primary-700 underline cursor-pointer">{a.id}</td>
                    <td className="px-2 py-1 border-r border-slate-300 text-xs font-semibold">{a.time}</td>
                    <td className="px-2 py-1 border-r border-slate-300 text-xs text-slate-900">{a.name}</td>
                    <td className="px-2 py-1 border-r border-slate-300 text-xs text-slate-700">{a.doctor}</td>
                    <td className="px-2 py-1 text-center text-xs font-bold tracking-wider">
                       <span className={clsx(
                         a.status === 'Waiting' && "text-orange-600",
                         a.status === 'In Consult' && "text-blue-600",
                         a.status === 'Booked' && "text-slate-600"
                       )}>{a.status}</span>
                    </td>
                 </tr>
               ))}
             </tbody>
          </table>
        </div>

        {/* Pending Lab Requests */}
        <div className="border-2 border-slate-400 bg-white flex flex-col">
          <div className="p-1 border-b-2 border-slate-400 bg-slate-200 flex justify-between items-center">
            <h2 className="text-sm font-bold text-slate-800">Pending Lab Requests</h2>
            <div className="flex gap-1">
              <button className="px-2 py-0.5 text-xs border border-slate-500 bg-white hover:bg-slate-50">Pathology Reports</button>
              <button className="px-2 py-0.5 text-xs border border-primary-800 bg-primary-600 text-white hover:bg-primary-700">Process Batch</button>
            </div>
          </div>
          <table className="min-w-full divide-y divide-slate-300 border-b border-slate-400">
            <thead className="bg-slate-300">
              <tr>
                <th className="px-2 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">Req ID</th>
                <th className="px-2 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">Patient Name</th>
                <th className="px-2 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">Tests</th>
                <th className="px-2 py-1 text-center text-xs font-bold text-slate-800 uppercase">Priority</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
               {pendingLabs.map((l, i) => (
                 <tr key={i} className={clsx("hover:bg-blue-50", l.priority === 'URGENT' && "bg-red-50/30")}>
                    <td className="px-2 py-1 border-r border-slate-300 text-xs font-bold text-primary-700 underline cursor-pointer">{l.id}</td>
                    <td className="px-2 py-1 border-r border-slate-300 text-xs text-slate-900 font-semibold">{l.name}</td>
                    <td className="px-2 py-1 border-r border-slate-300 text-xs text-slate-700">{l.tests}</td>
                    <td className="px-2 py-1 text-center text-xs font-bold tracking-wider">
                       <span className={clsx(
                         l.priority === 'URGENT' ? "text-red-700 uppercase bg-red-200 px-1 border border-red-500" : "text-green-700 uppercase"
                       )}>{l.priority}</span>
                    </td>
                 </tr>
               ))}
             </tbody>
          </table>
        </div>
      </div>

      {/* Footer Status Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-slate-200 border-t-2 border-slate-400 p-1 flex justify-between items-center text-[10px] uppercase font-bold tracking-widest text-slate-600 px-4">
        <div className="flex gap-4">
          <span className="border-r border-slate-400 pr-4">User: Admin (Superuser)</span>
          <span className="border-r border-slate-400 pr-4">Branch: Main Hospital HQ</span>
          <span className="text-primary-700">Database Active (32ms)</span>
        </div>
        <div>
          ElabAssist v4.2.0 | Build 8912
        </div>
      </div>

    </div>
  );
}
