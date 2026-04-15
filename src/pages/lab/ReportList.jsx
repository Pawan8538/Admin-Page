import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, FileText, CheckCircle, Clock, AlertTriangle } from 'lucide-react';
import clsx from 'clsx';

const mockReports = [
  { id: 'REP-7001', patient: 'John Doe', test: 'CBC', date: '15-04-2026', time: '10:30 AM', status: 'Pending Approval', priority: 'URGENT' },
  { id: 'REP-7002', patient: 'Jane Smith', test: 'LFT', date: '15-04-2026', time: '11:00 AM', status: 'Approved', priority: 'Routine' },
  { id: 'REP-7003', patient: 'Bob Wilson', test: 'KFT', date: '14-04-2026', time: '03:30 PM', status: 'Approved', priority: 'Routine' },
  { id: 'REP-7004', patient: 'Alice Brown', test: 'Thyroid', date: '14-04-2026', time: '02:00 PM', status: 'Rejected', priority: 'Routine' },
  { id: 'REP-7005', patient: 'Robert King', test: 'CBC, LFT', date: '13-04-2026', time: '11:15 AM', status: 'Approved', priority: 'URGENT' },
];

export default function LabReportList() {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const filteredReports = mockReports.filter(report => {
    const matchFilter = filter === 'all' || report.status.toLowerCase().replace(' ', '') === filter;
    const matchSearch = report.patient.toLowerCase().includes(search.toLowerCase()) || 
                       report.id.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  const getStatusIcon = (status) => {
    if (status === 'Approved') return <CheckCircle className="w-4 h-4 text-green-600" />;
    if (status === 'Rejected') return <AlertTriangle className="w-4 h-4 text-red-600" />;
    return <Clock className="w-4 h-4 text-orange-600" />;
  };

  return (
    <div className="max-w-full space-y-2 flex flex-col min-h-screen pb-10">
      <div className="flex justify-between items-center border-b-2 border-slate-400 pb-1 mb-2 bg-slate-200 p-2 border-2 rounded-none">
        <h1 className="text-lg font-bold text-slate-800 tracking-wide uppercase">My Lab Reports</h1>
        <div className="flex items-center gap-2">
          <Link 
            to="/laboratorist/investigation/create"
            className="bg-primary-600 text-white px-3 py-1 text-xs font-bold hover:bg-primary-700"
          >
            + New Report
          </Link>
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
            <option value="pendingapproval">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>
      </div>

      <div className="border-2 border-slate-400 bg-white flex flex-col">
        <table className="min-w-full divide-y divide-slate-300">
          <thead className="bg-slate-300">
            <tr>
              <th className="px-2 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">Report ID</th>
              <th className="px-2 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">Patient</th>
              <th className="px-2 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">Test</th>
              <th className="px-2 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">Date</th>
              <th className="px-2 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">Time</th>
              <th className="px-2 py-1 border-r border-slate-400 text-center text-xs font-bold text-slate-800 uppercase">Priority</th>
              <th className="px-2 py-1 text-center text-xs font-bold text-slate-800 uppercase">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {filteredReports.map((report) => (
              <tr key={report.id} className="hover:bg-blue-50">
                <td className="px-2 py-1 border-r border-slate-300 text-xs font-bold text-primary-700">{report.id}</td>
                <td className="px-2 py-1 border-r border-slate-300 text-xs font-semibold">{report.patient}</td>
                <td className="px-2 py-1 border-r border-slate-300 text-xs text-slate-700">{report.test}</td>
                <td className="px-2 py-1 border-r border-slate-300 text-xs text-slate-600">{report.date}</td>
                <td className="px-2 py-1 border-r border-slate-300 text-xs text-slate-600">{report.time}</td>
                <td className="px-2 py-1 border-r border-slate-300 text-center">
                  <span className={clsx(
                    "px-1 py-0.5 text-xs font-bold",
                    report.priority === 'URGENT' ? 'bg-red-200 text-red-700 border border-red-500' : 'bg-slate-200 text-slate-600'
                  )}>
                    {report.priority}
                  </span>
                </td>
                <td className="px-2 py-1 text-center">
                  <div className="flex items-center justify-center gap-1">
                    {getStatusIcon(report.status)}
                    <span className={clsx(
                      "text-xs font-bold",
                      report.status === 'Approved' && 'text-green-600',
                      report.status === 'Rejected' && 'text-red-600',
                      report.status === 'Pending Approval' && 'text-orange-600'
                    )}>
                      {report.status}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredReports.length === 0 && (
          <div className="p-8 text-center text-slate-500">No reports found</div>
        )}
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-slate-200 border-t-2 border-slate-400 p-1 flex justify-between items-center text-[10px] uppercase font-bold tracking-widest text-slate-600 px-4">
        <span>Total: {filteredReports.length} reports</span>
        <span>ElabAssist v4.2.0 | Build 8912</span>
      </div>
    </div>
  );
}