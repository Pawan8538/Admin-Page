import { useState } from 'react';
import { Save } from 'lucide-react';
import Modal from './Modal';

export default function AddEmployeeModal({ isOpen, onClose, onAdd }) {
  const [formData, setFormData] = useState({
    id: `EMP-${Math.floor(Math.random() * 900) + 100}`,
    name: '', department: 'Pathology', role: 'Technician', status: 'Active'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name) {
      onAdd({ ...formData });
      setFormData({
        id: `EMP-${Math.floor(Math.random() * 900) + 100}`,
        name: '', department: 'Pathology', role: 'Technician', status: 'Active'
      });
      onClose();
    }
  };

  return (
    <Modal title="Add New Employee" isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit} className="p-2 space-y-2 border border-slate-300 bg-white">
        <div className="flex items-center">
           <label className="w-24 text-xs font-bold text-slate-700">Emp ID:</label>
           <input type="text" value={formData.id} readOnly className="flex-1 text-xs border border-slate-400 p-1 bg-slate-100" />
        </div>
        <div className="flex items-center">
           <label className="w-24 text-xs font-bold text-slate-700">Full Name:</label>
           <input type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required className="flex-1 text-xs border border-slate-400 p-1 outline-none" />
        </div>
        <div className="flex items-center">
           <label className="w-24 text-xs font-bold text-slate-700">Department:</label>
           <select value={formData.department} onChange={e => setFormData({...formData, department: e.target.value})} className="flex-1 text-xs border border-slate-400 p-1 outline-none">
              <option>Pathology</option><option>Billing</option><option>Admin</option><option>Support</option>
           </select>
        </div>
        <div className="flex items-center">
           <label className="w-24 text-xs font-bold text-slate-700">Role:</label>
           <select value={formData.role} onChange={e => setFormData({...formData, role: e.target.value})} className="flex-1 text-xs border border-slate-400 p-1 outline-none">
              <option>Technician</option><option>Pathologist</option><option>Cashier</option><option>Manager</option>
           </select>
        </div>

        <div className="border-t border-slate-300 pt-2 mt-2 flex justify-end gap-2">
           <button type="button" onClick={onClose} className="bg-slate-300 px-4 py-1 text-xs font-bold text-slate-800 border border-slate-500">Cancel</button>
           <button type="submit" className="bg-primary-600 px-4 py-1 text-xs font-bold text-white border border-primary-800 flex items-center gap-1 hover:bg-primary-700">
             <Save className="w-3 h-3" /> Save Employee
           </button>
        </div>
      </form>
    </Modal>
  );
}
