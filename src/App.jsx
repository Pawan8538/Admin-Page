import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';

// Patient
import CreatePatient from './pages/patient/CreatePatient';
import PatientList from './pages/patient/PatientList';

// Tests
import TestList from './pages/tests/TestList';
import TestMasterConfig from './pages/tests/TestMasterConfig';

// Additional Modules
import EmployeeList from './pages/employee/EmployeeList';
import LabTestConfig from './pages/pathology/LabTestConfig';
import TestBillList from './pages/billing/TestBillList';

// Placeholder mapping component
const Placeholder = ({ title }) => (
  <div className="flex flex-col items-center justify-center p-12 bg-white rounded-lg shadow-sm border border-slate-200">
    <h2 className="text-xl font-semibold text-slate-700">{title}</h2>
    <p className="mt-2 text-slate-500">This module is under construction.</p>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          
          {/* Patient Routes */}
          <Route path="patient">
            <Route path="create" element={<CreatePatient />} />
            <Route path="list" element={<PatientList />} />
            <Route path="category" element={<Placeholder title="Patient Category" />} />
          </Route>

          {/* Tests */}
          <Route path="tests">
            <Route path="create" element={<Placeholder title="Create New Test" />} />
            <Route path="config" element={<TestMasterConfig />} />
            <Route path="list" element={<TestList />} />
            <Route path="add" element={<Placeholder title="Add Tests to Patient" />} />
          </Route>

          {/* Employee */}
          <Route path="employee">
            <Route path="create" element={<Placeholder title="Add Employee" />} />
            <Route path="list" element={<EmployeeList />} />
            <Route path="department" element={<Placeholder title="Department Setup" />} />
            <Route path="designation" element={<Placeholder title="Designation Setup" />} />
          </Route>

          {/* Pathology */}
          <Route path="pathology">
            <Route path="tests" element={<LabTestConfig />} />
            <Route path="categories" element={<Placeholder title="Pathology Categories" />} />
            <Route path="reports" element={<Placeholder title="Reports" />} />
            <Route path="queue" element={<Placeholder title="Queue / Worklist" />} />
          </Route>

          {/* Referral */}
          <Route path="referral">
            <Route path="set" element={<Placeholder title="Set Referral" />} />
            <Route path="list" element={<Placeholder title="Referral List" />} />
            <Route path="rewards" element={<Placeholder title="Withdrawals & Rewards" />} />
            <Route path="statement" element={<Placeholder title="Statement" />} />
            <Route path="commission" element={<Placeholder title="Commission Report" />} />
            <Route path="summary" element={<Placeholder title="Summary" />} />
            <Route path="payout" element={<Placeholder title="Payout Report" />} />
          </Route>

          {/* Billing */}
          <Route path="billing">
            <Route path="add" element={<Placeholder title="Add Bill (Order Tests)" />} />
            <Route path="list" element={<TestBillList />} />
            <Route path="reports/due" element={<Placeholder title="Due Bill Report" />} />
            <Route path="reports/paid" element={<Placeholder title="Paid Bill Report" />} />
            <Route path="reports/collect" element={<Placeholder title="Due Collect Report" />} />
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
