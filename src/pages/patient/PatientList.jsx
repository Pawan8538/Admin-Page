import { Users, Filter, Download, Plus } from 'lucide-react';

export default function PatientList() {
  const dummyPatients = [
    { id: 'PID-1001', name: 'John Doe', category: 'General', gender: 'Male', tests: 'CBC, Lipid', blood: 'O+', mobile: '9876543210' },
    { id: 'PID-1002', name: 'Jane Smith', category: 'General', gender: 'Female', tests: 'Glucose Fasting', blood: 'A-', mobile: '9123456789' },
    { id: 'PID-1003', name: 'Robert King', category: 'Senior', gender: 'Male', tests: 'Urinalysis', blood: 'B+', mobile: '9988776655' },
    { id: 'PID-1004', name: 'Alice Wong', category: 'Pediatric', gender: 'Female', tests: 'Vitamin D', blood: 'AB+', mobile: '9900112233' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-800">Patient List</h1>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50">
            <Download className="w-4 h-4" /> Export
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary-600 rounded-md text-sm font-medium text-white hover:bg-primary-700">
            <Plus className="w-4 h-4" /> Add Patient
          </button>
        </div>
      </div>

      <div className="bg-white shadow-sm border border-slate-200 rounded-lg overflow-hidden">
        <div className="p-4 border-b border-slate-200 flex gap-4 bg-slate-50">
          <div className="relative flex-1 max-w-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Filter className="h-4 w-4 text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Filter patients..."
              className="pl-10 w-full border-slate-300 rounded-md shadow-sm sm:text-sm focus:ring-primary-500 focus:border-primary-500 border p-2"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Sr No</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Patient ID</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Name / Gender</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Category</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Tests Configured</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Blood</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Contact</th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200">
              {dummyPatients.map((person, idx) => (
                <tr key={person.id} className="hover:bg-slate-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{idx + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary-600">{person.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-8 w-8 bg-slate-100 rounded-full flex items-center justify-center">
                        <Users className="h-4 w-4 text-slate-500" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-slate-900">{person.name}</div>
                        <div className="text-sm text-slate-500">{person.gender}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                      {person.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{person.tests}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{person.blood}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{person.mobile}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-primary-600 hover:text-primary-900 mr-3">Edit</button>
                    <button className="text-danger hover:text-red-900">Delete</button>
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
