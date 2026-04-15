import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { User, Phone, Mail, Calendar, Activity, FileText, FlaskConical, ArrowLeft, Loader2, Clock } from 'lucide-react';
import clsx from 'clsx';

const mockPatient = {
  id: 'PAT-001',
  name: 'John Doe',
  age: 45,
  gender: 'Male',
  phone: '9876543210',
  email: 'john.doe@email.com',
  bloodGroup: 'B+',
  allergies: 'Penicillin',
  history: 'Type 2 Diabetes (5 years), Hypertension',
  medications: 'Metformin 500mg, Amlodipine 5mg',
  vitals: { bp: '130/85', heartRate: 78, temp: '98.6°F', weight: '75kg' },
  prescriptions: [
    { id: 'RX-001', date: '2024-01-15', diagnosis: 'Diabetes Follow-up', doctor: 'Dr. Smith' },
    { id: 'RX-002', date: '2024-01-08', diagnosis: 'Cold & Fever', doctor: 'Dr. Smith' },
  ],
  labResults: [
    { id: 'LB-001', test: 'CBC', date: '2024-01-10', status: 'Normal', values: 'Hb: 14.2, WBC: 7200' },
    { id: 'LB-002', test: 'LFT', date: '2024-01-10', status: 'Normal', values: 'SGPT: 32, SGOT: 28' },
  ]
};

