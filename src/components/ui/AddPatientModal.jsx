import { useState } from 'react';
import { Save } from 'lucide-react';
import Modal from './Modal';

export default function AddPatientModal({ isOpen, onClose, onAdd }) {
  const [formData, setFormData] = useState({
    id: `PID-${Math.floor(Math.random() * 9000) + 1000}`,
    name: '', category: 'General', gender: 'M', blood: 'O+', mobile: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name) {
      onAdd({ ...formData });
      setFormData({
        id: `PID-${Math.floor(Math.random() * 9000) + 1000}`,
        name: '', category: 'General', gender: 'M', blood: 'O+', mobile: ''
      });
      onClose();
    }
  };

  return (
    <Modal title="Add New Patient" isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit} className="p-2 space-y-2 border border-slate-300 bg-white">
        <div className="flex items-center">
           <label className="w-24 text-xs font-bold text-slate-700">Patient ID:</label>
           <input type="text" value={formData.id} readOnly className="flex-1 text-xs border border-slate-400 p-1 bg-slate-100" />
        </div>
        <div className="flex items-center">
           <label className="w-24 text-xs font-bold text-slate-700">Full Name:</label>
           <input type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required className="flex-1 text-xs border border-slate-400 p-1 outline-none" />
        </div>
        <div className="flex items-center">
           <label className="w-24 text-xs font-bold text-slate-700">Category:</label>
           <select value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} className="flex-1 text-xs border border-slate-400 p-1 outline-none">
              <option>General</option>
              <option>Senior</option>
              <option>Pediatric</option>
              <option>VIP</option>
           </select>
        </div>
        <div className="flex items-center gap-2">
           <div className="flex items-center flex-1">
             <label className="w-24 text-xs font-bold text-slate-700">Gender:</label>
             <select value={formData.gender} onChange={e => setFormData({...formData, gender: e.target.value})} className="flex-1 text-xs border border-slate-400 p-1 outline-none">
                <option>M</option><option>F</option><option>O</option>
             </select>
           </div>
           <div className="flex items-center flex-1">
             <label className="w-16 text-xs font-bold text-slate-700 border-l border-slate-300 pl-2">Blood :</label>
             <select value={formData.blood} onChange={e => setFormData({...formData, blood: e.target.value})} className="flex-1 text-xs border border-slate-400 p-1 outline-none">
                <option>O+</option><option>A+</option><option>B+</option><option>AB+</option><option>O-</option><option>A-</option><option>B-</option><option>AB-</option>
             </select>
           </div>
        </div>
        <div className="flex items-center">
           <label className="w-24 text-xs font-bold text-slate-700">Mobile:</label>
           <input type="tel" value={formData.mobile} onChange={e => setFormData({...formData, mobile: e.target.value})} required className="flex-1 text-xs border border-slate-400 p-1 outline-none" />
        </div>

        <div className="border-t border-slate-300 pt-2 mt-2 flex justify-end gap-2">
           <button type="button" onClick={onClose} className="bg-slate-300 px-4 py-1 text-xs font-bold text-slate-800 border border-slate-500">Cancel</button>
           <button type="submit" className="bg-primary-600 px-4 py-1 text-xs font-bold text-white border border-primary-800 flex items-center gap-1 hover:bg-primary-700">
             <Save className="w-3 h-3" /> Save Patient
           </button>
        </div>
      </form>
    </Modal>
  );
}
