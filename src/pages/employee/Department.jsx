import { useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const initialDepts = [
  { id: 'D-01', name: 'Pathology', head: 'Dr. Sarah Connor' },
  { id: 'D-02', name: 'Front Desk', head: 'John Reese' },
];

export default function Department() {
  const [departments, setDepartments] = useLocalStorage('elab_departments', initialDepts);
  const [formData, setFormData] = useState({ id: '', name: '', head: '', desc: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.head) {
      const newDept = {
        id: `D-${Math.floor(Math.random() * 90) + 10}`,
        name: formData.name,
        head: formData.head
      };
      setDepartments([...departments, newDept]);
      setFormData({ id: '', name: '', head: '', desc: '' });
    }
  };

  const handleDelete = (id) => {
    if(confirm('Delete this department entirely?')) {
      setDepartments(departments.filter(d => d.id !== id));
    }
  }

  return (
    <div className="max-w-full space-y-2">
      <div className="mb-2 flex items-center justify-between border-b-2 border-slate-400 pb-1">
        <h1 className="text-lg font-bold text-slate-800 uppercase tracking-wide">Departments</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        <div className="col-span-1 border-2 border-slate-400 bg-white rounded-none h-min">
          <div className="p-2 border-b-2 border-slate-400 bg-slate-200">
            <h3 className="text-sm font-bold text-slate-800">Add Department</h3>
          </div>
          <form className="p-2 space-y-2" onSubmit={handleSubmit}>
            <div className="flex items-center">
              <label className="w-24 text-xs font-semibold text-slate-700">Dept Name:</label>
              <input type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="flex-1 text-xs border-slate-400 p-1 border focus:ring-0 focus:border-primary-500 rounded-none" required />
            </div>
            <div className="flex items-center">
              <label className="w-24 text-xs font-semibold text-slate-700">Dept Head:</label>
              <input type="text" value={formData.head} onChange={e => setFormData({...formData, head: e.target.value})} className="flex-1 text-xs border-slate-400 p-1 border focus:ring-0 focus:border-primary-500 rounded-none" required />
            </div>
            <div className="flex items-start">
              <label className="w-24 text-xs font-semibold text-slate-700 mt-1">Description:</label>
              <textarea rows={2} value={formData.desc} onChange={e => setFormData({...formData, desc: e.target.value})} className="flex-1 text-xs border-slate-400 p-1 border focus:ring-0 focus:border-primary-500 rounded-none" />
            </div>
            <div className="flex justify-end pt-2 border-t border-slate-400 mt-2">
              <button type="submit" className="bg-primary-600 py-1 px-3 border border-primary-800 text-xs font-semibold text-white hover:bg-primary-700 rounded-none">
                Save
              </button>
            </div>
          </form>
        </div>

        <div className="col-span-2 border-2 border-slate-400 bg-white rounded-none flex flex-col">
          <div className="p-2 border-b-2 border-slate-400 bg-slate-200">
            <h3 className="text-sm font-bold text-slate-800">Department List</h3>
          </div>
          <table className="min-w-full divide-y divide-slate-300">
             <thead className="bg-slate-300">
               <tr>
                 <th className="px-2 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">ID</th>
                 <th className="px-2 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">Dept Name</th>
                 <th className="px-2 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">Head of Dept</th>
                 <th className="px-2 py-1 text-center text-xs font-bold text-slate-800 uppercase w-20">Action</th>
               </tr>
             </thead>
             <tbody className="divide-y divide-slate-200">
               {departments.map((d) => (
                 <tr key={d.id} className="hover:bg-blue-50">
                    <td className="px-2 py-1 border-r border-slate-300 text-xs font-semibold">{d.id}</td>
                    <td className="px-2 py-1 border-r border-slate-300 text-xs text-slate-900">{d.name}</td>
                    <td className="px-2 py-1 border-r border-slate-300 text-xs text-slate-700">{d.head}</td>
                    <td className="px-2 py-1 text-center text-xs flex gap-2 justify-center">
                       <button className="text-primary-700 underline hover:text-primary-900">Edit</button>
                       <button onClick={() => handleDelete(d.id)} className="text-red-600 font-bold underline hover:text-red-900">Del</button>
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
