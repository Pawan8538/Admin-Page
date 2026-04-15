import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, AlertTriangle, Clock } from 'lucide-react';
import clsx from 'clsx';

const mockRequests = [
  { id: 'REQ-8001', patient: 'John Doe', age: 45, gender: 'M', test: 'CBC, LFT', doctor: 'Dr. Sarah Connor', priority: 'URGENT', time: '10:30 AM', date: '15-04-2026', status: 'Pending' },
  { id: 'REQ-8002', patient: 'Jane Smith', age: 32, gender: 'F', test: 'Thyroid Panel', doctor: 'Dr. John Watson', priority: 'Routine', time: '11:00 AM', date: '15-04-2026', status: 'Pending' },
  { id: 'REQ-8003', patient: 'Bob Wilson', age: 58, gender: 'M', test: 'KFT, Lipid Profile', doctor: 'Dr. Sarah Connor', priority: 'Routine', time: '11:15 AM', date: '15-04-2026', status: 'Processing' },
  { id: 'REQ-8004', patient: 'Alice Brown', age: 28, gender: 'F', test: 'HbA1c', doctor: 'Dr. John Watson', priority: 'URGENT', time: '11:30 AM', date: '15-04-2026', status: 'Pending' },
  { id: 'REQ-8005', patient: 'Robert King', age: 62, gender: 'M', test: 'Liver Function Test', doctor: 'Dr. Sarah Connor', priority: 'Routine', time: '09:00 AM', date: '15-04-2026', status: 'Completed' },
  { id: 'REQ-8006', patient: 'Mary Johnson', age: 55, gender: 'F', test: 'CBC, ESR', doctor: 'Dr. John Watson', priority: 'Routine', time: '09:15 AM', date: '15-04-2026', status: 'Completed' },
];

export default function LabRequests() {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const filteredRequests = mockRequests.filter(req => {
    const matchFilter = filter === 'all' || req.status.toLowerCase() === filter;
    const matchSearch = req.patient.toLowerCase().includes(search.toLowerCase()) || 
                       req.id.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  return (
    <div className="max-w-full space-y-2 flex flex-col min-h-screen pb-10">
      <div className="flex justify-between items-center border-b-2 border-slate-400 pb-1 mb-2 bg-slate-200 p-2 border-2 rounded-none">
        <h1 className="text-lg font-bold text-slate-800 tracking-wide uppercase">Investigation - Pending Requests</h1>
        <div className="flex items-center gap-2">
          <div className="relative border border-slate-500 bg-white w-48">
            <Search className="h-3 w-3 text-slate-400 absolute left-2 top-1.5" />
            <input 
              type="text" 
              placeholder="Search by Patient/ID..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-6 pr-1 py-0.5 text-xs focus:ring-0 border-none outline-none" 
            />
          </div>
          <select 
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="text-xs border border-slate-500 bg-white px-2 py-0.5"
          >
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="processing">Processing</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>

      <div className="border-2 border-slate-400 bg-white flex flex-col">
        <table className="min-w-full divide-y divide-slate-300">
          <thead className="bg-slate-300">
            <tr>
              <th className="px-2 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">Req ID</th>
              <th className="px-2 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">Patient</th>
              <th className="px-2 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">Age/Gender</th>
              <th className="px-2 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">Tests</th>
              <th className="px-2 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">Doctor</th>
              <th className="px-2 py-1 border-r border-slate-400 text-center text-xs font-bold text-slate-800 uppercase">Priority</th>
              <th className="px-2 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">Time</th>
              <th className="px-2 py-1 text-center text-xs font-bold text-slate-800 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {filteredRequests.map((req) => (
              <tr key={req.id} className={clsx("hover:bg-blue-50", req.priority === 'URGENT' && "bg-red-50/30")}>
                <td className="px-2 py-1 border-r border-slate-300 text-xs font-bold text-primary-700">{req.id}</td>
                <td className="px-2 py-1 border-r border-slate-300 text-xs font-semibold">{req.patient}</td>
                <td className="px-2 py-1 border-r border-slate-300 text-xs text-slate-700">{req.age}/{req.gender}</td>
                <td className="px-2 py-1 border-r border-slate-300 text-xs text-slate-700">{req.test}</td>
                <td className="px-2 py-1 border-r border-slate-300 text-xs text-slate-600">{req.doctor}</td>
                <td className="px-2 py-1 border-r border-slate-300 text-center">
                  <span className={clsx(
                    "px-1 py-0.5 text-xs font-bold",
                    req.priority === 'URGENT' ? 'bg-red-200 text-red-700 border border-red-500' : 'bg-slate-200 text-slate-600'
                  )}>
                    {req.priority}
                  </span>
                </td>
                <td className="px-2 py-1 border-r border-slate-300 text-xs text-slate-600">{req.time}</td>
                <td className="px-2 py-1 text-center">
                  {req.status === 'Completed' ? (
                    <span className="text-xs text-green-600 font-bold">Done</span>
                  ) : (
                    <Link 
                      to={`/laboratorist/investigation/create?request=${req.id}`}
                      className="text-xs bg-primary-600 text-white px-2 py-0.5 hover:bg-primary-700"
                    >
                      Process
                    </Link>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredRequests.length === 0 && (
          <div className="p-8 text-center text-slate-500">No requests found</div>
        )}
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-slate-200 border-t-2 border-slate-400 p-1 flex justify-between items-center text-[10px] uppercase font-bold tracking-widest text-slate-600 px-4">
        <span>Total: {filteredRequests.length} requests</span>
        <span>ElabAssist v4.2.0 | Build 8912</span>
      </div>
    </div>
  );
}