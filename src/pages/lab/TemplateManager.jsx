import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Save, Trash2, Edit, FileText } from 'lucide-react';

const mockTemplates = [
  { id: 'TPL-001', name: 'Complete Blood Count (CBC)', fields: 8, category: 'Haematology', lastUsed: '14-04-2026' },
  { id: 'TPL-002', name: 'Liver Function Test (LFT)', fields: 7, category: 'Biochemistry', lastUsed: '13-04-2026' },
  { id: 'TPL-003', name: 'Kidney Function Test (KFT)', fields: 6, category: 'Biochemistry', lastUsed: '12-04-2026' },
  { id: 'TPL-004', name: 'Thyroid Profile', fields: 3, category: 'Hormone', lastUsed: '11-04-2026' },
  { id: 'TPL-005', name: 'Lipid Profile', fields: 5, category: 'Biochemistry', lastUsed: '10-04-2026' },
  { id: 'TPL-006', name: 'HbA1c', fields: 2, category: 'Biochemistry', lastUsed: '09-04-2026' },
];

const fieldTypes = ['Number', 'Text', 'Select', 'Range'];

export default function TemplateManager() {
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [newTemplate, setNewTemplate] = useState({
    name: '',
    category: '',
    fields: [],
  });
  const [newField, setNewField] = useState({ name: '', type: 'Number', unit: '', range: '' });

  const filteredTemplates = mockTemplates.filter(t => 
    t.name.toLowerCase().includes(search.toLowerCase()) ||
    t.category.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddField = () => {
    if (newField.name) {
      setNewTemplate(prev => ({
        ...prev,
        fields: [...prev.fields, { ...newField, id: Date.now() }]
      }));
      setNewField({ name: '', type: 'Number', unit: '', range: '' });
    }
  };

  const handleRemoveField = (fieldId) => {
    setNewTemplate(prev => ({
      ...prev,
      fields: prev.fields.filter(f => f.id !== fieldId)
    }));
  };

  const handleSave = () => {
    alert('Template saved successfully!');
    setShowModal(false);
    setNewTemplate({ name: '', category: '', fields: [] });
  };

  return (
    <div className="max-w-full space-y-2 flex flex-col min-h-screen pb-10">
      <div className="flex justify-between items-center border-b-2 border-slate-400 pb-1 mb-2 bg-slate-200 p-2 border-2 rounded-none">
        <h1 className="text-lg font-bold text-slate-800 tracking-wide uppercase">Investigation - Template Management</h1>
        <div className="flex items-center gap-2">
          <input 
            type="text" 
            placeholder="Search templates..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="text-xs border border-slate-500 bg-white px-2 py-1 w-48"
          />
          <button 
            onClick={() => setShowModal(true)}
            className="bg-primary-600 text-white px-3 py-1 text-xs font-bold hover:bg-primary-700 flex items-center gap-1"
          >
            <Plus className="w-3 h-3" /> New Template
          </button>
        </div>
      </div>

      <div className="border-2 border-slate-400 bg-white flex flex-col">
        <table className="min-w-full divide-y divide-slate-300">
          <thead className="bg-slate-300">
            <tr>
              <th className="px-2 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">Template ID</th>
              <th className="px-2 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">Template Name</th>
              <th className="px-2 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">Category</th>
              <th className="px-2 py-1 border-r border-slate-400 text-center text-xs font-bold text-slate-800 uppercase">Fields</th>
              <th className="px-2 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">Last Used</th>
              <th className="px-2 py-1 text-center text-xs font-bold text-slate-800 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {filteredTemplates.map((template) => (
              <tr key={template.id} className="hover:bg-blue-50">
                <td className="px-2 py-1 border-r border-slate-300 text-xs font-bold text-primary-700">{template.id}</td>
                <td className="px-2 py-1 border-r border-slate-300 text-xs font-semibold">{template.name}</td>
                <td className="px-2 py-1 border-r border-slate-300 text-xs text-slate-600">{template.category}</td>
                <td className="px-2 py-1 border-r border-slate-300 text-center text-xs">{template.fields}</td>
                <td className="px-2 py-1 border-r border-slate-300 text-xs text-slate-500">{template.lastUsed}</td>
                <td className="px-2 py-1 text-center">
                  <div className="flex justify-center gap-1">
                    <button className="text-blue-600 hover:text-blue-800" title="Edit">
                      <Edit className="w-3 h-3" />
                    </button>
                    <button className="text-red-600 hover:text-red-800" title="Delete">
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredTemplates.length === 0 && (
          <div className="p-8 text-center text-slate-500">No templates found</div>
        )}
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-slate-200 border-t-2 border-slate-400 p-1 flex justify-between items-center text-[10px] uppercase font-bold tracking-widest text-slate-600 px-4">
        <span>Total: {filteredTemplates.length} templates</span>
        <span>ElabAssist v4.2.0 | Build 8912</span>
      </div>

      {/* New Template Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white border-2 border-slate-400 w-full max-w-2xl max-h-[80vh] overflow-auto">
            <div className="bg-slate-900 border-b-2 border-slate-700 p-3 flex justify-between items-center">
              <h2 className="text-white font-bold">Create New Template</h2>
              <button onClick={() => setShowModal(false)} className="text-white hover:text-red-400">✕</button>
            </div>
            <div className="p-4 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Template Name</label>
                  <input 
                    type="text"
                    value={newTemplate.name}
                    onChange={(e) => setNewTemplate(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full text-sm border border-slate-400 px-2 py-1"
                    placeholder="e.g., Complete Blood Count"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Category</label>
                  <input 
                    type="text"
                    value={newTemplate.category}
                    onChange={(e) => setNewTemplate(prev => ({ ...prev, category: e.target.value }))}
                    className="w-full text-sm border border-slate-400 px-2 py-1"
                    placeholder="e.g., Haematology"
                  />
                </div>
              </div>

              <div className="border-2 border-slate-400 p-3">
                <h3 className="text-sm font-bold text-slate-800 mb-2">Template Fields</h3>
                <div className="grid grid-cols-4 gap-2 mb-2">
                  <input 
                    type="text"
                    value={newField.name}
                    onChange={(e) => setNewField(prev => ({ ...prev, name: e.target.value }))}
                    className="col-span-2 text-xs border border-slate-400 px-2 py-1"
                    placeholder="Field Name"
                  />
                  <select 
                    value={newField.type}
                    onChange={(e) => setNewField(prev => ({ ...prev, type: e.target.value }))}
                    className="text-xs border border-slate-400 px-2 py-1"
                  >
                    {fieldTypes.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                  <button 
                    onClick={handleAddField}
                    className="bg-primary-600 text-white text-xs px-2 py-1 hover:bg-primary-700"
                  >
                    Add
                  </button>
                </div>

                {newTemplate.fields.length > 0 && (
                  <table className="min-w-full divide-y divide-slate-300 mt-2">
                    <thead className="bg-slate-200">
                      <tr>
                        <th className="px-2 py-1 text-left text-xs font-bold">Field Name</th>
                        <th className="px-2 py-1 text-left text-xs font-bold">Type</th>
                        <th className="px-2 py-1 text-center text-xs font-bold">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {newTemplate.fields.map(field => (
                        <tr key={field.id}>
                          <td className="px-2 py-1 text-xs">{field.name}</td>
                          <td className="px-2 py-1 text-xs">{field.type}</td>
                          <td className="px-2 py-1 text-center">
                            <button 
                              onClick={() => handleRemoveField(field.id)}
                              className="text-red-600 hover:text-red-800"
                            >
                              <Trash2 className="w-3 h-3" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button 
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 text-sm font-bold border-2 border-slate-400 bg-slate-100 hover:bg-slate-200"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleSave}
                  disabled={!newTemplate.name || newTemplate.fields.length === 0}
                  className="px-4 py-2 text-sm font-bold bg-primary-600 text-white border-2 border-primary-800 hover:bg-primary-700 disabled:opacity-50 flex items-center gap-1"
                >
                  <Save className="w-3 h-3" /> Save Template
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}