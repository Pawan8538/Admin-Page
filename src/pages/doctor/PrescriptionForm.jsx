import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FileText, Plus, Trash2, ArrowLeft, Loader2, Save } from 'lucide-react';
import clsx from 'clsx';

const commonMedicines = [
  'Paracetamol 500mg', 'Amoxicillin 500mg', 'Metformin 500mg', 'Amlodipine 5mg',
  'Omeprazole 20mg', 'Cetirizine 10mg', 'Ibuprofen 400mg', 'Ranitidine 150mg',
  'Azithromycin 500mg', 'Ciprofloxacin 500mg', 'Doxycycline 100mg', 'Pantoprazole 40mg'
];

const frequencies = ['Once Daily', 'Twice Daily', 'Thrice Daily', 'Four Times', 'As Required', 'Before Meal', 'After Meal'];
const durations = ['3 Days', '5 Days', '7 Days', '10 Days', '14 Days', '21 Days', '30 Days'];

export default function PrescriptionForm() {
  const { patientId } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    chiefComplaint: '',
    symptoms: '',
    diagnosis: '',
    advice: '',
    followUp: ''
  });
  const [medicines, setMedicines] = useState([
    { name: '', dosage: '', frequency: '', duration: '', notes: '' }
  ]);

  const handleMedicineChange = (index, field, value) => {
    const updated = [...medicines];
    updated[index][field] = value;
    setMedicines(updated);
  };

  const addMedicine = () => {
    setMedicines([...medicines, { name: '', dosage: '', frequency: '', duration: '', notes: '' }]);
  };

  const removeMedicine = (index) => {
    if (medicines.length > 1) {
      setMedicines(medicines.filter((_, i) => i !== index));
    }
  };

  const handleSubmit = async () => {
    if (!form.diagnosis) {
      alert('Please enter diagnosis');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert('Prescription saved successfully!');
      navigate('/doctor/appointments');
    }, 1000);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <button onClick={() => navigate(`/doctor/patient/${patientId}`)} className="p-2 hover:bg-slate-200">
          <ArrowLeft className="w-5 h-5 text-slate-600" />
        </button>
        <FileText className="w-5 h-5 text-slate-600" />
        <h1 className="text-lg font-bold text-slate-800 uppercase">Write Prescription</h1>
        <span className="text-xs text-slate-500">Patient: {patientId}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 space-y-4">
          <div className="border-2 border-slate-400 bg-white">
            <div className="bg-slate-200 border-b-2 border-slate-400 p-3">
              <h2 className="text-sm font-bold text-slate-800">Clinical Details</h2>
            </div>
            <div className="p-4 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Chief Complaint *</label>
                  <input
                    type="text"
                    value={form.chiefComplaint}
                    onChange={(e) => setForm({ ...form, chiefComplaint: e.target.value })}
                    className="w-full border-2 border-slate-400 px-3 py-2 text-sm focus:border-primary-600 focus:outline-none"
                    placeholder="Primary reason for visit"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Follow-up Date</label>
                  <input
                    type="date"
                    value={form.followUp}
                    onChange={(e) => setForm({ ...form, followUp: e.target.value })}
                    className="w-full border-2 border-slate-400 px-3 py-2 text-sm focus:border-primary-600 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Symptoms</label>
                <textarea
                  value={form.symptoms}
                  onChange={(e) => setForm({ ...form, symptoms: e.target.value })}
                  className="w-full border-2 border-slate-400 px-3 py-2 text-sm focus:border-primary-600 focus:outline-none"
                  rows="2"
                  placeholder="Observed symptoms"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Diagnosis *</label>
                <input
                  type="text"
                  value={form.diagnosis}
                  onChange={(e) => setForm({ ...form, diagnosis: e.target.value })}
                  className="w-full border-2 border-primary-400 px-3 py-2 text-sm focus:border-primary-600 focus:outline-none"
                  placeholder="Enter diagnosis"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Advice</label>
                <textarea
                  value={form.advice}
                  onChange={(e) => setForm({ ...form, advice: e.target.value })}
                  className="w-full border-2 border-slate-400 px-3 py-2 text-sm focus:border-primary-600 focus:outline-none"
                  rows="2"
                  placeholder="General advice for patient"
                />
              </div>
            </div>
          </div>

          <div className="border-2 border-slate-400 bg-white">
            <div className="bg-slate-200 border-b-2 border-slate-400 p-3 flex justify-between items-center">
              <h2 className="text-sm font-bold text-slate-800">Medicines</h2>
              <button
                onClick={addMedicine}
                className="flex items-center gap-1 px-2 py-1 bg-primary-600 text-white text-xs hover:bg-primary-700"
              >
                <Plus className="w-3 h-3" />
                Add Medicine
              </button>
            </div>
            <div className="p-4 space-y-3">
              {medicines.map((med, index) => (
                <div key={index} className="border border-slate-300 p-3 bg-slate-50">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-bold text-slate-600">Medicine #{index + 1}</span>
                    {medicines.length > 1 && (
                      <button
                        onClick={() => removeMedicine(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
                    <div className="md:col-span-2">
                      <select
                        value={med.name}
                        onChange={(e) => handleMedicineChange(index, 'name', e.target.value)}
                        className="w-full border border-slate-400 px-2 py-1.5 text-sm focus:border-primary-600 focus:outline-none bg-white"
                      >
                        <option value="">Select Medicine</option>
                        {commonMedicines.map((m) => (
                          <option key={m} value={m}>{m}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <input
                        type="text"
                        value={med.dosage}
                        onChange={(e) => handleMedicineChange(index, 'dosage', e.target.value)}
                        className="w-full border border-slate-400 px-2 py-1.5 text-sm focus:border-primary-600 focus:outline-none"
                        placeholder="Dosage (e.g., 1-0-1)"
                      />
                    </div>
                    <div>
                      <select
                        value={med.frequency}
                        onChange={(e) => handleMedicineChange(index, 'frequency', e.target.value)}
                        className="w-full border border-slate-400 px-2 py-1.5 text-sm focus:border-primary-600 focus:outline-none bg-white"
                      >
                        <option value="">Frequency</option>
                        {frequencies.map((f) => (
                          <option key={f} value={f}>{f}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <select
                        value={med.duration}
                        onChange={(e) => handleMedicineChange(index, 'duration', e.target.value)}
                        className="w-full border border-slate-400 px-2 py-1.5 text-sm focus:border-primary-600 focus:outline-none bg-white"
                      >
                        <option value="">Duration</option>
                        {durations.map((d) => (
                          <option key={d} value={d}>{d}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="mt-2">
                    <input
                      type="text"
                      value={med.notes}
                      onChange={(e) => handleMedicineChange(index, 'notes', e.target.value)}
                      className="w-full border border-slate-400 px-2 py-1 text-xs focus:border-primary-600 focus:outline-none"
                      placeholder="Additional notes (optional)"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="border-2 border-slate-400 bg-white">
            <div className="bg-slate-200 border-b-2 border-slate-400 p-3">
              <h2 className="text-sm font-bold text-slate-800">Actions</h2>
            </div>
            <div className="p-4 space-y-3">
              <button
                onClick={handleSubmit}
                disabled={loading}
                className={clsx(
                  "w-full flex items-center justify-center gap-2 py-3 text-sm font-bold uppercase",
                  "bg-green-600 text-white hover:bg-green-700",
                  loading && "opacity-70 cursor-not-allowed"
                )}
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                {loading ? 'Saving...' : 'Save Prescription'}
              </button>
              <button
                onClick={() => navigate(`/doctor/lab-request/${patientId}`)}
                className="w-full flex items-center justify-center gap-2 py-3 text-sm font-bold uppercase bg-blue-600 text-white hover:bg-blue-700"
              >
                Create Lab Request
              </button>
              <button
                onClick={() => navigate('/doctor/appointments')}
                className="w-full py-3 text-sm text-slate-600 hover:text-slate-800 border border-slate-400"
              >
                Cancel
              </button>
            </div>
          </div>

          <div className="border-2 border-slate-400 bg-white">
            <div className="bg-slate-200 border-b-2 border-slate-400 p-3">
              <h2 className="text-sm font-bold text-slate-800">Quick Info</h2>
            </div>
            <div className="p-4 text-xs space-y-2 text-slate-600">
              <p><strong>Patient:</strong> {patientId}</p>
              <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
              <p><strong>Doctor:</strong> Dr. Smith</p>
              <p><strong>Medicines:</strong> {medicines.length}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
