export default function CreateTest() {
  return (
    <div className="max-w-full">
      <div className="mb-2 flex items-center justify-between border-b-2 border-slate-400 pb-1">
        <h1 className="text-lg font-bold text-slate-800 uppercase tracking-wide">Create Test</h1>
      </div>

      <form className="bg-slate-100 border border-slate-400 p-2 space-y-2">
        <div className="border border-slate-300 p-2 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            
            <div className="flex items-center col-span-1 md:col-span-2">
              <label className="w-40 text-xs font-semibold text-slate-700">Test Name:</label>
              <input type="text" className="flex-1 text-xs border-slate-400 p-1 border focus:ring-0 focus:border-primary-500 rounded-none" />
            </div>

            <div className="flex items-center">
              <label className="w-40 text-xs font-semibold text-slate-700">Short Name/Code:</label>
              <input type="text" className="flex-1 text-xs border-slate-400 p-1 border focus:ring-0 focus:border-primary-500 rounded-none" />
            </div>

            <div className="flex items-center">
               <label className="w-40 text-xs font-semibold text-slate-700">Category:</label>
               <select className="flex-1 text-xs border-slate-400 py-1 px-2 border focus:ring-0 focus:border-primary-500 rounded-none">
                 <option>Hematology</option>
                 <option>Biochemistry</option>
               </select>
            </div>

            <div className="flex items-center">
               <label className="w-40 text-xs font-semibold text-slate-700">Sample Type:</label>
               <select className="flex-1 text-xs border-slate-400 py-1 px-2 border focus:ring-0 focus:border-primary-500 rounded-none">
                 <option>Whole Blood</option>
                 <option>Serum</option>
               </select>
            </div>

            <div className="flex items-center">
              <label className="w-40 text-xs font-semibold text-slate-700">Method:</label>
              <input type="text" className="flex-1 text-xs border-slate-400 p-1 border focus:ring-0 focus:border-primary-500 rounded-none" />
            </div>

            <div className="flex items-center">
              <label className="w-40 text-xs font-semibold text-slate-700">Default Unit:</label>
              <input type="text" className="flex-1 text-xs border-slate-400 p-1 border focus:ring-0 focus:border-primary-500 rounded-none" />
            </div>

            <div className="flex items-center">
              <label className="w-40 text-xs font-semibold text-slate-700">Test Price (Base):</label>
              <div className="flex flex-1 items-center border border-slate-400 bg-white">
                <span className="px-2 text-xs text-slate-500 border-r border-slate-400">₹</span>
                <input type="text" className="w-full text-xs p-1 outline-none border-none focus:ring-0 rounded-none" placeholder="0.00" />
              </div>
            </div>

            <div className="flex items-center col-span-1 md:col-span-2">
              <label className="w-40 text-xs font-semibold text-slate-700">Bio Ref Range:</label>
              <input type="text" className="flex-1 text-xs border-slate-400 p-1 border focus:ring-0 focus:border-primary-500 rounded-none" />
            </div>
            
          </div>
        </div>

        <div className="flex justify-end gap-2 border-t border-slate-400 pt-2 mt-2">
          <button type="button" className="bg-slate-200 py-1 px-4 border border-slate-500 text-xs font-semibold text-slate-800 hover:bg-slate-300 rounded-none">
            Clear
          </button>
          <button type="submit" className="bg-primary-600 py-1 px-4 border border-primary-800 text-xs font-semibold text-white hover:bg-primary-700 rounded-none">
            Save
          </button>
        </div>

      </form>
    </div>
  );
}
