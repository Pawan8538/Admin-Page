import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FlaskConical, ArrowLeft, Loader2, Plus, X, Save } from 'lucide-react';
import clsx from 'clsx';

const testCategories = {
  'Hematology': ['CBC', 'Hemoglobin', 'Platelet Count', 'ESR', 'PS for MP', 'BT/CT'],
  'Biochemistry': ['Blood Glucose (F/PP)', 'HbA1c', 'Lipid Profile', 'LFT', 'KFT', 'Uric Acid'],
  'Thyroid': ['T3', 'T4', 'TSH', 'Free T3', 'Free T4'],
  'Cardiac': ['Troponin I', 'CK-MB', 'BNP', 'Lipase'],
  'Urine Analysis': ['Routine', 'Microalbumin', 'Protein/Creatinine Ratio'],
  'Coagulation': ['PT/INR', 'APTT', 'D-Dimer', 'Fibrinogen'],
};

const priorities = ['Routine', 'Urgent', 'Emergency'];

export default function LabRequest() {
  const { patientId } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [priority, setPriority] = useState('Routine');
  const [selectedTests, setSelectedTests] = useState([]);
  const [notes, setNotes] = useState('');
  const [fastingRequired, setFastingRequired] = useState(false);

  const toggleTest = (testName) => {
    if (selectedTests.includes(testName)) {
      setSelectedTests(selectedTests.filter(t => t !== testName));
    } else {
      setSelectedTests([...selectedTests, testName]);
    }
  };

  const selectAllInCategory = (tests) => {
    const allSelected = tests.every(t => selectedTests.includes(t));
    if (allSelected) {
      setSelectedTests(selectedTests.filter(t => !tests.includes(t)));
    } else {
      setSelectedTests([...new Set([...selectedTests, ...tests])]);
    }
  };

  const handleSubmit = async () => {
    if (selectedTests.length === 0) {
      alert('Please select at least one test');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert('Lab request created successfully!');
      navigate('/doctor/appointments');
    }, 1000);
  };

  const totalAmount = selectedTests.length * 250;

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <button onClick={() => navigate(`/doctor/patient/${patientId}`)} className="p-2 hover:bg-slate-200">
          <ArrowLeft className="w-5 h-5 text-slate-600" />
        </button>
        <FlaskConical className="w-5 h-5 text-slate-600" />
        <h1 className="text-lg font-bold text-slate-800 uppercase">Create Lab Request</h1>
        <span className="text-xs text-slate-500">Patient: {patientId}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 space-y-4">
          <div className="border-2 border-slate-400 bg-white">
            <div className="bg-slate-200 border-b-2 border-slate-400 p-3 flex justify-between items-center">
              <h2 className="text-sm font-bold text-slate-800">Select Tests</h2>
              <span className="text-xs text-slate-600">{selectedTests.length} selected</span>
            </div>
            <div className="p-4 space-y-4 max-h-[500px] overflow-y-auto">
              {Object.entries(testCategories).map(([category, tests]) => (
                <div key={category} className="border border-slate-300">
                  <div className="bg-slate-100 px-3 py-2 flex justify-between items-center">
                    <h3 className="text-xs font-bold text-slate-700 uppercase">{category}</h3>
                    <button
                      onClick={() => selectAllInCategory(tests)}
                      className="text-xs text-primary-600 hover:text-primary-800 font-semibold"
                    >
                      {tests.every(t => selectedTests.includes(t)) ? 'Deselect All' : 'Select All'}
                    </button>
                  </div>
                  <div className="p-2 flex flex-wrap gap-2">
                    {tests.map((test) => (
                      <button
                        key={test}
                        onClick={() => toggleTest(test)}
                        className={clsx(
                          "px-3 py-1.5 text-xs font-medium border transition-colors",
                          selectedTests.includes(test)
                            ? "bg-primary-600 text-white border-primary-700"
                            : "bg-white text-slate-700 border-slate-400 hover:border-primary-500"
                        )}
                      >
                        {test}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-2 border-slate-400 bg-white">
            <div className="bg-slate-200 border-b-2 border-slate-400 p-3">
              <h2 className="text-sm font-bold text-slate-800">Additional Information</h2>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Priority Level</label>
                <div className="flex gap-2">
                  {priorities.map((p) => (
                    <button
                      key={p}
                      onClick={() => setPriority(p)}
                      className={clsx(
                        "px-4 py-2 text-xs font-bold uppercase border-2 transition-colors",
                        priority === p
                          ? p === 'Emergency' ? "bg-red-600 text-white border-red-700"
                          : p === 'Urgent' ? "bg-orange-600 text-white border-orange-700"
                          : "bg-green-600 text-white border-green-700"
                          : "bg-white text-slate-600 border-slate-400 hover:border-slate-600"
                      )}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={fastingRequired}
                  onChange={(e) => setFastingRequired(e.target.checked)}
                  className="w-4 h-4 border-2 border-slate-400 rounded text-primary-600"
                />
                <span className="text-sm text-slate-700">Fasting Required (8-12 hours)</span>
              </label>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Clinical Notes</label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full border-2 border-slate-400 px-3 py-2 text-sm focus:border-primary-600 focus:outline-none"
                  rows="3"
                  placeholder="Add any clinical notes or instructions for the lab..."
                />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="border-2 border-slate-400 bg-white">
            <div className="bg-slate-200 border-b-2 border-slate-400 p-3">
              <h2 className="text-sm font-bold text-slate-800">Order Summary</h2>
            </div>
            <div className="p-4 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Patient ID</span>
                <span className="font-bold text-slate-900">{patientId}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Priority</span>
                <span className={clsx(
                  "font-bold uppercase text-xs px-2 py-0.5",
                  priority === 'Emergency' ? "bg-red-100 text-red-700" :
                  priority === 'Urgent' ? "bg-orange-100 text-orange-700" :
                  "bg-green-100 text-green-700"
                )}>{priority}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Tests</span>
                <span className="font-bold">{selectedTests.length}</span>
              </div>
              <div className="border-t-2 border-slate-300 pt-2">
                <div className="flex justify-between">
                  <span className="text-sm font-bold text-slate-700">Est. Amount</span>
                  <span className="font-bold text-lg text-slate-900">₹{totalAmount}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-2 border-slate-400 bg-white">
            <div className="bg-slate-200 border-b-2 border-slate-400 p-3">
              <h2 className="text-sm font-bold text-slate-800">Selected Tests</h2>
            </div>
            <div className="p-2 max-h-48 overflow-y-auto">
              {selectedTests.length === 0 ? (
                <p className="text-xs text-slate-500 p-2">No tests selected</p>
              ) : (
                <div className="space-y-1">
                  {selectedTests.map((test) => (
                    <div key={test} className="flex justify-between items-center text-xs p-1 bg-slate-50">
                      <span className="text-slate-700">{test}</span>
                      <span className="text-slate-500">₹250</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="border-2 border-slate-400 bg-white">
            <div className="bg-slate-200 border-b-2 border-slate-400 p-3">
              <h2 className="text-sm font-bold text-slate-800">Actions</h2>
            </div>
            <div className="p-4 space-y-3">
              <button
                onClick={handleSubmit}
                disabled={loading || selectedTests.length === 0}
                className={clsx(
                  "w-full flex items-center justify-center gap-2 py-3 text-sm font-bold uppercase",
                  "bg-green-600 text-white hover:bg-green-700",
                  (loading || selectedTests.length === 0) && "opacity-70 cursor-not-allowed"
                )}
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                {loading ? 'Creating...' : 'Create Lab Request'}
              </button>
              <button
                onClick={() => navigate(`/doctor/prescription/${patientId}`)}
                className="w-full flex items-center justify-center gap-2 py-3 text-sm font-bold uppercase bg-primary-600 text-white hover:bg-primary-700"
              >
                Write Prescription
              </button>
              <button
                onClick={() => navigate('/doctor/appointments')}
                className="w-full py-3 text-sm text-slate-600 hover:text-slate-800 border border-slate-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
