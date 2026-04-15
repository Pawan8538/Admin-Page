import { Users, Calendar, Activity, FlaskConical, Clock, TrendingUp, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';

// eslint-disable-next-line no-unused-vars
const StatCard = ({ title, value, subtitle, icon: Icon, color, onClick }) => (
  <div
    className={clsx(
      "bg-white border-2 border-slate-400 p-4 cursor-pointer hover:shadow-md transition-shadow",
      onClick && "hover:border-primary-500"
    )}
    onClick={onClick}
  >
    <div className="flex items-start justify-between">
      <div>
        <p className="text-xs font-bold text-slate-600 uppercase">{title}</p>
        <p className="text-2xl font-bold text-slate-900 mt-1">{value}</p>
        {subtitle && <p className="text-xs text-slate-500 mt-1">{subtitle}</p>}
      </div>
      <div className={clsx("p-2", color)}>
        <Icon className="w-5 h-5" />
      </div>
    </div>
  </div>
);

const recentAppts = [
  { id: 'APT-992', time: '10:30 AM', patient: 'John Doe', status: 'Waiting', type: 'Follow-up' },
  { id: 'APT-993', time: '10:45 AM', patient: 'Jane Smith', status: 'In Consult', type: 'New Case' },
  { id: 'APT-994', time: '11:00 AM', patient: 'Robert King', status: 'Booked', type: 'Follow-up' },
  { id: 'APT-995', time: '11:15 AM', patient: 'Emma Stone', status: 'Waiting', type: 'New Case' },
];

const pendingLabResults = [
  { id: 'REQ-8012', patient: 'Alice Wong', tests: 'CBC, LFT', priority: 'URGENT' },
  { id: 'REQ-8013', patient: 'Tom Hardy', tests: 'KFT, Lipid Profile', priority: 'Routine' },
  { id: 'REQ-8014', patient: 'Emma Stone', tests: 'Thyroid Panel', priority: 'Routine' },
];

export default function DoctorDashboard() {
  const navigate = useNavigate();

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center border-b-2 border-slate-400 pb-2">
        <h1 className="text-lg font-bold text-slate-800 uppercase tracking-wide">Doctor Dashboard</h1>
        <span className="text-xs font-semibold text-slate-600 bg-white border border-slate-400 px-2 py-1">
          {new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        <StatCard
          title="Total Patients"
          value="120"
          subtitle="+12 this week"
          icon={Users}
          color="bg-blue-100 text-blue-700"
          onClick={() => navigate('/doctor/appointments')}
        />
        <StatCard
          title="Today's Appointments"
          value="18"
          subtitle="4 pending"
          icon={Calendar}
          color="bg-purple-100 text-purple-700"
          onClick={() => navigate('/doctor/appointments')}
        />
        <StatCard
          title="Active Cases"
          value="32"
          subtitle="5 critical"
          icon={Activity}
          color="bg-orange-100 text-orange-700"
        />
        <StatCard
          title="Lab Requests"
          value="10"
          subtitle="3 pending results"
          icon={FlaskConical}
          color="bg-green-100 text-green-700"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="border-2 border-slate-400 bg-white">
          <div className="bg-slate-200 border-b-2 border-slate-400 p-2 flex justify-between items-center">
            <h2 className="text-sm font-bold text-slate-800">Today's Appointments</h2>
            <button
              onClick={() => navigate('/doctor/appointments')}
              className="px-2 py-1 text-xs border border-primary-800 bg-primary-600 text-white hover:bg-primary-700"
            >
              View All
            </button>
          </div>
          <table className="w-full">
            <thead className="bg-slate-300">
              <tr>
                <th className="px-2 py-1 text-left text-xs font-bold text-slate-800 uppercase">ID</th>
                <th className="px-2 py-1 text-left text-xs font-bold text-slate-800 uppercase">Time</th>
                <th className="px-2 py-1 text-left text-xs font-bold text-slate-800 uppercase">Patient</th>
                <th className="px-2 py-1 text-left text-xs font-bold text-slate-800 uppercase">Status</th>
                <th className="px-2 py-1 text-left text-xs font-bold text-slate-800 uppercase">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {recentAppts.map((a) => (
                <tr key={a.id} className="hover:bg-blue-50">
                  <td className="px-2 py-2 text-xs font-bold text-primary-700">{a.id}</td>
                  <td className="px-2 py-2 text-xs text-slate-600">{a.time}</td>
                  <td className="px-2 py-2 text-xs text-slate-900">{a.patient}</td>
                  <td className="px-2 py-2 text-xs font-bold">
                    <span className={clsx(
                      a.status === 'Waiting' && "text-orange-600",
                      a.status === 'In Consult' && "text-blue-600",
                      a.status === 'Booked' && "text-slate-600"
                    )}>{a.status}</span>
                  </td>
                  <td className="px-2 py-2">
                    <button
                      onClick={() => navigate(`/doctor/patient/1`)}
                      className="text-xs text-primary-600 hover:text-primary-800 font-semibold"
                    >
                      Open Profile
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="border-2 border-slate-400 bg-white">
          <div className="bg-slate-200 border-b-2 border-slate-400 p-2 flex justify-between items-center">
            <h2 className="text-sm font-bold text-slate-800">Pending Lab Results</h2>
          </div>
          <table className="w-full">
            <thead className="bg-slate-300">
              <tr>
                <th className="px-2 py-1 text-left text-xs font-bold text-slate-800 uppercase">Req ID</th>
                <th className="px-2 py-1 text-left text-xs font-bold text-slate-800 uppercase">Patient</th>
                <th className="px-2 py-1 text-left text-xs font-bold text-slate-800 uppercase">Tests</th>
                <th className="px-2 py-1 text-left text-xs font-bold text-slate-800 uppercase">Priority</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {pendingLabResults.map((l) => (
                <tr key={l.id} className={clsx("hover:bg-blue-50", l.priority === 'URGENT' && "bg-red-50/30")}>
                  <td className="px-2 py-2 text-xs font-bold text-primary-700">{l.id}</td>
                  <td className="px-2 py-2 text-xs text-slate-900 font-semibold">{l.patient}</td>
                  <td className="px-2 py-2 text-xs text-slate-600">{l.tests}</td>
                  <td className="px-2 py-2 text-xs font-bold">
                    <span className={clsx(
                      l.priority === 'URGENT'
                        ? "text-red-700 bg-red-200 px-1 border border-red-500 uppercase"
                        : "text-green-700 uppercase"
                    )}>{l.priority}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="border-2 border-slate-400 bg-white p-4">
          <div className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
            <Clock className="w-4 h-4 text-slate-500" />
            Quick Stats
          </div>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between"><span className="text-slate-600">Avg. Consultation Time</span><span className="font-bold">15 min</span></div>
            <div className="flex justify-between"><span className="text-slate-600">Patients This Week</span><span className="font-bold">87</span></div>
            <div className="flex justify-between"><span className="text-slate-600">Prescriptions Today</span><span className="font-bold">12</span></div>
          </div>
        </div>
        <div className="border-2 border-slate-400 bg-white p-4">
          <div className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
            <TrendingUp className="w-4 h-4 text-slate-500" />
            Performance
          </div>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between"><span className="text-slate-600">Completion Rate</span><span className="font-bold text-green-600">94%</span></div>
            <div className="flex justify-between"><span className="text-slate-600">Patient Satisfaction</span><span className="font-bold text-green-600">4.8/5</span></div>
            <div className="flex justify-between"><span className="text-slate-600">On-time Arrival</span><span className="font-bold text-green-600">89%</span></div>
          </div>
        </div>
        <div className="border-2 border-slate-400 bg-white p-4">
          <div className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
            <AlertCircle className="w-4 h-4 text-slate-500" />
            Alerts
          </div>
          <div className="space-y-2 text-xs">
            <div className="text-red-600 font-semibold">2 lab results require immediate review</div>
            <div className="text-orange-600 font-semibold">3 patients missing follow-up</div>
            <div className="text-slate-600">1 prescription pending approval</div>
          </div>
        </div>
      </div>
    </div>
  );
}
