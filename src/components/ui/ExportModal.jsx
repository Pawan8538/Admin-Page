import { Download } from 'lucide-react';
import Modal from './Modal';

export default function ExportModal({ isOpen, onClose, entityName }) {
  const handleExport = (e) => {
    e.preventDefault();
    // Simulate export
    alert(`Exporting ${entityName} data...`);
    onClose();
  };

  return (
    <Modal title={`Export ${entityName}`} isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleExport} className="space-y-3 p-2 bg-white border border-slate-300">
        
        <div className="flex items-center gap-2">
           <label className="w-24 text-xs font-bold text-slate-700">Format:</label>
           <select className="flex-1 text-xs border border-slate-400 p-1.5 focus:ring-0 outline-none">
             <option>Excel (.xlsx)</option>
             <option>CSV (.csv)</option>
             <option>Detailed PDF (.pdf)</option>
           </select>
        </div>

        <div className="flex items-center gap-2">
           <label className="w-24 text-xs font-bold text-slate-700">Date Range:</label>
           <select className="flex-1 text-xs border border-slate-400 p-1.5 focus:ring-0 outline-none">
             <option>All Data</option>
             <option>Last 30 Days</option>
             <option>Current Month</option>
             <option>Custom Range</option>
           </select>
        </div>

        <div className="flex items-center gap-2">
           <label className="w-24 text-xs font-bold text-slate-700">Include Columns:</label>
           <div className="flex-1 text-xs flex gap-4 border border-slate-300 bg-slate-50 p-2">
             <label className="flex items-center gap-1"><input type="checkbox" defaultChecked /> Standard</label>
             <label className="flex items-center gap-1"><input type="checkbox" /> All Attributes</label>
           </div>
        </div>

        <div className="border-t border-slate-300 pt-2 mt-2 flex justify-end gap-2">
           <button type="button" onClick={onClose} className="bg-slate-300 px-4 py-1.5 text-xs font-bold text-slate-800 border border-slate-500">Cancel</button>
           <button type="submit" className="bg-primary-600 px-4 py-1.5 text-xs font-bold text-white border border-primary-800 hover:bg-primary-700 flex items-center gap-1">
             <Download className="w-3 h-3" /> Execute Export
           </button>
        </div>

      </form>
    </Modal>
  );
}
