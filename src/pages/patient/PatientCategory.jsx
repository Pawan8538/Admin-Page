export default function PatientCategory() {
  const dummyCategories = [
    { id: 1, name: 'General', status: 'Active' },
    { id: 2, name: 'Senior Citizen', status: 'Active' },
    { id: 3, name: 'VIP', status: 'Active' },
  ];

  return (
    <div className="max-w-full">
      <div className="mb-2 flex items-center justify-between border-b-2 border-slate-400 pb-1">
        <h1 className="text-lg font-bold text-slate-800 uppercase tracking-wide">Patient Categories</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {/* Add Category Form */}
        <div className="col-span-1 border-2 border-slate-400 bg-white rounded-none">
          <div className="p-2 border-b-2 border-slate-400 bg-slate-200">
            <h3 className="text-sm font-bold text-slate-800">Add Category</h3>
          </div>
          <form className="p-2 space-y-2">
            <div className="flex items-center">
              <label htmlFor="catName" className="w-24 text-xs font-semibold text-slate-700">Name:</label>
              <input type="text" id="catName" className="flex-1 text-xs border-slate-400 p-1 border focus:ring-0 focus:border-primary-500 rounded-none" />
            </div>
            <div className="flex items-center">
               <label htmlFor="status" className="w-24 text-xs font-semibold text-slate-700">Status:</label>
               <select id="status" className="flex-1 text-xs border-slate-400 py-1 px-2 border focus:ring-0 focus:border-primary-500 rounded-none">
                 <option>Active</option>
                 <option>Inactive</option>
               </select>
            </div>
            <div className="flex justify-end pt-2 border-t border-slate-400 mt-2">
              <button type="button" className="bg-primary-600 py-1 px-3 border border-primary-800 text-xs font-semibold text-white hover:bg-primary-700 rounded-none">
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
                 <th className="px-2 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">ID</th>
                 <th className="px-2 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">Category Name</th>
                 <th className="px-2 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">Status</th>
                 <th className="px-2 py-1 text-center text-xs font-bold text-slate-800 uppercase">Action</th>
               </tr>
             </thead>
             <tbody className="divide-y divide-slate-200">
               {dummyCategories.map((c) => (
                 <tr key={c.id} className="hover:bg-blue-50">
                    <td className="px-2 py-1 border-r border-slate-300 text-xs text-slate-700">{c.id}</td>
                    <td className="px-2 py-1 border-r border-slate-300 text-xs font-semibold text-slate-900">{c.name}</td>
                    <td className="px-2 py-1 border-r border-slate-300 text-xs font-semibold text-green-700">{c.status}</td>
                    <td className="px-2 py-1 text-center text-xs text-primary-700 underline cursor-pointer hover:text-primary-900">Edit</td>
                 </tr>
               ))}
             </tbody>
           </table>
        </div>
      </div>
    </div>
  );
}
