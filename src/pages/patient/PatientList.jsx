import { Users, Search, Download, Plus } from 'lucide-react';

export default function PatientList() {
  const dummyPatients = [
    { id: 'PID-1001', name: 'John Doe', category: 'General', gender: 'M', blood: 'O+', mobile: '9876543210' },
    { id: 'PID-1002', name: 'Jane Smith', category: 'General', gender: 'F', blood: 'A-', mobile: '9123456789' },
    { id: 'PID-1003', name: 'Robert King', category: 'Senior', gender: 'M', blood: 'B+', mobile: '9988776655' },
    { id: 'PID-1004', name: 'Alice Wong', category: 'Pediatric', gender: 'F', blood: 'AB+', mobile: '9900112233' },
  ];

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center border-b-2 border-slate-400 pb-1">
        <h1 className="text-lg font-bold text-slate-800 uppercase tracking-wide">Patient List</h1>
        <div className="flex gap-2">
          <button className="flex items-center gap-1 px-2 py-1 bg-slate-200 border border-slate-500 text-xs font-semibold text-slate-800 hover:bg-slate-300 rounded-none">
            <Download className="w-3 h-3" /> Export
          </button>
          <button className="flex items-center gap-1 px-2 py-1 bg-primary-600 border border-primary-800 text-xs font-semibold text-white hover:bg-primary-700 rounded-none">
            <Plus className="w-3 h-3" /> Add Patient
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
                <th scope="col" className="px-3 py-1 border-r border-slate-400 text-center text-xs font-bold text-slate-800 uppercase w-10">Sr</th>
                <th scope="col" className="px-3 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">Patient ID</th>
                <th scope="col" className="px-3 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">Name (Gender)</th>
                <th scope="col" className="px-3 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">Category</th>
                <th scope="col" className="px-3 py-1 border-r border-slate-400 text-center text-xs font-bold text-slate-800 uppercase">Blood</th>
                <th scope="col" className="px-3 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">Contact</th>
                <th scope="col" className="px-3 py-1 text-center text-xs font-bold text-slate-800 uppercase">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200">
              {dummyPatients.map((person, idx) => (
                <tr key={person.id} className="hover:bg-blue-50">
                  <td className="px-3 py-1 border-r border-slate-300 text-center text-xs text-slate-600">{idx + 1}</td>
                  <td className="px-3 py-1 border-r border-slate-300 text-xs font-semibold text-primary-800">{person.id}</td>
                  <td className="px-3 py-1 border-r border-slate-300 text-xs text-slate-900">
                    <span className="font-semibold">{person.name}</span> ({person.gender})
                  </td>
                  <td className="px-3 py-1 border-r border-slate-300 text-xs text-slate-700">{person.category}</td>
                  <td className="px-3 py-1 border-r border-slate-300 text-center text-xs text-slate-700">{person.blood}</td>
                  <td className="px-3 py-1 border-r border-slate-300 text-xs text-slate-700">{person.mobile}</td>
                  <td className="px-3 py-1 text-center text-xs">
                    <button className="text-primary-700 hover:text-primary-900 underline mr-2">Edit</button>
                    <button className="text-danger hover:text-red-900 underline">Del</button>
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
