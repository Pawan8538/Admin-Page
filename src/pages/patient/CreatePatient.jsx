export default function CreatePatient() {
  return (
    <div className="max-w-full">
      <div className="mb-2 flex items-center justify-between border-b-2 border-slate-400 pb-1">
        <h1 className="text-lg font-bold text-slate-800 uppercase tracking-wide">Add New Patient</h1>
      </div>

      <form className="bg-slate-100 border border-slate-400 p-3 space-y-4">
        
        {/* Basic Info */}
        <div className="border border-slate-300 p-2 bg-white">
          <h3 className="text-sm font-bold text-slate-800 mb-2 bg-slate-200 px-2 py-1 border border-slate-300">Basic Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="flex items-center">
              <label htmlFor="name" className="w-32 text-xs font-semibold text-slate-700">Full Name:</label>
              <input type="text" name="name" id="name" className="flex-1 text-xs border-slate-400 p-1 border focus:ring-0 focus:border-primary-500 rounded-none" placeholder="John Doe" />
            </div>

            <div className="flex items-center">
               <label htmlFor="gender" className="w-32 text-xs font-semibold text-slate-700">Gender:</label>
               <select id="gender" name="gender" className="flex-1 text-xs border-slate-400 py-1 px-2 border focus:ring-0 focus:border-primary-500 rounded-none">
                 <option>Male</option>
                 <option>Female</option>
                 <option>Other</option>
               </select>
            </div>

            <div className="flex items-center">
              <label htmlFor="dob" className="w-32 text-xs font-semibold text-slate-700">Birthday:</label>
              <input type="date" name="dob" id="dob" className="flex-1 text-xs border-slate-400 p-1 border focus:ring-0 focus:border-primary-500 rounded-none" />
            </div>

            <div className="flex items-center">
              <label htmlFor="age" className="w-32 text-xs font-semibold text-slate-700">Age:</label>
              <input type="number" name="age" id="age" className="flex-1 text-xs border-slate-400 p-1 border focus:ring-0 focus:border-primary-500 rounded-none" />
            </div>

            <div className="flex items-center col-span-1 md:col-span-2">
              <label htmlFor="mobile" className="w-32 text-xs font-semibold text-slate-700">Mobile Number:</label>
              <input type="tel" name="mobile" id="mobile" className="flex-1 text-xs border-slate-400 p-1 border focus:ring-0 focus:border-primary-500 rounded-none" />
            </div>

            <div className="flex items-center col-span-1 md:col-span-2">
              <label htmlFor="email" className="w-32 text-xs font-semibold text-slate-700">Email:</label>
              <input type="email" name="email" id="email" className="flex-1 text-xs border-slate-400 p-1 border focus:ring-0 focus:border-primary-500 rounded-none" />
            </div>
            
            <div className="flex items-center col-span-1 md:col-span-2">
              <label className="w-32 text-xs font-semibold text-slate-700">Photo:</label>
              <button type="button" className="text-xs border border-slate-400 bg-slate-200 px-3 py-1 hover:bg-slate-300 rounded-none">Browse...</button>
              <span className="ml-2 text-xs text-slate-500">No file selected</span>
            </div>
          </div>
        </div>

        {/* Clinical Info */}
        <div className="border border-slate-300 p-2 bg-white">
          <h3 className="text-sm font-bold text-slate-800 mb-2 bg-slate-200 px-2 py-1 border border-slate-300">Clinical Measurements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="flex items-center">
               <label htmlFor="bloodGroup" className="w-32 text-xs font-semibold text-slate-700">Blood Group:</label>
               <select id="bloodGroup" name="bloodGroup" className="flex-1 text-xs border-slate-400 py-1 px-2 border focus:ring-0 focus:border-primary-500 rounded-none">
                 <option>O+</option> <option>O-</option> <option>A+</option> <option>A-</option>
                 <option>B+</option> <option>B-</option> <option>AB+</option> <option>AB-</option>
               </select>
            </div>
            <div className="flex items-center">
              <label htmlFor="bp" className="w-32 text-xs font-semibold text-slate-700">Blood Pressure:</label>
              <input type="text" name="bp" id="bp" placeholder="120/80" className="flex-1 text-xs border-slate-400 p-1 border focus:ring-0 focus:border-primary-500 rounded-none" />
            </div>
            <div className="flex items-center">
              <label htmlFor="height" className="w-32 text-xs font-semibold text-slate-700">Height (cm):</label>
              <input type="text" name="height" id="height" className="flex-1 text-xs border-slate-400 p-1 border focus:ring-0 focus:border-primary-500 rounded-none" />
            </div>
            <div className="flex items-center">
              <label htmlFor="weight" className="w-32 text-xs font-semibold text-slate-700">Weight (kg):</label>
              <input type="text" name="weight" id="weight" className="flex-1 text-xs border-slate-400 p-1 border focus:ring-0 focus:border-primary-500 rounded-none" />
            </div>
            
            <div className="flex items-start col-span-1 md:col-span-2">
              <label htmlFor="address" className="w-32 text-xs font-semibold text-slate-700 mt-1">Address:</label>
              <textarea id="address" name="address" rows={2} className="flex-1 text-xs border-slate-400 p-1 border focus:ring-0 focus:border-primary-500 rounded-none" />
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-2 border-t border-slate-400 pt-3 mt-4">
          <button type="button" className="bg-slate-200 py-1 px-4 border border-slate-500 text-xs font-semibold text-slate-800 hover:bg-slate-300 rounded-none">
            Cancel
          </button>
          <button type="submit" className="bg-primary-600 py-1 px-4 border border-primary-800 text-xs font-semibold text-white hover:bg-primary-700 rounded-none">
            Save Patient
          </button>
        </div>

      </form>
    </div>
  );
}
