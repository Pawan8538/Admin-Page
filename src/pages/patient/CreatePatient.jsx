export default function CreatePatient() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800">Add New Patient</h1>
        <p className="text-slate-500 mt-1">Enter patient demographics and clinical details based on ElabAssist standards.</p>
      </div>

      <form className="bg-white shadow-sm border border-slate-200 rounded-lg p-6 space-y-8">
        
        {/* Basic Info */}
        <div>
          <h3 className="text-lg leading-6 font-medium text-slate-900 mb-4 pb-2 border-b border-slate-100">Basic Information</h3>
          <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="name" className="block text-sm font-medium text-slate-700">Full Name</label>
              <div className="mt-1">
                <input type="text" name="name" id="name" className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-slate-300 rounded-md p-2 border" placeholder="John Doe" />
              </div>
            </div>

            <div className="sm:col-span-1 border border-slate-300 rounded-md p-2 text-center text-sm font-medium text-slate-500 flex flex-col justify-center bg-slate-50 cursor-pointer hover:bg-slate-100">
               Upload Photo
            </div>

            <div className="sm:col-span-2">
               <label htmlFor="gender" className="block text-sm font-medium text-slate-700">Gender</label>
               <select id="gender" name="gender" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-slate-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md border">
                 <option>Male</option>
                 <option>Female</option>
                 <option>Other</option>
               </select>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="dob" className="block text-sm font-medium text-slate-700">Birthday</label>
              <div className="mt-1">
                <input type="date" name="dob" id="dob" className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-slate-300 rounded-md p-2 border" />
              </div>
            </div>

            <div className="sm:col-span-1">
              <label htmlFor="age" className="block text-sm font-medium text-slate-700">Age</label>
              <div className="mt-1">
                <input type="number" name="age" id="age" className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-slate-300 rounded-md p-2 border" />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="mobile" className="block text-sm font-medium text-slate-700">Mobile Number</label>
              <div className="mt-1">
                <input type="tel" name="mobile" id="mobile" className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-slate-300 rounded-md p-2 border" />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
              <div className="mt-1">
                <input type="email" name="email" id="email" className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-slate-300 rounded-md p-2 border" />
              </div>
            </div>
          </div>
        </div>

        {/* Clinical Info */}
        <div>
          <h3 className="text-lg leading-6 font-medium text-slate-900 mb-4 pb-2 border-b border-slate-100">Clinical Measurements</h3>
          <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-2">
               <label htmlFor="bloodGroup" className="block text-sm font-medium text-slate-700">Blood Group</label>
               <select id="bloodGroup" name="bloodGroup" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-slate-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md border">
                 <option>O+</option> <option>O-</option> <option>A+</option> <option>A-</option>
                 <option>B+</option> <option>B-</option> <option>AB+</option> <option>AB-</option>
               </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="bp" className="block text-sm font-medium text-slate-700">Blood Pressure</label>
              <div className="mt-1">
                <input type="text" name="bp" id="bp" placeholder="e.g. 120/80" className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-slate-300 rounded-md p-2 border" />
              </div>
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="height" className="block text-sm font-medium text-slate-700">Height (cm)</label>
              <div className="mt-1">
                <input type="text" name="height" id="height" className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-slate-300 rounded-md p-2 border" />
              </div>
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="weight" className="block text-sm font-medium text-slate-700">Weight (kg)</label>
              <div className="mt-1">
                <input type="text" name="weight" id="weight" className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-slate-300 rounded-md p-2 border" />
              </div>
            </div>
            
            <div className="sm:col-span-6">
              <label htmlFor="address" className="block text-sm font-medium text-slate-700">Address</label>
              <div className="mt-1">
                <textarea id="address" name="address" rows={2} className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-slate-300 rounded-md p-2 border" />
              </div>
            </div>
          </div>
        </div>

        <div className="pt-5 border-t border-slate-200">
          <div className="flex justify-end gap-3">
            <button type="button" className="bg-white py-2 px-4 border border-slate-300 rounded-md shadow-sm text-sm font-medium text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
              Cancel
            </button>
            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
              Save Patient
            </button>
          </div>
        </div>

      </form>
    </div>
  );
}
