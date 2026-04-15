import { Upload } from 'lucide-react';
import Modal from './Modal';

export default function ImportModal({ isOpen, onClose, entityName, onImport }) {
  const handleImport = (e) => {
    e.preventDefault();
    if (onImport) onImport();
    onClose();
  };

  return (
    <Modal title={`Import ${entityName}`} isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleImport} className="space-y-4 p-2 bg-white border border-slate-300">
        
        <div className="bg-blue-50 border border-blue-200 p-2 text-xs text-blue-800 mb-2 font-semibold">
           Please ensure your CSV or Excel file exactly matches the latest system template. <a href="#" className="underline">Download Template</a>
        </div>

        <div className="flex flex-col gap-2">
           <label className="text-xs font-bold text-slate-800">Select File from Computer:</label>
           <div className="border border-dashed border-slate-400 bg-slate-100 p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-slate-200 transition-colors">
              <Upload className="w-8 h-8 text-slate-500 mb-2" />
              <span className="text-xs text-slate-700 font-bold">Click to browse or drag file here</span>
              <span className="text-[10px] text-slate-500 mt-1">.csv, .xlsx max 5MB</span>
           </div>
        </div>

        <div className="border-t border-slate-300 pt-2 flex justify-end gap-2">
           <button type="button" onClick={onClose} className="bg-slate-300 px-4 py-1.5 text-xs font-bold text-slate-800 border border-slate-500">Cancel</button>
           <button type="submit" className="bg-green-600 px-4 py-1.5 text-xs font-bold text-white border border-green-800 hover:bg-green-700 flex items-center gap-1">
             <Upload className="w-3 h-3" /> Upload & Process
           </button>
        </div>
      </form>
    </Modal>
  );
}
