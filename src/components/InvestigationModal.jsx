import { X, Printer, Camera } from 'lucide-react';

export default function InvestigationModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-slate-900/60 z-50 flex justify-center items-start overflow-y-auto p-4">
      <div className="bg-white max-w-7xl w-full border-2 border-slate-500 shadow-xl mt-4 relative">
        
        {/* Header */}
        <div className="bg-slate-800 text-white p-2 flex justify-between items-center">
          <h2 className="text-lg font-bold">Test Results</h2>
          <button onClick={onClose} className="p-1 hover:bg-slate-700 text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Patient Info Bar */}
        <div className="bg-slate-100 p-2 border-b-2 border-slate-400 flex flex-wrap justify-between items-center text-xs font-bold text-slate-800 gap-2">
          <div>
            <span>ID : 230323004</span> <span className="text-primary-800 ml-2">Mr. Demo Test</span>
            <span className="ml-4">M-30(Y)</span>
          </div>
          <div>
            Center : <span className="text-primary-800">Enterprise Elabassist</span>
          </div>
          <div>
            Ref Dr. : <span className="text-primary-800">Dr. David Wilson</span>
          </div>
          <div>
            Regn Date : <span>23-03-2023 15:14:00</span>
          </div>
          <div className="flex gap-1 ml-auto">
            <button className="border border-slate-500 px-2 py-0.5 bg-slate-200">Test Registration</button>
            <button className="border border-slate-500 px-2 py-0.5 bg-slate-200">{'<<'}</button>
            <button className="border border-slate-500 px-2 py-0.5 bg-slate-200">{'>>'}</button>
            <button className="border border-slate-500 px-2 py-0.5 bg-slate-200">SMS</button>
          </div>
        </div>

        {/* Barcode & Top Actions */}
        <div className="p-2 flex justify-between items-center border-b border-slate-300">
          <div className="flex items-center gap-2">
            <label className="text-xs font-bold text-slate-700">Barcode</label>
            <input type="text" className="border border-slate-400 w-32 px-1 text-xs outline-none" />
          </div>
          <div className="flex items-center gap-4 text-xs">
             <label className="flex items-center gap-1"><input type="checkbox" /> Show Header</label>
             <a href="#" className="text-blue-600 underline">Patient History ☆</a>
             <a href="#" className="text-blue-600 underline">Manage Barcode</a>
             <button className="border border-slate-500 px-4 py-0.5 bg-slate-200 font-bold">Print</button>
          </div>
        </div>

        {/* Test List Selection */}
        <div className="p-2 border-b-2 border-slate-400 bg-slate-50 flex items-center justify-between">
          <div className="border border-slate-300 bg-white p-2 flex gap-4 w-2/3">
             <span className="text-xs font-bold text-slate-500 -mt-4 bg-white px-1 absolute">Test List</span>
             <label className="flex items-center gap-1 text-xs font-bold text-slate-800"><input type="checkbox" defaultChecked /> COMPLETE BLOOD COUNT</label>
             <label className="flex items-center gap-1 text-xs font-bold text-slate-800"><input type="checkbox" defaultChecked /> LIVER FUNCTION TEST</label>
          </div>
          <div className="flex gap-2">
            <button className="border border-slate-500 px-3 py-1 bg-slate-200 text-xs font-bold">Show TRF</button>
            <button className="border border-slate-500 px-3 py-1 bg-slate-200 text-xs font-bold flex items-center gap-1">
              Attachments to Report <Camera className="w-3 h-3"/>
            </button>
          </div>
        </div>

        {/* Main Grid */}
        <div className="overflow-x-auto min-h-[400px]">
          <table className="w-full text-xs text-left border-collapse">
            <thead className="bg-slate-200 text-slate-800 font-bold border-b-2 border-slate-400">
              <tr>
                <th className="p-1 border-r border-slate-300 w-64">Parameter Name</th>
                <th className="p-1 border-r border-slate-300 w-64 text-center">Value</th>
                <th className="p-1 border-r border-slate-300 text-center w-24">Unit</th>
                <th className="p-1 border-r border-slate-300 text-center w-24">Normal Range</th>
                <th className="p-1 border-r border-slate-300 text-center w-20">History</th>
                <th className="p-1 border-r border-slate-300 text-center w-20">Critical Low</th>
                <th className="p-1 border-r border-slate-300 text-center w-20">Critical High</th>
                <th className="p-1 text-center w-20">Cancel Test</th>
              </tr>
            </thead>
            
            <tbody>
              {/* Category Header Row */}
              <tr className="bg-blue-50 border-b border-slate-300 text-[11px]">
                <td className="p-1 text-primary-800 font-bold uppercase" colSpan={1}>
                  COMPLETE BLOOD COUNT <span className="text-slate-400">(230323004)</span>
                </td>
                <td className="p-1 flex items-center gap-2 justify-center border-l bg-white">
                  <label className="flex items-center gap-1 text-blue-600 font-bold"><input type="checkbox" defaultChecked/> Add Attachments with Print</label>
                  <span className="bg-green-500 text-white px-2 py-0.5 rounded-full font-bold">Normal</span>
                </td>
                <td className="p-1 border-l text-center"><select className="border border-slate-300 bg-slate-100 px-1 py-0.5"><option>Technician Authorize</option></select></td>
                <td className="p-1 border-l text-center"><button className="text-slate-400 bg-slate-100 border border-slate-300 px-2 py-0.5" disabled>Edit Test</button></td>
                <td className="p-1 border-l text-center"><div className="flex gap-1 justify-center"><Printer className="w-4 h-4 text-slate-600"/><Camera className="w-4 h-4 text-blue-600"/></div></td>
                <td className="p-1 border-l text-center font-bold">0.00</td>
                <td className="p-1 border-l text-center font-bold">1000.00</td>
                <td className="p-1 border-l text-center font-bold text-slate-600">C</td>
              </tr>

              {/* Data Rows */}
              <tr className="border-b border-dashed border-slate-300">
                <td className="p-1 pl-4 font-semibold text-slate-800">Haemoglobin (HB)</td>
                <td className="p-1"><input type="text" className="w-full border-2 border-slate-600 p-0.5 bg-slate-200 outline-none focus:bg-white" /></td>
                <td className="p-1 text-center text-slate-600 font-bold">gm/dl</td>
                <td className="p-1 text-center">13.5-19.5</td>
                <td className="p-1 text-center"></td>
                <td className="p-1 text-center text-red-600">0.00</td>
                <td className="p-1 text-center text-red-600">1000.00</td>
                <td className="p-1"></td>
              </tr>

              <tr className="border-b border-dashed border-slate-300">
                <td className="p-1 pl-4 font-semibold text-slate-800 flex flex-col"><span>Mean Corpuscular</span><span>Volume (MCV)</span></td>
                <td className="p-1 flex items-center gap-1">
                   <input type="text" className="flex-1 border border-slate-400 p-0.5 outline-none" />
                   <span className="border border-slate-400 px-1 bg-slate-100 text-slate-600 font-bold">F</span>
                </td>
                <td className="p-1 text-center text-slate-600 font-bold">fl</td>
                <td className="p-1 text-center">78-100</td>
                <td className="p-1 text-center"></td>
                <td className="p-1 text-center text-red-600">0.00</td>
                <td className="p-1 text-center text-red-600">1000.00</td>
                <td className="p-1"></td>
              </tr>

              <tr className="border-b border-dashed border-slate-300">
                <td className="p-1 pl-4 font-semibold text-slate-800 flex flex-col"><span>Packed Cell Volume</span><span>(PCV/HCT)</span></td>
                <td className="p-1"><input type="text" className="w-full border border-slate-400 p-0.5 outline-none" /></td>
                <td className="p-1 text-center text-slate-600 font-bold">%</td>
                <td className="p-1 text-center">42-52</td>
                <td className="p-1 text-center"></td>
                <td className="p-1 text-center text-red-600">0.00</td>
                <td className="p-1 text-center text-red-600">1000.00</td>
                <td className="p-1"></td>
              </tr>
              
              <tr className="border-b border-dashed border-slate-300">
                <td className="p-1 pl-4 font-semibold text-slate-800">Red Blood Cells (RBC)</td>
                <td className="p-1"><input type="text" className="w-full border border-slate-400 p-0.5 outline-none" /></td>
                <td className="p-1 text-center text-slate-600 font-bold">mill/cumm</td>
                <td className="p-1 text-center">4.7-6</td>
                <td className="p-1 text-center"></td>
                <td className="p-1 text-center text-red-600">10.00</td>
                <td className="p-1 text-center text-red-600">10.00</td>
                <td className="p-1"></td>
              </tr>
              
              <tr className="border-b border-dashed border-slate-300">
                <td className="p-1 pl-4 font-semibold text-slate-800">Mean Corp. Hemo. Conc.<br/>(MCHC)</td>
                <td className="p-1 flex items-center gap-1">
                   <input type="text" className="flex-1 border border-slate-400 p-0.5 outline-none" />
                   <span className="border border-slate-400 px-1 bg-slate-100 text-slate-600 font-bold">F</span>
                </td>
                <td className="p-1 text-center text-slate-600 font-bold">g/dl</td>
                <td className="p-1 text-center">32-36</td>
                <td className="p-1 text-center"></td>
                <td className="p-1 text-center text-red-600">0.00</td>
                <td className="p-1 text-center text-red-600">1000.00</td>
                <td className="p-1"></td>
              </tr>
              
              <tr className="border-b border-dashed border-slate-300">
                <td className="p-1 pl-4 font-semibold text-slate-800">Mean Corpuscular<br/>Hemoglobin(MCH)</td>
                <td className="p-1 flex items-center gap-1">
                   <input type="text" className="flex-1 border border-slate-400 p-0.5 outline-none" />
                   <span className="border border-slate-400 px-1 bg-slate-100 text-slate-600 font-bold">F</span>
                </td>
                <td className="p-1 text-center text-slate-600 font-bold">pg</td>
                <td className="p-1 text-center">27-31</td>
                <td className="p-1 text-center"></td>
                <td className="p-1 text-center text-red-600">0.00</td>
                <td className="p-1 text-center text-red-600">1000.00</td>
                <td className="p-1"></td>
              </tr>

            </tbody>
          </table>
        </div>
        
        {/* Footer actions */}
        <div className="bg-slate-200 p-2 border-t-2 border-slate-400 flex justify-end gap-2">
           <button onClick={onClose} className="px-4 py-1 text-xs border border-slate-500 bg-white hover:bg-slate-100 font-bold text-slate-800">Cancel</button>
           <button className="px-4 py-1 text-xs border border-green-800 bg-green-600 hover:bg-green-700 text-white font-bold">Save and Authorize</button>
        </div>

      </div>
    </div>
  );
}
