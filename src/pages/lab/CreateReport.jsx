import { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Save, FileText, AlertTriangle } from 'lucide-react';

const testTemplates = {
  'CBC': {
    name: 'Complete Blood Count',
    fields: [
      { id: 'hb', label: 'Hemoglobin (g/dL)', range: '12.0-17.5', unit: 'g/dL' },
      { id: 'tbc', label: 'Total RBC Count (million/cumm)', range: '4.5-5.5', unit: 'million/cumm' },
      { id: 'hct', label: 'Hematocrit (%)', range: '36-50', unit: '%' },
      { id: 'wbc', label: 'Total WBC Count (cells/cumm)', range: '4000-11000', unit: 'cells/cumm' },
      { id: 'platelets', label: 'Platelets (lakh/cumm)', range: '1.5-4.5', unit: 'lakh/cumm' },
      { id: 'neutrophils', label: 'Neutrophils (%)', range: '40-70', unit: '%' },
      { id: 'lymphocytes', label: 'Lymphocytes (%)', range: '20-40', unit: '%' },
      { id: 'eosinophils', label: 'Eosinophils (%)', range: '1-6', unit: '%' },
    ]
  },
  'LFT': {
    name: 'Liver Function Test',
    fields: [
      { id: 'bilirubin_total', label: 'Total Bilirubin (mg/dL)', range: '0.2-1.2', unit: 'mg/dL' },
      { id: 'bilirubin_direct', label: 'Direct Bilirubin (mg/dL)', range: '0.0-0.3', unit: 'mg/dL' },
      { id: 'sgot', label: 'SGOT/AST (U/L)', range: '5-40', unit: 'U/L' },
      { id: 'sgpt', label: 'SGPT/ALT (U/L)', range: '5-40', unit: 'U/L' },
      { id: 'alkaline_phosphatase', label: 'Alkaline Phosphatase (U/L)', range: '20-140', unit: 'U/L' },
      { id: 'total_protein', label: 'Total Protein (g/dL)', range: '6.0-8.3', unit: 'g/dL' },
      { id: 'albumin', label: 'Albumin (g/dL)', range: '3.5-5.5', unit: 'g/dL' },
    ]
  },
  'KFT': {
    name: 'Kidney Function Test',
    fields: [
      { id: 'urea', label: 'Blood Urea (mg/dL)', range: '10-50', unit: 'mg/dL' },
      { id: 'creatinine', label: 'Serum Creatinine (mg/dL)', range: '0.6-1.2', unit: 'mg/dL' },
      { id: 'uric_acid', label: 'Uric Acid (mg/dL)', range: '3.5-7.2', unit: 'mg/dL' },
      { id: 'sodium', label: 'Sodium (mEq/L)', range: '136-145', unit: 'mEq/L' },
      { id: 'potassium', label: 'Potassium (mEq/L)', range: '3.5-5.0', unit: 'mEq/L' },
      { id: 'chloride', label: 'Chloride (mEq/L)', range: '96-106', unit: 'mEq/L' },
    ]
  },
  'Thyroid': {
    name: 'Thyroid Profile',
    fields: [
      { id: 't3', label: 'T3 (ng/dL)', range: '0.6-2.0', unit: 'ng/dL' },
      { id: 't4', label: 'T4 (µg/dL)', range: '5.0-12.0', unit: 'µg/dL' },
      { id: 'tsh', label: 'TSH (mIU/L)', range: '0.4-4.0', unit: 'mIU/L' },
    ]
  },
};

