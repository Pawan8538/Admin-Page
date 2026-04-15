import { Link } from 'react-router-dom';
import { Calendar, Users, UserCircle, Briefcase, Clock } from 'lucide-react';

const mockStats = {
  totalPatients: 1245,
  doctors: 8,
  employees: 42,
  todayAppts: 24,
};

const mockAppointments = [
  { id: 'APT-990', time: '10:00 AM', patient: 'John Doe', doctor: 'Dr. James Anderson', status: 'Completed' },
  { id: 'APT-991', time: '10:30 AM', patient: 'Jane Smith', doctor: 'Dr. Michael Brown', status: 'In Progress' },
  { id: 'APT-992', time: '11:00 AM', patient: 'Bob Wilson', doctor: 'Dr. James Anderson', status: 'Waiting' },
  { id: 'APT-993', time: '11:30 AM', patient: 'Alice Brown', doctor: 'Dr. Michael Brown', status: 'Booked' },
];

export default function ReceptionistDashboard() {
  return (
    <div className="max-w-full space-y-2 flex flex-col min-h-screen pb-10">
      <div className="flex justify-between items-center border-b-2 border-slate-400 pb-1 mb-2 bg-slate-200 p-2 border-2 rounded-none">
        <h1 className="text-lg font-bold text-slate-800 tracking-wide uppercase">Receptionist Dashboard</h1>
        <span className="text-xs font-semibold text-slate-600 bg-white border border-slate-400 px-2 py-0.5">
          {new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).replace(/ /g, '-').toUpperCase()}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
        <div className="bg-white border-2 border-slate-400 p-2 flex items-center gap-3">
          <div className="bg-blue-100 border border-blue-400 p-2"><Users className="w-5 h-5 text-blue-700"/></div>
          <div>
            <div className="text-xs font-bold text-slate-600 uppercase">Patients</div>
            <div className="text-lg font-bold text-slate-900 leading-tight">{mockStats.totalPatients}</div>
          </div>
        </div>
        <div className="bg-white border-2 border-slate-400 p-2 flex items-center gap-3">
          <div className="bg-green-100 border border-green-400 p-2"><UserCircle className="w-5 h-5 text-green-700"/></div>
          <div>
            <div className="text-xs font-bold text-slate-600 uppercase">Doctors</div>
            <div className="text-lg font-bold text-slate-900 leading-tight">{mockStats.doctors}</div>
          </div>
        </div>
        <div className="bg-white border-2 border-slate-400 p-2 flex items-center gap-3">
          <div className="bg-purple-100 border border-purple-400 p-2"><Briefcase className="w-5 h-5 text-purple-700"/></div>
          <div>
            <div className="text-xs font-bold text-slate-600 uppercase">Employees</div>
            <div className="text-lg font-bold text-slate-900 leading-tight">{mockStats.employees}</div>
          </div>
        </div>
        <div className="bg-white border-2 border-slate-400 p-2 flex items-center gap-3">
          <div className="bg-orange-100 border border-orange-400 p-2"><Clock className="w-5 h-5 text-orange-700"/></div>
          <div>
            <div className="text-xs font-bold text-slate-600 uppercase">Today's Appointments</div>
            <div className="text-lg font-bold text-slate-900 leading-tight">{mockStats.todayAppts}</div>
          </div>
        </div>
      </div>

      <div className="flex gap-2 mt-2">
        <Link 
          to="/receptionist/patients/create" 
          className="bg-primary-600 text-white px-4 py-2 text-sm font-bold hover:bg-primary-700"
        >
          + New Patient
        </Link>
        <Link 
          to="/receptionist/billing/add" 
          className="bg-green-600 text-white px-4 py-2 text-sm font-bold hover:bg-green-700"
        >
          + Create Test Bill
        </Link>
        <Link 
          to="/receptionist/appointments" 
          className="bg-slate-600 text-white px-4 py-2 text-sm font-bold hover:bg-slate-700"
        >
          View Appointments
        </Link>
      </div>

      <div className="border-2 border-slate-400 bg-white flex flex-col mt-2">
        <div className="p-1 border-b-2 border-slate-400 bg-slate-200 flex justify-between items-center">
          <h2 className="text-sm font-bold text-slate-800">Today's Appointments</h2>
        </div>
        <table className="min-w-full divide-y divide-slate-300 border-b border-slate-400">
          <thead className="bg-slate-300">
            <tr>
              <th className="px-2 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">APT ID</th>
              <th className="px-2 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">Time</th>
              <th className="px-2 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">Patient</th>
              <th className="px-2 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">Doctor</th>
              <th className="px-2 py-1 text-center text-xs font-bold text-slate-800 uppercase">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {mockAppointments.map((apt) => (
              <tr key={apt.id} className="hover:bg-blue-50">
                <td className="px-2 py-1 border-r border-slate-300 text-xs font-bold text-primary-700">{apt.id}</td>
                <td className="px-2 py-1 border-r border-slate-300 text-xs font-semibold">{apt.time}</td>
                <td className="px-2 py-1 border-r border-slate-300 text-xs text-slate-900">{apt.patient}</td>
                <td className="px-2 py-1 border-r border-slate-300 text-xs text-slate-700">{apt.doctor}</td>
                <td className="px-2 py-1 text-center text-xs font-bold">
                  <span className={`px-1 py-0.5 ${
                    apt.status === 'Completed' ? 'bg-green-200 text-green-700' :
                    apt.status === 'Waiting' ? 'bg-orange-200 text-orange-700' :
                    apt.status === 'In Progress' ? 'bg-blue-200 text-blue-700' :
                    'bg-slate-200 text-slate-600'
                  }`}>
                    {apt.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-slate-200 border-t-2 border-slate-400 p-1 flex justify-between items-center text-[10px] uppercase font-bold tracking-widest text-slate-600 px-4">
        <div className="flex gap-4">
          <span className="border-r border-slate-400 pr-4">User: Receptionist</span>
          <span>Branch: Main Hospital HQ</span>
        </div>
        <div>ElabAssist v4.2.0 | Build 8912</div>
      </div>
    </div>
  );
}