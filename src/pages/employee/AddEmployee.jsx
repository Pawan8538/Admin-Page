export default function AddEmployee() {
  return (
    <div className="max-w-full">
      <div className="mb-2 flex items-center justify-between border-b-2 border-slate-400 pb-1">
        <h1 className="text-lg font-bold text-slate-800 uppercase tracking-wide">Add Employee</h1>
      </div>

      <form className="bg-slate-100 border border-slate-400 p-2 space-y-3">
        
        {/* Basic Info */}
        <div className="border border-slate-300 p-2 bg-white">
          <h3 className="text-sm font-bold text-slate-800 mb-1 bg-slate-200 px-2 py-1 border border-slate-300">Basic Info</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="flex items-center col-span-1 md:col-span-2">
              <label className="w-32 text-xs font-semibold text-slate-700">Full Name:</label>
              <input type="text" className="flex-1 text-xs border-slate-400 p-1 border focus:ring-0 focus:border-primary-500 rounded-none" />
            </div>
            <div className="flex items-center">
               <label className="w-32 text-xs font-semibold text-slate-700">Gender:</label>
               <select className="flex-1 text-xs border-slate-400 py-1 px-2 border focus:ring-0 focus:border-primary-500 rounded-none">
                 <option>Male</option><option>Female</option>
               </select>
            </div>
            <div className="flex items-center">
              <label className="w-32 text-xs font-semibold text-slate-700">Marital Status:</label>
              <select className="flex-1 text-xs border-slate-400 py-1 px-2 border focus:ring-0 focus:border-primary-500 rounded-none">
                 <option>Single</option><option>Married</option>
               </select>
            </div>
            <div className="flex items-center">
              <label className="w-32 text-xs font-semibold text-slate-700">Birthday:</label>
              <input type="date" className="flex-1 text-xs border-slate-400 p-1 border focus:ring-0 focus:border-primary-500 rounded-none" />
            </div>
            <div className="flex items-center">
              <label className="w-32 text-xs font-semibold text-slate-700">Age:</label>
              <input type="number" className="flex-1 text-xs border-slate-400 p-1 border focus:ring-0 focus:border-primary-500 rounded-none" />
            </div>
            <div className="flex items-center">
              <label className="w-32 text-xs font-semibold text-slate-700">Mobile:</label>
              <input type="tel" className="flex-1 text-xs border-slate-400 p-1 border focus:ring-0 focus:border-primary-500 rounded-none" />
            </div>
            <div className="flex items-center">
              <label className="w-32 text-xs font-semibold text-slate-700">Email:</label>
              <input type="email" className="flex-1 text-xs border-slate-400 p-1 border focus:ring-0 focus:border-primary-500 rounded-none" />
            </div>
            <div className="flex items-start col-span-1 md:col-span-2">
              <label className="w-32 text-xs font-semibold text-slate-700 mt-1">Residential Addr:</label>
              <textarea rows={2} className="flex-1 text-xs border-slate-400 p-1 border focus:ring-0 focus:border-primary-500 rounded-none" />
            </div>
          </div>
        </div>

        {/* Employment Details */}
        <div className="border border-slate-300 p-2 bg-white">
          <h3 className="text-sm font-bold text-slate-800 mb-1 bg-slate-200 px-2 py-1 border border-slate-300">Employment Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="flex items-center">
               <label className="w-32 text-xs font-semibold text-slate-700">Department:</label>
               <select className="flex-1 text-xs border-slate-400 py-1 px-2 border focus:ring-0 focus:border-primary-500 rounded-none">
                 <option>Pathology</option>
                 <option>Front Desk</option>
               </select>
            </div>
            <div className="flex items-center">
               <label className="w-32 text-xs font-semibold text-slate-700">Designation:</label>
               <select className="flex-1 text-xs border-slate-400 py-1 px-2 border focus:ring-0 focus:border-primary-500 rounded-none">
                 <option>Head Pathologist</option>
                 <option>Technician</option>
               </select>
            </div>
            <div className="flex items-center">
              <label className="w-32 text-xs font-semibold text-slate-700">Date of Joining:</label>
              <input type="date" className="flex-1 text-xs border-slate-400 p-1 border focus:ring-0 focus:border-primary-500 rounded-none" />
            </div>
            <div className="flex items-center">
              <label className="w-32 text-xs font-semibold text-slate-700">Base Salary:</label>
              <input type="number" className="flex-1 text-xs border-slate-400 p-1 border focus:ring-0 focus:border-primary-500 rounded-none" placeholder="₹" />
            </div>
          </div>
        </div>

        {/* System Login */}
        <div className="border border-slate-300 p-2 bg-white">
          <h3 className="text-sm font-bold text-slate-800 mb-1 bg-slate-200 px-2 py-1 border border-slate-300">System Login Credentials</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="flex items-center col-span-1 md:col-span-2">
               <label className="w-32 text-xs font-semibold text-slate-700">Role/Permissions:</label>
               <select className="flex-1 text-xs border-slate-400 py-1 px-2 border focus:ring-0 focus:border-primary-500 rounded-none">
                 <option>Administrator</option>
                 <option>Lab Technician</option>
                 <option>Receptionist</option>
               </select>
            </div>
            <div className="flex items-center">
              <label className="w-32 text-xs font-semibold text-slate-700">Username:</label>
              <input type="text" className="flex-1 text-xs border-slate-400 p-1 border focus:ring-0 focus:border-primary-500 rounded-none" />
            </div>
            <div className="flex items-center">
              <label className="w-32 text-xs font-semibold text-slate-700">Password:</label>
              <input type="password" className="flex-1 text-xs border-slate-400 p-1 border focus:ring-0 focus:border-primary-500 rounded-none" />
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-2 border-t border-slate-400 mt-2 pt-2">
          <button type="submit" className="bg-primary-600 py-1 px-4 border border-primary-800 text-xs font-semibold text-white hover:bg-primary-700 rounded-none">
            Save Employee
          </button>
        </div>

      </form>
    </div>
  );
}