export default function PatientProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [patient, setPatient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    setTimeout(() => {
      setPatient(mockPatient);
      setLoading(false);
    }, 500);
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 text-primary-600 animate-spin" />
      </div>
    );
  }

  if (!patient) {
    return <div className="text-center py-10">Patient not found</div>;
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'history', label: 'Medical History', icon: FileText },
    { id: 'prescriptions', label: 'Prescriptions', icon: FileText },
    { id: 'lab', label: 'Lab Results', icon: FlaskConical },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <button onClick={() => navigate('/doctor/appointments')} className="p-2 hover:bg-slate-200">
          <ArrowLeft className="w-5 h-5 text-slate-600" />
        </button>
        <h1 className="text-lg font-bold text-slate-800 uppercase">Patient Profile</h1>
        <span className="text-xs text-slate-500">({patient.id})</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="border-2 border-slate-400 bg-white">
          <div className="bg-slate-200 border-b-2 border-slate-400 p-3">
            <h2 className="text-sm font-bold text-slate-800">Patient Information</h2>
          </div>
          <div className="p-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary-100 p-3">
                <User className="w-8 h-8 text-primary-700" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">{patient.name}</h3>
                <p className="text-xs text-slate-500">{patient.age} years, {patient.gender}</p>
              </div>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-slate-600">
                <Phone className="w-4 h-4" />
                <span>{patient.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Mail className="w-4 h-4" />
                <span>{patient.email}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Activity className="w-4 h-4" />
                <span>Blood Group: {patient.bloodGroup}</span>
              </div>
            </div>

            <div className="border-t-2 border-slate-300 pt-3">
              <h4 className="text-xs font-bold text-slate-700 uppercase mb-2">Quick Actions</h4>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => navigate(`/doctor/prescription/${patient.id}`)}
                  className="flex items-center gap-2 px-3 py-2 bg-primary-600 text-white text-sm hover:bg-primary-700"
                >
                  <FileText className="w-4 h-4" />
                  Write Prescription
                </button>
                <button
                  onClick={() => navigate(`/doctor/lab-request/${patient.id}`)}
                  className="flex items-center gap-2 px-3 py-2 bg-green-600 text-white text-sm hover:bg-green-700"
                >
                  <FlaskConical className="w-4 h-4" />
                  Lab Request
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 border-2 border-slate-400 bg-white">
          <div className="bg-slate-200 border-b-2 border-slate-400">
            <div className="flex">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={clsx(
                    "flex items-center gap-2 px-4 py-2 text-sm font-semibold border-r border-slate-400",
                    activeTab === tab.id
                      ? "bg-white text-primary-700"
                      : "text-slate-600 hover:bg-slate-100"
                  )}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="p-4">
            {activeTab === 'overview' && (
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-bold text-slate-700 uppercase mb-2">Current Vitals</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="bg-slate-50 p-3 border border-slate-300">
                      <p className="text-xs text-slate-500">Blood Pressure</p>
                      <p className="font-bold text-slate-900">{patient.vitals.bp}</p>
                    </div>
                    <div className="bg-slate-50 p-3 border border-slate-300">
                      <p className="text-xs text-slate-500">Heart Rate</p>
                      <p className="font-bold text-slate-900">{patient.vitals.heartRate} bpm</p>
                    </div>
                    <div className="bg-slate-50 p-3 border border-slate-300">
                      <p className="text-xs text-slate-500">Temperature</p>
                      <p className="font-bold text-slate-900">{patient.vitals.temp}</p>
                    </div>
                    <div className="bg-slate-50 p-3 border border-slate-300">
                      <p className="text-xs text-slate-500">Weight</p>
                      <p className="font-bold text-slate-900">{patient.vitals.weight}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-700 uppercase mb-2">Allergies</h4>
                  <p className="text-sm text-red-600 font-semibold bg-red-50 p-2 border border-red-300">{patient.allergies || 'None reported'}</p>
                </div>
              </div>
            )}

            {activeTab === 'history' && (
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-bold text-slate-700 uppercase mb-2">Medical History</h4>
                  <p className="text-sm text-slate-700 bg-slate-50 p-3 border border-slate-300">{patient.history}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-700 uppercase mb-2">Current Medications</h4>
                  <p className="text-sm text-slate-700 bg-slate-50 p-3 border border-slate-300">{patient.medications}</p>
                </div>
              </div>
            )}

            {activeTab === 'prescriptions' && (
              <div>
                <table className="w-full">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="px-3 py-2 text-left text-xs font-bold text-slate-800">RX ID</th>
                      <th className="px-3 py-2 text-left text-xs font-bold text-slate-800">Date</th>
                      <th className="px-3 py-2 text-left text-xs font-bold text-slate-800">Diagnosis</th>
                      <th className="px-3 py-2 text-left text-xs font-bold text-slate-800">Doctor</th>
                      <th className="px-3 py-2 text-left text-xs font-bold text-slate-800">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {patient.prescriptions.map((rx) => (
                      <tr key={rx.id} className="hover:bg-blue-50">
                        <td className="px-3 py-2 text-xs font-bold text-primary-700">{rx.id}</td>
                        <td className="px-3 py-2 text-xs text-slate-600">{rx.date}</td>
                        <td className="px-3 py-2 text-xs text-slate-900">{rx.diagnosis}</td>
                        <td className="px-3 py-2 text-xs text-slate-600">{rx.doctor}</td>
                        <td className="px-3 py-2">
                          <button className="text-xs text-primary-600 hover:text-primary-800 font-semibold">View</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'lab' && (
              <div>
                <table className="w-full">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="px-3 py-2 text-left text-xs font-bold text-slate-800">Test ID</th>
                      <th className="px-3 py-2 text-left text-xs font-bold text-slate-800">Test</th>
                      <th className="px-3 py-2 text-left text-xs font-bold text-slate-800">Date</th>
                      <th className="px-3 py-2 text-left text-xs font-bold text-slate-800">Status</th>
                      <th className="px-3 py-2 text-left text-xs font-bold text-slate-800">Values</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {patient.labResults.map((lb) => (
                      <tr key={lb.id} className="hover:bg-blue-50">
                        <td className="px-3 py-2 text-xs font-bold text-primary-700">{lb.id}</td>
                        <td className="px-3 py-2 text-xs text-slate-900">{lb.test}</td>
                        <td className="px-3 py-2 text-xs text-slate-600">{lb.date}</td>
                        <td className="px-3 py-2 text-xs">
                          <span className={clsx(
                            "px-2 py-0.5 font-bold uppercase",
                            lb.status === 'Normal' ? "text-green-700 bg-green-100" : "text-orange-700 bg-orange-100"
                          )}>{lb.status}</span>
                        </td>
                        <td className="px-3 py-2 text-xs text-slate-600">{lb.values}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
