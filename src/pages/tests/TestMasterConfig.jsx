export default function TestMasterConfig() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800">Test Master Configuration</h1>
        <p className="text-slate-500 mt-1">Configure global parameters and pricing for a lab test.</p>
      </div>

      <form className="bg-white shadow-sm border border-slate-200 rounded-lg p-6 space-y-8">
        
        {/* Basic Config */}
        <div>
          <h3 className="text-lg leading-6 font-medium text-slate-900 mb-4 pb-2 border-b border-slate-100">Test Information</h3>
          <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="testName" className="block text-sm font-medium text-slate-700">Test Name</label>
              <div className="mt-1">
                <input type="text" id="testName" className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-slate-300 rounded-md p-2 border" placeholder="Complete Blood Count" />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="testCode" className="block text-sm font-medium text-slate-700">Test Code / Short Name</label>
              <div className="mt-1">
                <input type="text" id="testCode" className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-slate-300 rounded-md p-2 border" placeholder="CBC" />
              </div>
            </div>

            <div className="sm:col-span-3">
               <label htmlFor="category" className="block text-sm font-medium text-slate-700">Category (Department)</label>
               <select id="category" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-slate-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md border">
                 <option>Hematology</option>
                 <option>Biochemistry</option>
                 <option>Clinical Pathology</option>
                 <option>Microbiology</option>
               </select>
            </div>

            <div className="sm:col-span-3">
               <label htmlFor="sample" className="block text-sm font-medium text-slate-700">Sample Type</label>
               <select id="sample" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-slate-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md border">
                 <option>Whole Blood</option>
                 <option>Serum</option>
                 <option>Urine</option>
                 <option>Plasma</option>
               </select>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="method" className="block text-sm font-medium text-slate-700">Method</label>
              <div className="mt-1">
                <input type="text" id="method" className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-slate-300 rounded-md p-2 border" />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="unit" className="block text-sm font-medium text-slate-700">Default Unit</label>
              <div className="mt-1">
                <input type="text" id="unit" className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-slate-300 rounded-md p-2 border" />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="refRange" className="block text-sm font-medium text-slate-700">Bio Reference Range (Global Text)</label>
              <div className="mt-1">
                <input type="text" id="refRange" className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-slate-300 rounded-md p-2 border" />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="price" className="block text-sm font-medium text-slate-700">Test Price (Base)</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-slate-500 sm:text-sm">₹</span>
                </div>
                <input type="text" id="price" className="focus:ring-primary-500 focus:border-primary-500 block w-full pl-7 sm:text-sm border-slate-300 rounded-md p-2 border" placeholder="0.00" />
              </div>
            </div>
            
          </div>
        </div>

        <div className="pt-5 border-t border-slate-200">
          <div className="flex justify-end gap-3">
            <button type="button" className="bg-white py-2 px-4 border border-slate-300 rounded-md shadow-sm text-sm font-medium text-slate-700 hover:bg-slate-50">
              Clear
            </button>
            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700">
              Save Configuration
            </button>
          </div>
        </div>

      </form>
    </div>
  );
}
