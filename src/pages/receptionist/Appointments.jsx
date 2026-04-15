import { useState } from 'react';
import { Search, Plus, Calendar, Clock, User } from 'lucide-react';
import clsx from 'clsx';

const mockAppointments = [
  { id: 'APT-990', patient: 'John Doe', phone: '9876543210', doctor: 'Dr. James Anderson', time: '10:00 AM', date: '15-04-2026', status: 'Completed', type: 'Follow-up' },
  { id: 'APT-991', patient: 'Jane Smith', phone: '9876543211', doctor: 'Dr. Michael Brown', time: '10:30 AM', date: '15-04-2026', status: 'In Progress', type: 'New' },
  { id: 'APT-992', patient: 'Bob Wilson', phone: '9876543212', doctor: 'Dr. James Anderson', time: '11:00 AM', date: '15-04-2026', status: 'Waiting', type: 'New' },
  { id: 'APT-993', patient: 'Alice Brown', phone: '9876543213', doctor: 'Dr. Michael Brown', time: '11:30 AM', date: '15-04-2026', status: 'Booked', type: 'Follow-up' },
  { id: 'APT-994', patient: 'Robert King', phone: '9876543214', doctor: 'Dr. James Anderson', time: '12:00 PM', date: '15-04-2026', status: 'Booked', type: 'New' },
  { id: 'APT-995', patient: 'Mary Johnson', phone: '9876543215', doctor: 'Dr. Michael Brown', time: '12:30 PM', date: '15-04-2026', status: 'Booked', type: 'Follow-up' },
  { id: 'APT-996', patient: 'David Lee', phone: '9876543216', doctor: 'Dr. James Anderson', time: '02:00 PM', date: '15-04-2026', status: 'Booked', type: 'New' },
  { id: 'APT-997', patient: 'Emma Wilson', phone: '9876543217', doctor: 'Dr. Michael Brown', time: '02:30 PM', date: '15-04-2026', status: 'Cancelled', type: 'New' },
];

const doctors = ['All', 'Dr. James Anderson', 'Dr. Michael Brown'];
const statuses = ['all', 'booked', 'waiting', 'inprogress', 'completed', 'cancelled'];

export default function ReceptionistAppointments() {
  const [filterDoctor, setFilterDoctor] = useState('All');
  const [filterStatus, setFilterStatus] = useState('all');
  const [search, setSearch] = useState('');

  const filteredAppts = mockAppointments.filter(apt => {
    const matchDoctor = filterDoctor === 'All' || apt.doctor === filterDoctor;
    const matchStatus = filterStatus === 'all' || apt.status.toLowerCase().replace(' ', '') === filterStatus;
    const matchSearch = apt.patient.toLowerCase().includes(search.toLowerCase()) || 
                   apt.phone.includes(search) ||
                   apt.id.toLowerCase().includes(search.toLowerCase());
    return matchDoctor && matchStatus && matchSearch;
  });

  return (
    <div className="max-w-full space-y-2 flex flex-col min-h-screen pb-10">
      <div className="flex justify-between items-center border-b-2 border-slate-400 pb-1 mb-2 bg-slate-200 p-2 border-2 rounded-none">
        <h1 className="text-lg font-bold text-slate-800 tracking-wide uppercase">Appointments</h1>
        <div className="flex items-center gap-2">
          <button className="bg-primary-600 text-white px-3 py-1 text-xs font-bold hover:bg-primary-700 flex items-center gap-1">
            <Plus className="w-3 h-3" /> New Appointment
          </button>
          <div className="relative border border-slate-500 bg-white w-48">
            <Search className="h-3 w-3 text-slate-400 absolute left-2 top-1.5" />
            <input 
              type="text" 
              placeholder="Search patient/phone..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-6 pr-1 py-0.5 text-xs focus:ring-0 border-none outline-none" 
            />
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        <select 
          value={filterDoctor}
          onChange={(e) => setFilterDoctor(e.target.value)}
          className="text-xs border border-slate-500 bg-white px-2 py-1"
        >
          {doctors.map(doc => (
            <option key={doc} value={doc}>{doc}</option>
          ))}
        </select>
        <select 
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="text-xs border border-slate-500 bg-white px-2 py-1"
        >
          {statuses.map(status => (
            <option key={status} value={status}>
              {status === 'all' ? 'All Status' : status.charAt(0).toUpperCase() + status.slice(1).replace('inprogress', 'In Progress').replace('booked', 'Booked')}
            </option>
          ))}
        </select>
      </div>

      <div className="border-2 border-slate-400 bg-white flex flex-col">
        <table className="min-w-full divide-y divide-slate-300">
          <thead className="bg-slate-300">
            <tr>
              <th className="px-2 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">APT ID</th>
              <th className="px-2 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">Patient</th>
              <th className="px-2 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">Phone</th>
              <th className="px-2 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">Doctor</th>
              <th className="px-2 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">Time</th>
              <th className="px-2 py-1 border-r border-slate-400 text-center text-xs font-bold text-slate-800 uppercase">Type</th>
              <th className="px-2 py-1 text-center text-xs font-bold text-slate-800 uppercase">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {filteredAppts.map((apt) => (
              <tr key={apt.id} className="hover:bg-blue-50">
                <td className="px-2 py-1 border-r border-slate-300 text-xs font-bold text-primary-700">{apt.id}</td>
                <td className="px-2 py-1 border-r border-slate-300 text-xs font-semibold">{apt.patient}</td>
                <td className="px-2 py-1 border-r border-slate-300 text-xs text-slate-600">{apt.phone}</td>
                <td className="px-2 py-1 border-r border-slate-300 text-xs text-slate-700">{apt.doctor}</td>
                <td className="px-2 py-1 border-r border-slate-300 text-xs text-slate-600">{apt.time}</td>
                <td className="px-2 py-1 border-r border-slate-300 text-center text-xs">
                  <span className={apt.type === 'New' ? 'bg-blue-200 text-blue-700 px-1' : 'bg-slate-200 text-slate-600 px-1'}>
                    {apt.type}
                  </span>
                </td>
                <td className="px-2 py-1 text-center">
                  <span className={clsx(
                    "px-1 py-0.5 text-xs font-bold",
                    apt.status === 'Completed' && 'bg-green-200 text-green-700',
                    apt.status === 'Waiting' && 'bg-orange-200 text-orange-700',
                    apt.status === 'In Progress' && 'bg-blue-200 text-blue-700',
                    apt.status === 'Cancelled' && 'bg-red-200 text-red-700',
                    apt.status === 'Booked' && 'bg-slate-200 text-slate-600'
                  )}>
                    {apt.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredAppts.length === 0 && (
          <div className="p-8 text-center text-slate-500">No appointments found</div>
        )}
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-slate-200 border-t-2 border-slate-400 p-1 flex justify-between items-center text-[10px] uppercase font-bold tracking-widest text-slate-600 px-4">
        <span>Total: {filteredAppts.length} appointments</span>
        <span>ElabAssist v4.2.0 | Build 8912</span>
      </div>
    </div>
  );
}