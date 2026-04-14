import { Search, Plus, Upload } from 'lucide-react';
import clsx from 'clsx';

export default function EmployeeList() {
  const dummyEmployees = [
    { id: 'EMP-001', name: 'Dr. Sarah Connor', dept: 'Pathology', role: 'Head Pathologist', mobile: '9000100011', status: 'Active' },
    { id: 'EMP-002', name: 'John Reese', dept: 'Front Desk', role: 'Receptionist', mobile: '9000200022', status: 'Active' },
    { id: 'EMP-003', name: 'Miles Dyson', dept: 'Laboratory', role: 'Senior Technician', mobile: '9000300033', status: 'On Leave' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-800">Employee List</h1>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50">
            <Upload className="w-4 h-4" /> Bulk Import
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary-600 rounded-md text-sm font-medium text-white hover:bg-primary-700">
            <Plus className="w-4 h-4" /> Add Employee
          </button>
        </div>
      </div>

      <div className="bg-white shadow-sm border border-slate-200 rounded-lg overflow-hidden">
        <div className="p-4 border-b border-slate-200 flex gap-4 bg-slate-50">
          <div className="relative flex-1 max-w-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Search by name, ID or role..."
              className="pl-10 w-full border-slate-300 rounded-md shadow-sm sm:text-sm focus:ring-primary-500 focus:border-primary-500 border p-2"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Emp ID</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Name</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Department</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Designation</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Mobile</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200">
              {dummyEmployees.map((emp, idx) => (
                <tr key={idx} className="hover:bg-slate-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary-600">{emp.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">{emp.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{emp.dept}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{emp.role}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{emp.mobile}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={clsx(
                      "px-2 inline-flex text-xs leading-5 font-semibold rounded-full",
                      emp.status === 'Active' ? "bg-green-100 text-green-800" : "bg-warning/20 text-yellow-800"
                    )}>
                      {emp.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-primary-600 hover:text-primary-900 mr-3">Edit</button>
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
