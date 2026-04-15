import { useState } from 'react';
import { Search, Download, Upload, Plus } from 'lucide-react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import ExportModal from '../../components/ui/ExportModal';
import ImportModal from '../../components/ui/ImportModal';
import AddEmployeeModal from '../../components/ui/AddEmployeeModal';

const initialDummyEmployees = [
  { id: 'EMP-101', name: 'Dr. Sarah Connor', department: 'Pathology', role: 'Head Pathologist', status: 'Active' },
  { id: 'EMP-102', name: 'John Watson', department: 'Pathology', role: 'Lab Technician', status: 'Active' },
  { id: 'EMP-103', name: 'Alice Smith', department: 'Billing', role: 'Billing Officer', status: 'On Leave' },
];

export default function EmployeeList() {
  const [employees, setEmployees] = useLocalStorage('elab_employees', initialDummyEmployees);
  const [showExport, setShowExport] = useState(false);
  const [showImport, setShowImport] = useState(false);
  const [showAdd, setShowAdd] = useState(false);

  const handleDelete = (id) => {
    if (confirm('Irreversibly delete this employee profile?')) {
      setEmployees(employees.filter(e => e.id !== id));
    }
  };

  const handleAdd = (newEmp) => {
    setEmployees([...employees, newEmp]);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center border-b-2 border-slate-400 pb-1">
        <h1 className="text-lg font-bold text-slate-800 uppercase tracking-wide">Employee Master List</h1>
        <div className="flex gap-2">
          <button onClick={() => setShowImport(true)} className="flex items-center gap-1 px-2 py-1 bg-slate-200 border border-slate-500 text-xs font-semibold text-slate-800 hover:bg-slate-300 rounded-none">
            <Upload className="w-3 h-3" /> Bulk Import
          </button>
          <button onClick={() => setShowExport(true)} className="flex items-center gap-1 px-2 py-1 bg-slate-200 border border-slate-500 text-xs font-semibold text-slate-800 hover:bg-slate-300 rounded-none">
            <Download className="w-3 h-3" /> Export
          </button>
          <button onClick={() => setShowAdd(true)} className="flex items-center gap-1 px-2 py-1 bg-primary-600 border border-primary-800 text-xs font-semibold text-white hover:bg-primary-700 rounded-none">
            <Plus className="w-3 h-3" /> Add Employee
          </button>
        </div>
      </div>

      <div className="bg-white border-2 border-slate-400 rounded-none">
        
        <div className="p-2 border-b-2 border-slate-400 flex gap-2 bg-slate-200">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-700">Search:</span>
            <div className="relative w-64 border border-slate-400 bg-white">
              <Search className="h-3 w-3 text-slate-400 absolute left-2 top-1.5" />
              <input type="text" className="w-full text-xs py-1 pl-6 pr-2 rounded-none focus:ring-0 outline-none border-none" />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-300">
            <thead className="bg-slate-300">
              <tr>
                <th className="px-3 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase w-24">Emp ID</th>
                <th className="px-3 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">Employee Name</th>
                <th className="px-3 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">Department</th>
                <th className="px-3 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">Role</th>
                <th className="px-3 py-1 border-r border-slate-400 text-center text-xs font-bold text-slate-800 uppercase">Status</th>
                <th className="px-3 py-1 text-center text-xs font-bold text-slate-800 uppercase w-28">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200">
              {employees.length > 0 ? employees.map((emp) => (
                <tr key={emp.id} className="hover:bg-blue-50">
                  <td className="px-3 py-1 border-r border-slate-300 text-xs font-bold text-primary-800">{emp.id}</td>
                  <td className="px-3 py-1 border-r border-slate-300 text-xs text-slate-900 font-semibold">{emp.name}</td>
                  <td className="px-3 py-1 border-r border-slate-300 text-xs text-slate-700">{emp.department}</td>
                  <td className="px-3 py-1 border-r border-slate-300 text-xs text-slate-700">{emp.role}</td>
                  <td className="px-3 py-1 border-r border-slate-300 text-center text-xs">
                    <span className={`inline-block px-2 py-0.5 border ${emp.status === 'Active' ? 'border-green-600 text-green-700 bg-green-50' : 'border-amber-600 text-amber-700 bg-amber-50'} font-semibold rounded-none tracking-wide text-[10px] uppercase`}>
                      {emp.status}
                    </span>
                  </td>
                  <td className="px-3 py-1 text-center text-xs">
                    <button className="text-primary-700 hover:text-primary-900 underline mr-2">Edit</button>
                    <button onClick={() => handleDelete(emp.id)} className="text-red-600 hover:text-red-900 underline font-bold">Del</button>
                  </td>
                </tr>
              )) : (
                 <tr><td colSpan="6" className="text-center py-4 text-xs text-slate-500">No employees sorted in directory.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      
      <ExportModal isOpen={showExport} onClose={() => setShowExport(false)} entityName="Employees" />
      <ImportModal isOpen={showImport} onClose={() => setShowImport(false)} entityName="Employees" />
      <AddEmployeeModal isOpen={showAdd} onClose={() => setShowAdd(false)} onAdd={handleAdd} />
    </div>
  );
}
