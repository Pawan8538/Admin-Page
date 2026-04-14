import { Search, Upload, Plus } from 'lucide-react';

export default function EmployeeList() {
  const dummyEmployees = [
    { id: 'EMP-001', name: 'Dr. Sarah Connor', dept: 'Pathology', role: 'Head Pathologist', mobile: '9000100011', status: 'Active' },
    { id: 'EMP-002', name: 'John Reese', dept: 'Front Desk', role: 'Receptionist', mobile: '9000200022', status: 'Active' },
    { id: 'EMP-003', name: 'Miles Dyson', dept: 'Laboratory', role: 'Senior Technician', mobile: '9000300033', status: 'Leave' },
  ];

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center border-b-2 border-slate-400 pb-1">
        <h1 className="text-lg font-bold text-slate-800 uppercase tracking-wide">Employee List</h1>
        <div className="flex gap-2">
          <button className="flex items-center gap-1 px-2 py-1 bg-slate-200 border border-slate-500 text-xs font-semibold text-slate-800 hover:bg-slate-300 rounded-none">
            <Upload className="w-3 h-3" /> Bulk Import
          </button>
          <button className="flex items-center gap-1 px-2 py-1 bg-primary-600 border border-primary-800 text-xs font-semibold text-white hover:bg-primary-700 rounded-none">
            <Plus className="w-3 h-3" /> Add Emp
          </button>
        </div>
      </div>

      <div className="bg-white border-2 border-slate-400 rounded-none">
        <div className="p-2 border-b-2 border-slate-400 flex gap-2 bg-slate-200">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-700">Filter:</span>
            <div className="relative w-64 border border-slate-400 bg-white">
              <Search className="h-3 w-3 text-slate-400 absolute left-2 top-1.5" />
              <input
                type="text"
                className="w-full text-xs py-1 pl-6 pr-2 rounded-none focus:ring-0 focus:outline-none border-none"
              />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-300">
            <thead className="bg-slate-300">
              <tr>
                <th scope="col" className="px-3 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">Emp ID</th>
                <th scope="col" className="px-3 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">Name</th>
                <th scope="col" className="px-3 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">Dept</th>
                <th scope="col" className="px-3 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">Designation</th>
                <th scope="col" className="px-3 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">Mobile</th>
                <th scope="col" className="px-3 py-1 border-r border-slate-400 text-center text-xs font-bold text-slate-800 uppercase">Status</th>
                <th scope="col" className="px-3 py-1 text-center text-xs font-bold text-slate-800 uppercase">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200">
              {dummyEmployees.map((emp, idx) => (
                <tr key={idx} className="hover:bg-blue-50">
                  <td className="px-3 py-1 border-r border-slate-300 text-xs font-semibold text-primary-800">{emp.id}</td>
                  <td className="px-3 py-1 border-r border-slate-300 text-xs font-semibold text-slate-900">{emp.name}</td>
                  <td className="px-3 py-1 border-r border-slate-300 text-xs text-slate-700">{emp.dept}</td>
                  <td className="px-3 py-1 border-r border-slate-300 text-xs text-slate-700">{emp.role}</td>
                  <td className="px-3 py-1 border-r border-slate-300 text-xs text-slate-700">{emp.mobile}</td>
                  <td className="px-3 py-1 border-r border-slate-300 text-center text-xs font-bold">
                    <span className={emp.status === 'Active' ? 'text-green-700' : 'text-red-700'}>{emp.status}</span>
                  </td>
                  <td className="px-3 py-1 text-center text-xs">
                    <button className="text-primary-700 hover:text-primary-900 underline">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
