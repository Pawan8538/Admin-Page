import { X, Printer, Camera } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export default function InvestigationModal({ onClose }) {
  const [storedResults, setStoredResults] = useLocalStorage('elab_demo_investigation', {
    showCBC: true,
    showLFT: true,
    wbc: '', rbc: '', hgb: '', hct: '',
    bilirubin: '', sgpt: '', alkPhos: '', totalProtein: ''
  });

  const [formData, setFormData] = useState(storedResults);

  useEffect(() => {
    setFormData(storedResults);
  }, [storedResults]);

  const handleSave = () => {
    setStoredResults(formData);
    alert('Test results saved and authorized!');
    onClose();
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 z-50 flex justify-center items-start overflow-y-auto p-4">
      <div className="bg-white max-w-7xl w-full border-2 border-slate-500 shadow-xl mt-4 relative">
        
        {/* Header */}
        <div className="bg-slate-800 text-white p-2 flex justify-between items-center">
          <h2 className="text-lg font-bold">Test Results Entry</h2>
          <button onClick={onClose} className="p-1 hover:bg-slate-700 text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Patient Info Bar */}
        <div className="bg-slate-100 p-2 border-b-2 border-slate-400 flex flex-wrap justify-between items-center text-xs font-bold text-slate-800 gap-2">
          <div>
            <span>ID : 230323004</span> <span className="text-primary-800 ml-2">Mr. Dummy Patient</span>
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
             <span className="text-xs font-bold text-slate-500 -mt-4 bg-white px-1 absolute">Active Test Panels</span>
             <label className="flex items-center gap-1 text-xs font-bold text-slate-800">
               <input type="checkbox" name="showCBC" checked={formData.showCBC} onChange={handleChange} /> 
               COMPLETE BLOOD COUNT (CBC)
             </label>
             <label className="flex items-center gap-1 text-xs font-bold text-slate-800">
               <input type="checkbox" name="showLFT" checked={formData.showLFT} onChange={handleChange} /> 
               LIVER FUNCTION TEST (LFT)
             </label>
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
                <th className="p-1 border-r border-slate-300 text-center w-32">Standard Range</th>
                <th className="p-1 border-r border-slate-300 text-center w-20">History</th>
                <th className="p-1 border-r border-slate-300 text-center w-20">Crit Low</th>
                <th className="p-1 border-r border-slate-300 text-center w-20">Crit High</th>
                <th className="p-1 text-center w-20">Cancel Test</th>
              </tr>
            </thead>
            
            <tbody>
              {/* === COMPLETE BLOOD COUNT SECTION === */}
              {formData.showCBC && (
                <>
                  <tr className="bg-blue-50 border-b border-slate-300 text-[11px]">
                    <td className="p-1 text-primary-800 font-bold uppercase" colSpan={1}>
                      COMPLETE BLOOD COUNT <span className="text-slate-400">(230323004)</span>
                    </td>
                    <td className="p-1 flex items-center gap-2 justify-center border-l bg-white">
                      <label className="flex items-center gap-1 text-blue-600 font-bold"><input type="checkbox" defaultChecked/> Add Attachments</label>
                      <span className="bg-green-500 text-white px-2 py-0.5 rounded-full font-bold">Normal</span>
                    </td>
                    <td className="p-1 border-l text-center"><select className="border border-slate-300 bg-slate-100 px-1 py-0.5"><option>Tech Authorize</option></select></td>
                    <td className="p-1 border-l text-center"><button className="text-slate-400 bg-slate-100 border border-slate-300 px-2 py-0.5" disabled>Edit Test</button></td>
                    <td className="p-1 border-l text-center"><div className="flex gap-1 justify-center"><Printer className="w-4 h-4 text-slate-600"/><Camera className="w-4 h-4 text-blue-600"/></div></td>
                    <td className="p-1 border-l text-center font-bold">0.0</td>
                    <td className="p-1 border-l text-center font-bold">0.0</td>
                    <td className="p-1 border-l text-center font-bold text-slate-600">C</td>
                  </tr>

                  <tr className="border-b border-dashed border-slate-300">
                    <td className="p-1 pl-4 font-semibold text-slate-800">White Blood Cell Count</td>
                    <td className="p-1"><input type="text" name="wbc" value={formData.wbc} onChange={handleChange} className="w-full border-2 border-slate-600 p-0.5 bg-slate-100 outline-none focus:bg-white" /></td>
                    <td className="p-1 text-center text-slate-600 font-bold">K/uL</td>
                    <td className="p-1 text-center font-semibold">4.0 - 11.0</td>
                    <td className="p-1 text-center"></td>
                    <td className="p-1 text-center text-red-600">2.0</td>
                    <td className="p-1 text-center text-red-600">30.0</td>
                    <td className="p-1"></td>
                  </tr>

                  <tr className="border-b border-dashed border-slate-300">
                    <td className="p-1 pl-4 font-semibold text-slate-800">Red Blood Cell Count</td>
                    <td className="p-1"><input type="text" name="rbc" value={formData.rbc} onChange={handleChange} className="w-full border-2 border-slate-600 p-0.5 bg-slate-100 outline-none focus:bg-white" /></td>
                    <td className="p-1 text-center text-slate-600 font-bold">M/uL</td>
                    <td className="p-1 text-center font-semibold">4.40 - 6.00</td>
                    <td className="p-1 text-center"></td>
                    <td className="p-1 text-center text-red-600">2.5</td>
                    <td className="p-1 text-center text-red-600">8.0</td>
                    <td className="p-1"></td>
                  </tr>

                  <tr className="border-b border-dashed border-slate-300">
                    <td className="p-1 pl-4 font-semibold text-slate-800">Hemoglobin</td>
                    <td className="p-1"><input type="text" name="hgb" value={formData.hgb} onChange={handleChange} className="w-full border-2 border-slate-600 p-0.5 bg-slate-100 outline-none focus:bg-white" /></td>
                    <td className="p-1 text-center text-slate-600 font-bold">g/dL</td>
                    <td className="p-1 text-center font-semibold">13.5 - 18.0</td>
                    <td className="p-1 text-center"></td>
                    <td className="p-1 text-center text-red-600">7.0</td>
                    <td className="p-1 text-center text-red-600">21.0</td>
                    <td className="p-1"></td>
                  </tr>

                  <tr className="border-b border-dashed border-slate-300">
                    <td className="p-1 pl-4 font-semibold text-slate-800">Hematocrit</td>
                    <td className="p-1"><input type="text" name="hct" value={formData.hct} onChange={handleChange} className="w-full border-2 border-slate-600 p-0.5 bg-slate-100 outline-none focus:bg-white" /></td>
                    <td className="p-1 text-center text-slate-600 font-bold">%</td>
                    <td className="p-1 text-center font-semibold">40.0 - 52.0</td>
                    <td className="p-1 text-center"></td>
                    <td className="p-1 text-center text-red-600">20.0</td>
                    <td className="p-1 text-center text-red-600">60.0</td>
                    <td className="p-1"></td>
                  </tr>
                </>
              )}

              {/* === LIVER FUNCTION TEST SECTION === */}
              {formData.showLFT && (
                <>
                  <tr className="bg-amber-50 border-b border-slate-300 text-[11px]">
                    <td className="p-1 text-amber-800 font-bold uppercase" colSpan={1}>
                      LIVER FUNCTION TEST (LFT) <span className="text-slate-400">(230323004)</span>
                    </td>
                    <td className="p-1 flex items-center gap-2 justify-center border-l bg-white">
                      <label className="flex items-center gap-1 text-blue-600 font-bold"><input type="checkbox" defaultChecked/> Add Attachments</label>
                      <span className="bg-green-500 text-white px-2 py-0.5 rounded-full font-bold">Normal</span>
                    </td>
                    <td className="p-1 border-l text-center"><select className="border border-slate-300 bg-slate-100 px-1 py-0.5"><option>Tech Authorize</option></select></td>
                    <td className="p-1 border-l text-center"><button className="text-slate-400 bg-slate-100 border border-slate-300 px-2 py-0.5" disabled>Edit Test</button></td>
                    <td className="p-1 border-l text-center"><div className="flex gap-1 justify-center"><Printer className="w-4 h-4 text-slate-600"/><Camera className="w-4 h-4 text-blue-600"/></div></td>
                    <td className="p-1 border-l text-center font-bold">0.0</td>
                    <td className="p-1 border-l text-center font-bold">0.0</td>
                    <td className="p-1 border-l text-center font-bold text-slate-600">C</td>
                  </tr>

                  <tr className="border-b border-dashed border-slate-300">
                    <td className="p-1 pl-4 font-semibold text-slate-800">BILIRUBIN TOTAL</td>
                    <td className="p-1"><input type="text" name="bilirubin" value={formData.bilirubin} onChange={handleChange} className="w-full border-2 border-slate-600 p-0.5 bg-slate-100 outline-none focus:bg-white" /></td>
                    <td className="p-1 text-center text-slate-600 font-bold">mg/dL</td>
                    <td className="p-1 text-center font-semibold">0.1 - 1.2</td>
                    <td className="p-1 text-center"></td>
                    <td className="p-1 text-center text-red-600">0.0</td>
                    <td className="p-1 text-center text-red-600">5.0</td>
                    <td className="p-1"></td>
                  </tr>

                  <tr className="border-b border-dashed border-slate-300">
                    <td className="p-1 pl-4 font-semibold text-slate-800">SGPT</td>
                    <td className="p-1"><input type="text" name="sgpt" value={formData.sgpt} onChange={handleChange} className="w-full border-2 border-slate-600 p-0.5 bg-slate-100 outline-none focus:bg-white" /></td>
                    <td className="p-1 text-center text-slate-600 font-bold">IU/L</td>
                    <td className="p-1 text-center font-semibold">7 - 55</td>
                    <td className="p-1 text-center"></td>
                    <td className="p-1 text-center text-red-600">2</td>
                    <td className="p-1 text-center text-red-600">200</td>
                    <td className="p-1"></td>
                  </tr>

                  <tr className="border-b border-dashed border-slate-300">
                    <td className="p-1 pl-4 font-semibold text-slate-800">ALKALINE PHOSPHATASE</td>
                    <td className="p-1"><input type="text" name="alkPhos" value={formData.alkPhos} onChange={handleChange} className="w-full border-2 border-slate-600 p-0.5 bg-slate-100 outline-none focus:bg-white" /></td>
                    <td className="p-1 text-center text-slate-600 font-bold">U/L</td>
                    <td className="p-1 text-center font-semibold">35 - 140</td>
                    <td className="p-1 text-center"></td>
                    <td className="p-1 text-center text-red-600">10</td>
                    <td className="p-1 text-center text-red-600">500</td>
                    <td className="p-1"></td>
                  </tr>

                  <tr className="border-b border-dashed border-slate-300">
                    <td className="p-1 pl-4 font-semibold text-slate-800">TOTAL PROTEINS</td>
                    <td className="p-1"><input type="text" name="totalProtein" value={formData.totalProtein} onChange={handleChange} className="w-full border-2 border-slate-600 p-0.5 bg-slate-100 outline-none focus:bg-white" /></td>
                    <td className="p-1 text-center text-slate-600 font-bold">gm/dL</td>
                    <td className="p-1 text-center font-semibold">6.2 - 8.0</td>
                    <td className="p-1 text-center"></td>
                    <td className="p-1 text-center text-red-600">4.0</td>
                    <td className="p-1 text-center text-red-600">12.0</td>
                    <td className="p-1"></td>
                  </tr>
                </>
              )}

              {!formData.showCBC && !formData.showLFT && (
                <tr>
                   <td colSpan={8} className="p-4 text-center font-bold text-slate-500">
                     No tests selected. Please check a test panel above to input results.
                   </td>
                </tr>
              )}

            </tbody>
          </table>
        </div>
        
        {/* Footer actions */}
        <div className="bg-slate-200 p-2 border-t-2 border-slate-400 flex justify-end gap-2">
           <button onClick={onClose} className="px-4 py-1 text-xs border border-slate-500 bg-white hover:bg-slate-100 font-bold text-slate-800">Cancel</button>
           <button onClick={handleSave} className="px-4 py-1 text-xs border border-green-800 bg-green-600 hover:bg-green-700 text-white font-bold">Save and Authorize</button>
        </div>

      </div>
    </div>
  );
}
