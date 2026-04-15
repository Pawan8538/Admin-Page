import { X } from 'lucide-react';

export default function Modal({ title, isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/60 z-[100] flex justify-center items-start pt-20 pb-4 overflow-y-auto px-4">
      <div className="bg-white max-w-2xl w-full border-2 border-slate-500 shadow-2xl relative">
        {/* Header */}
        <div className="bg-slate-800 text-white p-2 flex justify-between items-center">
          <h2 className="text-sm font-bold uppercase tracking-wide">{title}</h2>
          <button onClick={onClose} className="p-1 hover:bg-slate-700 text-white border-none outline-none">
            <X className="w-4 h-4" />
          </button>
        </div>
        
        {/* Body Content */}
        <div className="p-2 bg-slate-50">
          {children}
        </div>
      </div>
    </div>
  );
}
