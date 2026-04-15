import { useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const initialCats = [
  { id: 1, name: 'General', status: 'Active' },
  { id: 2, name: 'Senior Citizen', status: 'Active' },
  { id: 3, name: 'VIP', status: 'Active' },
];

export default function PatientCategory() {
  const [categories, setCategories] = useLocalStorage('elab_patient_categories', initialCats);
  const [formData, setFormData] = useState({ name: '', status: 'Active' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name) {
      const newCat = {
        id: Math.floor(Math.random() * 900) + 10,
        name: formData.name,
        status: formData.status
      };
      setCategories([...categories, newCat]);
      setFormData({ name: '', status: 'Active' });
    }
  };

  const handleDelete = (id) => {
    if (confirm('Delete this patient category?')) {
      setCategories(categories.filter(c => c.id !== id));
    }
  };

  return (
    <div className="max-w-full space-y-2">
      <div className="mb-2 flex items-center justify-between border-b-2 border-slate-400 pb-1">
        <h1 className="text-lg font-bold text-slate-800 uppercase tracking-wide">Patient Categories</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {/* Add Category Form */}
        <div className="col-span-1 border-2 border-slate-400 bg-white rounded-none h-min">
          <div className="p-2 border-b-2 border-slate-400 bg-slate-200">
            <h3 className="text-sm font-bold text-slate-800">Add Category</h3>
          </div>
          <form className="p-2 space-y-2" onSubmit={handleSubmit}>
            <div className="flex items-center">
              <label htmlFor="catName" className="w-24 text-xs font-semibold text-slate-700">Name:</label>
              <input type="text" id="catName" value={formData.name} onChange={e=>setFormData({...formData, name: e.target.value})} required className="flex-1 text-xs border-slate-400 p-1 border focus:ring-0 focus:border-primary-500 rounded-none" />
            </div>
            <div className="flex items-center">
               <label htmlFor="status" className="w-24 text-xs font-semibold text-slate-700">Status:</label>
               <select id="status" value={formData.status} onChange={e=>setFormData({...formData, status: e.target.value})} className="flex-1 text-xs border-slate-400 py-1 px-2 border focus:ring-0 focus:border-primary-500 rounded-none">
                 <option>Active</option>
                 <option>Inactive</option>
               </select>
            </div>
            <div className="flex justify-end pt-2 border-t border-slate-400 mt-2">
              <button type="submit" className="bg-primary-600 py-1 px-3 border border-primary-800 text-xs font-semibold text-white hover:bg-primary-700 rounded-none">
                Save
              </button>
            </div>
          </form>
        </div>

        {/* Category List */}
        <div className="col-span-2 border-2 border-slate-400 bg-white rounded-none flex flex-col">
          <div className="p-2 border-b-2 border-slate-400 bg-slate-200 flex justify-between items-center">
            <h3 className="text-sm font-bold text-slate-800">Category List</h3>
          </div>
          <table className="min-w-full divide-y divide-slate-300">
             <thead className="bg-slate-300">
               <tr>
                 <th className="px-2 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase w-16">ID</th>
                 <th className="px-2 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">Category Name</th>
                 <th className="px-2 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">Status</th>
                 <th className="px-2 py-1 text-center text-xs font-bold text-slate-800 uppercase w-20">Action</th>
               </tr>
             </thead>
             <tbody className="divide-y divide-slate-200">
               {categories.map((c) => (
                 <tr key={c.id} className="hover:bg-blue-50">
                    <td className="px-2 py-1 border-r border-slate-300 text-xs text-slate-700 font-bold">{c.id}</td>
                    <td className="px-2 py-1 border-r border-slate-300 text-xs font-semibold text-slate-900">{c.name}</td>
                    <td className="px-2 py-1 border-r border-slate-300 text-xs font-semibold text-green-700">{c.status}</td>
                    <td className="px-2 py-1 text-center text-xs flex gap-2 justify-center">
                       <button className="text-primary-700 underline cursor-pointer hover:text-primary-900">Edit</button>
                       <button onClick={()=>handleDelete(c.id)} className="text-red-700 underline cursor-pointer font-bold hover:text-red-900">Del</button>
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
