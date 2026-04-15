import { useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const initialDesignations = [
  { id: 'DS-01', name: 'Head Pathologist', level: 'L1' },
  { id: 'DS-02', name: 'Lab Technician', level: 'L3' },
  { id: 'DS-03', name: 'Billing Officer', level: 'L4' },
];

export default function Designation() {
  const [designations, setDesignations] = useLocalStorage('elab_designations', initialDesignations);
  const [formData, setFormData] = useState({ name: '', level: 'L3', desc: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name) {
      const newDsg = {
        id: `DS-${Math.floor(Math.random() * 90) + 10}`,
        name: formData.name,
        level: formData.level
      };
      setDesignations([...designations, newDsg]);
      setFormData({ name: '', level: 'L3', desc: '' });
    }
  };

  const handleDelete = (id) => {
    if(confirm('Delete this designation?')) {
      setDesignations(designations.filter(d => d.id !== id));
    }
  };

  return (
    <div className="max-w-full space-y-2">
      <div className="mb-2 flex items-center justify-between border-b-2 border-slate-400 pb-1">
        <h1 className="text-lg font-bold text-slate-800 uppercase tracking-wide">Designations</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        
        {/* Form Panel */}
        <div className="col-span-1 border-2 border-slate-400 bg-white rounded-none h-min">
          <div className="p-2 border-b-2 border-slate-400 bg-slate-200">
            <h3 className="text-sm font-bold text-slate-800">Add Designation</h3>
          </div>
          <form className="p-2 space-y-2" onSubmit={handleSubmit}>
            <div className="flex items-center">
              <label className="w-24 text-xs font-semibold text-slate-700">Target Name:</label>
              <input type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="flex-1 text-xs border-slate-400 p-1 border focus:ring-0 focus:border-primary-500 rounded-none" required />
            </div>
            <div className="flex items-center">
              <label className="w-24 text-xs font-semibold text-slate-700">Sys Level:</label>
              <select value={formData.level} onChange={e => setFormData({...formData, level: e.target.value})} className="flex-1 text-xs border-slate-400 p-1 border focus:ring-0 focus:border-primary-500 rounded-none">
                 <option>L1</option><option>L2</option><option>L3</option><option>L4</option>
              </select>
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

        {/* List Panel */}
        <div className="col-span-2 border-2 border-slate-400 bg-white rounded-none flex flex-col">
          <div className="p-2 border-b-2 border-slate-400 bg-slate-200">
            <h3 className="text-sm font-bold text-slate-800">Designation List</h3>
          </div>
          <table className="min-w-full divide-y divide-slate-300">
             <thead className="bg-slate-300">
               <tr>
                 <th className="px-2 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase w-16">ID</th>
                 <th className="px-2 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">Designation Name</th>
                 <th className="px-2 py-1 border-r border-slate-400 text-center text-xs font-bold text-slate-800 uppercase w-16">Level</th>
                 <th className="px-2 py-1 text-center text-xs font-bold text-slate-800 uppercase w-20">Action</th>
               </tr>
             </thead>
             <tbody className="divide-y divide-slate-200">
               {designations.map((d) => (
                 <tr key={d.id} className="hover:bg-blue-50">
                    <td className="px-2 py-1 border-r border-slate-300 text-xs font-semibold text-primary-800">{d.id}</td>
                    <td className="px-2 py-1 border-r border-slate-300 text-xs text-slate-900">{d.name}</td>
                    <td className="px-2 py-1 border-r border-slate-300 text-xs text-center text-slate-700">{d.level}</td>
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
