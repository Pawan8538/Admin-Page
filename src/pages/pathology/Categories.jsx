import { useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const initialCats = [
  { code: 'PATH-01', name: 'Hematology', head: 'Dr. Sarah Connor' },
  { code: 'PATH-02', name: 'Biochemistry', head: 'Dr. John Watson' },
];

export default function Categories() {
  const [categories, setCategories] = useLocalStorage('elab_path_categories', initialCats);
  const [formData, setFormData] = useState({ name: '', head: '', details: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name) {
      const newCat = {
        code: `PATH-${Math.floor(Math.random() * 90) + 10}`,
        name: formData.name,
        head: formData.head
      };
      setCategories([...categories, newCat]);
      setFormData({ name: '', head: '', details: '' });
    }
  };

  const handleDelete = (code) => {
    if (confirm('Delete this Pathology Category?')) {
      setCategories(categories.filter(c => c.code !== code));
    }
  };

  return (
    <div className="max-w-full space-y-2">
      <div className="mb-2 flex items-center justify-between border-b-2 border-slate-400 pb-1">
        <h1 className="text-lg font-bold text-slate-800 uppercase tracking-wide">Pathology Categories</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        <div className="col-span-1 border-2 border-slate-400 bg-white rounded-none h-min">
          <div className="p-2 border-b-2 border-slate-400 bg-slate-200">
            <h3 className="text-sm font-bold text-slate-800">Add Pathology Section</h3>
          </div>
          <form className="p-2 space-y-2" onSubmit={handleSubmit}>
            <div className="flex items-center">
              <label className="w-24 text-xs font-semibold text-slate-700">Category Name:</label>
              <input type="text" value={formData.name} onChange={e=>setFormData({...formData, name: e.target.value})} required className="flex-1 text-xs border-slate-400 p-1 border focus:ring-0 focus:border-primary-500 rounded-none" />
            </div>
            <div className="flex items-center">
              <label className="w-24 text-xs font-semibold text-slate-700">HOD / Doctor:</label>
              <input type="text" value={formData.head} onChange={e=>setFormData({...formData, head: e.target.value})} className="flex-1 text-xs border-slate-400 p-1 border focus:ring-0 focus:border-primary-500 rounded-none" />
            </div>
            <div className="flex items-start">
              <label className="w-24 text-xs font-semibold text-slate-700 mt-1">Section Details:</label>
              <textarea rows={2} value={formData.details} onChange={e=>setFormData({...formData, details: e.target.value})} className="flex-1 text-xs border-slate-400 p-1 border focus:ring-0 focus:border-primary-500 rounded-none" />
            </div>
            <div className="flex justify-end pt-2 border-t border-slate-400 mt-2">
              <button type="submit" className="bg-primary-600 py-1 px-3 border border-primary-800 text-xs font-semibold text-white hover:bg-primary-700 rounded-none">
                Save Category
              </button>
            </div>
          </form>
        </div>

        <div className="col-span-2 border-2 border-slate-400 bg-white rounded-none flex flex-col">
          <div className="p-2 border-b-2 border-slate-400 bg-slate-200">
            <h3 className="text-sm font-bold text-slate-800">Category List</h3>
          </div>
          <table className="min-w-full divide-y divide-slate-300">
             <thead className="bg-slate-300">
               <tr>
                 <th className="px-2 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">Code</th>
                 <th className="px-2 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">Category Name</th>
                 <th className="px-2 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">Head of Dept</th>
                 <th className="px-2 py-1 text-center text-xs font-bold text-slate-800 uppercase w-20">Action</th>
               </tr>
             </thead>
             <tbody className="divide-y divide-slate-200">
               {categories.map((c, i) => (
                 <tr key={i} className="hover:bg-blue-50">
                    <td className="px-2 py-1 border-r border-slate-300 text-xs font-semibold text-primary-800">{c.code}</td>
                    <td className="px-2 py-1 border-r border-slate-300 text-xs text-slate-900">{c.name}</td>
                    <td className="px-2 py-1 border-r border-slate-300 text-xs text-slate-700">{c.head}</td>
                    <td className="px-2 py-1 text-center text-xs flex gap-2 justify-center">
                       <button className="text-primary-700 underline cursor-pointer hover:text-primary-900">Edit</button>
                       <button onClick={() => handleDelete(c.code)} className="text-red-600 font-bold underline hover:text-red-900">Del</button>
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
