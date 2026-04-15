import { useState } from 'react';
import { Search, Plus, Save } from 'lucide-react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import Modal from '../../components/ui/Modal';

const initialDummyTests = [
  { code: 'T-CB-01', name: 'Complete Blood Count (CBC)', cat: 'Haematology', sample: 'EDTA Blood', method: 'Automated Analyzer', price: 400.00 },
  { code: 'T-CH-01', name: 'Liver Function Test (LFT)', cat: 'Biochemistry', sample: 'Serum', method: 'Spectrophotometry', price: 800.00 },
  { code: 'T-CH-02', name: 'Lipid Profile', cat: 'Biochemistry', sample: 'Serum', method: 'Enzymatic', price: 650.00 },
];

function AddTestModal({ isOpen, onClose, onAdd }) {
  const [formData, setFormData] = useState({
    code: `T-XX-${Math.floor(Math.random() * 90) + 10}`,
    name: '', cat: 'Haematology', sample: 'EDTA Blood', method: 'Manual', price: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.price) {
      onAdd({ ...formData, price: parseFloat(formData.price) });
      setFormData({
        code: `T-XX-${Math.floor(Math.random() * 90) + 10}`,
        name: '', cat: 'Haematology', sample: 'EDTA Blood', method: 'Manual', price: ''
      });
      onClose();
    }
  };

  return (
    <Modal title="Add Master Test" isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit} className="p-2 space-y-2 border border-slate-300 bg-white">
        <div className="flex items-center">
           <label className="w-24 text-xs font-bold text-slate-700">Test Code:</label>
           <input type="text" value={formData.code} readOnly className="flex-1 text-xs border border-slate-400 p-1 bg-slate-100" />
        </div>
        <div className="flex items-center">
           <label className="w-24 text-xs font-bold text-slate-700">Test Name:</label>
           <input type="text" value={formData.name} onChange={e=>setFormData({...formData, name: e.target.value})} required className="flex-1 text-xs border border-slate-400 p-1 outline-none" />
        </div>
        <div className="flex items-center">
           <label className="w-24 text-xs font-bold text-slate-700">Category:</label>
           <input type="text" value={formData.cat} onChange={e=>setFormData({...formData, cat: e.target.value})} className="flex-1 text-xs border border-slate-400 p-1 outline-none" />
        </div>
        <div className="flex items-center">
           <label className="w-24 text-xs font-bold text-slate-700">Sample:</label>
           <input type="text" value={formData.sample} onChange={e=>setFormData({...formData, sample: e.target.value})} className="flex-1 text-xs border border-slate-400 p-1 outline-none" />
        </div>
        <div className="flex items-center">
           <label className="w-24 text-xs font-bold text-slate-700">Base Price:</label>
           <input type="number" value={formData.price} onChange={e=>setFormData({...formData, price: e.target.value})} required className="flex-1 text-xs border border-slate-400 p-1 outline-none" />
        </div>
        
        <div className="border-t border-slate-300 pt-2 mt-2 flex justify-end gap-2">
           <button type="button" onClick={onClose} className="bg-slate-300 px-4 py-1 text-xs font-bold text-slate-800 border border-slate-500">Cancel</button>
           <button type="submit" className="bg-green-600 hover:bg-green-700 px-4 py-1 text-xs font-bold text-white border border-green-800 flex items-center gap-1">
             <Save className="w-3 h-3" /> Save Test
           </button>
        </div>
      </form>
    </Modal>
  );
}

export default function TestList() {
  const [tests, setTests] = useLocalStorage('elab_tests', initialDummyTests);
  const [showAdd, setShowAdd] = useState(false);

  const handleDelete = (code) => {
    if (confirm('Delete this test configuration?')) {
      setTests(tests.filter(t => t.code !== code));
    }
  };

  const handleAdd = (newTest) => {
    setTests([...tests, newTest]);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center border-b-2 border-slate-400 pb-1">
        <h1 className="text-lg font-bold text-slate-800 uppercase tracking-wide">Master Tests List</h1>
        <div className="flex gap-2">
          <button onClick={() => setShowAdd(true)} className="flex items-center gap-1 px-3 py-1 bg-primary-600 border border-primary-800 text-xs font-semibold text-white hover:bg-primary-700 rounded-none">
            <Plus className="w-3 h-3" /> Create Blank Test
          </button>
        </div>
      </div>

      <div className="bg-white border-2 border-slate-400 rounded-none">
        
        <div className="p-2 border-b-2 border-slate-400 flex gap-2 bg-slate-200 justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-700">Filter:</span>
            <div className="relative w-64 border border-slate-400 bg-white">
              <Search className="h-3 w-3 text-slate-400 absolute left-2 top-1.5" />
              <input type="text" className="w-full text-xs py-1 pl-6 pr-2 rounded-none focus:ring-0 outline-none border-none" />
            </div>
          </div>
          <span className="text-xs font-bold text-slate-600">{tests.length} Total Tests Found</span>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-300">
            <thead className="bg-slate-300">
              <tr>
                <th className="px-3 py-1 border-r border-slate-400 text-center text-xs font-bold text-slate-800 uppercase w-12">#</th>
                <th className="px-3 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase w-24">Test Code</th>
                <th className="px-3 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">Test Name</th>
                <th className="px-3 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">Category</th>
                <th className="px-3 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">Sample Type</th>
                <th className="px-3 py-1 border-r border-slate-400 text-right text-xs font-bold text-slate-800 uppercase w-24">Price (₹)</th>
                <th className="px-3 py-1 text-center text-xs font-bold text-slate-800 uppercase w-24">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200">
              {tests.length > 0 ? tests.map((test, index) => (
                <tr key={index} className="hover:bg-blue-50">
                  <td className="px-3 py-1 border-r border-slate-300 text-center text-xs text-slate-600">{index + 1}</td>
                  <td className="px-3 py-1 border-r border-slate-300 text-xs font-bold text-primary-800">{test.code}</td>
                  <td className="px-3 py-1 border-r border-slate-300 text-xs font-semibold text-slate-900">{test.name}</td>
                  <td className="px-3 py-1 border-r border-slate-300 text-xs text-slate-700">{test.cat}</td>
                  <td className="px-3 py-1 border-r border-slate-300 text-xs text-slate-700">{test.sample}</td>
                  <td className="px-3 py-1 border-r border-slate-300 text-xs font-bold text-slate-900 text-right">{test.price.toFixed(2)}</td>
                  <td className="px-3 py-1 text-center text-xs">
                    <button className="text-primary-700 hover:text-primary-900 underline mr-2">Config</button>
                    <button onClick={() => handleDelete(test.code)} className="text-red-600 hover:text-red-900 underline font-bold">Del</button>
                  </td>
                </tr>
              )) : (
                <tr><td colSpan="7" className="text-center py-4 text-xs text-slate-500">No tests registered.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      
      <AddTestModal isOpen={showAdd} onClose={() => setShowAdd(false)} onAdd={handleAdd} />
    </div>
  );
}
