import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Search, Filter, RefreshCw, Loader2 } from 'lucide-react';
import clsx from 'clsx';

const mockAppointments = [
  { id: 'APT-992', time: '10:30 AM', patient: 'John Doe', phone: '9876543210', status: 'Waiting', type: 'Follow-up', notes: 'BP check' },
  { id: 'APT-993', time: '10:45 AM', patient: 'Jane Smith', phone: '9876543211', status: 'In Consult', type: 'New Case', notes: 'Chest pain' },
  { id: 'APT-994', time: '11:00 AM', patient: 'Robert King', phone: '9876543212', status: 'Booked', type: 'Follow-up', notes: 'Diabetes review' },
  { id: 'APT-995', time: '11:15 AM', patient: 'Emma Stone', phone: '9876543213', status: 'Waiting', type: 'New Case', notes: 'Fever' },
  { id: 'APT-996', time: '11:30 AM', patient: 'Michael Brown', phone: '9876543214', status: 'Completed', type: 'Follow-up', notes: 'Routine checkup' },
  { id: 'APT-997', time: '12:00 PM', patient: 'Sarah Wilson', phone: '9876543215', status: 'Cancelled', type: 'New Case', notes: '' },
];

const statusOptions = ['All', 'Waiting', 'In Consult', 'Booked', 'Completed', 'Cancelled'];

export default function AppointmentList() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setAppointments(mockAppointments);
      setLoading(false);
    }, 500);
  }, []);

  const filteredAppointments = appointments.filter((apt) => {
    const matchesStatus = statusFilter === 'All' || apt.status === statusFilter;
    const matchesSearch = apt.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          apt.id.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const getStatusBadge = (status) => {
    const styles = {
      'Waiting': 'bg-orange-100 text-orange-700 border-orange-400',
      'In Consult': 'bg-blue-100 text-blue-700 border-blue-400',
      'Booked': 'bg-slate-100 text-slate-700 border-slate-400',
      'Completed': 'bg-green-100 text-green-700 border-green-400',
      'Cancelled': 'bg-red-100 text-red-700 border-red-400',
    };
    return clsx('px-2 py-0.5 text-xs font-bold uppercase border', styles[status] || styles['Booked']);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 text-primary-600 animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center border-b-2 border-slate-400 pb-2">
        <div className="flex items-center gap-3">
          <Calendar className="w-5 h-5 text-slate-600" />
          <h1 className="text-lg font-bold text-slate-800 uppercase tracking-wide">Appointments</h1>
          <span className="text-xs text-slate-500">({filteredAppointments.length} records)</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 items-center">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by name or ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-2 border-2 border-slate-400 text-sm focus:border-primary-600 focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-slate-500" />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border-2 border-slate-400 px-3 py-2 text-sm focus:border-primary-600 focus:outline-none bg-white"
          >
            {statusOptions.map((status) => (
              <option key={status} value={status}>{status}</option>
            ))}
          </select>
        </div>

        <button className="flex items-center gap-2 px-3 py-2 border-2 border-slate-400 text-sm hover:bg-slate-100">
          <RefreshCw className="w-4 h-4" />
          Refresh
        </button>
      </div>

      <div className="border-2 border-slate-400 bg-white">
        <table className="w-full">
          <thead className="bg-slate-300">
            <tr>
              <th className="px-3 py-2 text-left text-xs font-bold text-slate-800 uppercase">Appt ID</th>
              <th className="px-3 py-2 text-left text-xs font-bold text-slate-800 uppercase">Time</th>
              <th className="px-3 py-2 text-left text-xs font-bold text-slate-800 uppercase">Patient</th>
              <th className="px-3 py-2 text-left text-xs font-bold text-slate-800 uppercase">Phone</th>
              <th className="px-3 py-2 text-left text-xs font-bold text-slate-800 uppercase">Type</th>
              <th className="px-3 py-2 text-left text-xs font-bold text-slate-800 uppercase">Status</th>
              <th className="px-3 py-2 text-left text-xs font-bold text-slate-800 uppercase">Notes</th>
              <th className="px-3 py-2 text-center text-xs font-bold text-slate-800 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {filteredAppointments.map((apt) => (
              <tr key={apt.id} className="hover:bg-blue-50">
                <td className="px-3 py-2 text-xs font-bold text-primary-700">{apt.id}</td>
                <td className="px-3 py-2 text-xs text-slate-600">{apt.time}</td>
                <td className="px-3 py-2 text-xs text-slate-900 font-semibold">{apt.patient}</td>
                <td className="px-3 py-2 text-xs text-slate-600">{apt.phone}</td>
                <td className="px-3 py-2 text-xs text-slate-600">{apt.type}</td>
                <td className="px-3 py-2">{getStatusBadge(apt.status)}</td>
                <td className="px-3 py-2 text-xs text-slate-500">{apt.notes || '-'}</td>
                <td className="px-3 py-2">
                  <div className="flex gap-1 justify-center">
                    <button
                      onClick={() => navigate(`/doctor/patient/${apt.id}`)}
                      className="px-2 py-1 text-xs bg-primary-600 text-white hover:bg-primary-700 font-semibold"
                    >
                      Open Profile
                    </button>
                    {apt.status === 'Waiting' && (
                      <button className="px-2 py-1 text-xs bg-green-600 text-white hover:bg-green-700 font-semibold">
                        Start Consult
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center text-xs text-slate-500">
        <span>Showing {filteredAppointments.length} of {appointments.length} appointments</span>
        <div className="flex gap-1">
          <button className="px-2 py-1 border border-slate-400 hover:bg-slate-100" disabled>Previous</button>
          <button className="px-2 py-1 border border-slate-400 hover:bg-slate-100">1</button>
          <button className="px-2 py-1 border border-slate-400 hover:bg-slate-100" disabled>Next</button>
        </div>
      </div>
    </div>
  );
}