export default function CreateReport() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const requestId = searchParams.get('request') || 'REQ-8001';
  const [selectedTest, setSelectedTest] = useState('CBC');
  const [results, setResults] = useState({});
  const [notes, setNotes] = useState('');
  const [saving, setSaving] = useState(false);

  const mockRequest = {
    id: requestId,
    patient: 'John Doe',
    age: 45,
    gender: 'M',
    test: 'CBC, LFT',
    doctor: 'Dr. James Anderson',
    date: '15-04-2026',
  };

  const handleResultChange = (fieldId, value) => {
    setResults(prev => ({ ...prev, [fieldId]: value }));
  };

  const handleSave = async () => {
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      alert('Report saved successfully! Sent for Pathologist approval.');
      navigate('/laboratorist/investigation/report_list');
    }, 1000);
  };

  const tests = mockRequest.test.split(', ');

  return (
    <div className="max-w-full space-y-2 flex flex-col min-h-screen pb-10">
      <div className="flex justify-between items-center border-b-2 border-slate-400 pb-1 mb-2 bg-slate-200 p-2 border-2 rounded-none">
        <h1 className="text-lg font-bold text-slate-800 tracking-wide uppercase">Create Lab Report</h1>
        <span className="text-xs font-semibold text-slate-600 bg-white border border-slate-400 px-2 py-0.5">
          Request: {requestId}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-1">
          <div className="bg-white border-2 border-slate-400 p-3">
            <h2 className="text-sm font-bold text-slate-800 border-b-2 border-slate-300 pb-1 mb-2">Patient Information</h2>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-600">Patient:</span>
                <span className="font-bold text-slate-800">{mockRequest.patient}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Age/Gender:</span>
                <span className="font-bold text-slate-800">{mockRequest.age}/{mockRequest.gender}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Referral Doctor:</span>
                <span className="font-bold text-slate-800">{mockRequest.doctor}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Date:</span>
                <span className="font-bold text-slate-800">{mockRequest.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Tests:</span>
                <span className="font-bold text-slate-800">{mockRequest.test}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-2">
          <div className="bg-white border-2 border-slate-400 p-3">
            <h2 className="text-sm font-bold text-slate-800 border-b-2 border-slate-300 pb-1 mb-2">Select Test to Process</h2>
            <div className="flex flex-wrap gap-2">
              {tests.map(test => (
                <button
                  key={test}
                  onClick={() => setSelectedTest(test)}
                  className={`px-3 py-1 text-xs font-bold border-2 ${
                    selectedTest === test 
                      ? 'bg-primary-600 text-white border-primary-800' 
                      : 'bg-slate-100 text-slate-700 border-slate-400 hover:border-primary-400'
                  }`}
                >
                  {test}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white border-2 border-slate-400 p-3">
            <h2 className="text-sm font-bold text-slate-800 border-b-2 border-slate-300 pb-1 mb-2">
              {testTemplates[selectedTest]?.name || selectedTest} Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {testTemplates[selectedTest]?.fields.map(field => (
                <div key={field.id} className="flex items-center gap-2">
                  <label className="text-xs text-slate-600 w-48 flex-shrink-0">{field.label}</label>
                  <input
                    type="text"
                    value={results[field.id] || ''}
                    onChange={(e) => handleResultChange(field.id, e.target.value)}
                    className="flex-1 text-xs border border-slate-400 px-2 py-1"
                    placeholder={`Range: ${field.range} ${field.unit}`}
                  />
                  <span className="text-[10px] text-slate-500 w-24">{field.unit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border-2 border-slate-400 p-3">
            <h2 className="text-sm font-bold text-slate-800 border-b-2 border-slate-300 pb-1 mb-2">Lab Notes</h2>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full text-xs border border-slate-400 px-2 py-2 h-20 resize-none"
              placeholder="Enter any additional notes or observations..."
            />
          </div>

          <div className="flex justify-end gap-2">
            <button
              onClick={() => navigate('/laboratorist/requests')}
              className="px-4 py-2 text-xs font-bold border-2 border-slate-400 bg-slate-100 hover:bg-slate-200"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              disabled={saving}
              className="px-4 py-2 text-xs font-bold bg-primary-600 text-white border-2 border-primary-800 hover:bg-primary-700 flex items-center gap-1 disabled:opacity-50"
            >
              <Save className="w-3 h-3" />
              {saving ? 'Saving...' : 'Save & Submit for Approval'}
            </button>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-slate-200 border-t-2 border-slate-400 p-1 flex justify-between items-center text-[10px] uppercase font-bold tracking-widest text-slate-600 px-4">
        <span>ElabAssist v4.2.0 | Build 8912</span>
      </div>
    </div>
  );
}