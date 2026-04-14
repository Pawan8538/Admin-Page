import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';

// Patient
import CreatePatient from './pages/patient/CreatePatient';
import PatientList from './pages/patient/PatientList';
import PatientCategory from './pages/patient/PatientCategory';

// Tests
import TestList from './pages/tests/TestList';
import CreateTest from './pages/tests/CreateTest';

// Additional Modules
import EmployeeList from './pages/employee/EmployeeList';
import AddEmployee from './pages/employee/AddEmployee';
import Department from './pages/employee/Department';
import Designation from './pages/employee/Designation';

import LabTestConfig from './pages/pathology/LabTestConfig';
import Categories from './pages/pathology/Categories';
import Reports from './pages/pathology/Reports';

import TestBillList from './pages/billing/TestBillList';
import AddBillOrder from './pages/billing/AddBillOrder';
import DueReport from './pages/billing/DueReport';
import PaidReport from './pages/billing/PaidReport';
import DueCollectReport from './pages/billing/DueCollectReport';

// Referral Manager
import SetReferral from './pages/referral/SetReferral';
import ReferralList from './pages/referral/ReferralList';
import WithdrawalsRewards from './pages/referral/WithdrawalsRewards';
import Statement from './pages/referral/Statement';
import CommissionReport from './pages/referral/CommissionReport';
import ReferralSummary from './pages/referral/ReferralSummary';
import PayoutReport from './pages/referral/PayoutReport';
// Placeholder mapping component
const Placeholder = ({ title }) => (
  <div className="flex justify-center p-10 bg-white">
    <h2 className="text-xl font-semibold text-slate-700">{title} - Under Construction</h2>
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
            <Route path="category" element={<PatientCategory />} />
          </Route>

          {/* Tests */}
          <Route path="tests">
            <Route path="create" element={<CreateTest />} />
            <Route path="list" element={<TestList />} />
            <Route path="add" element={<Placeholder title="Add Tests to Patient" />} />
          </Route>

          {/* Employee */}
          <Route path="employee">
            <Route path="create" element={<AddEmployee />} />
            <Route path="list" element={<EmployeeList />} />
            <Route path="department" element={<Department />} />
            <Route path="designation" element={<Designation />} />
          </Route>

          {/* Pathology */}
          <Route path="pathology">
            <Route path="tests" element={<LabTestConfig />} />
            <Route path="categories" element={<Categories />} />
            <Route path="reports" element={<Reports />} />
          </Route>

          {/* Referral */}
          <Route path="referral">
            <Route path="set" element={<SetReferral />} />
            <Route path="list" element={<ReferralList />} />
            <Route path="rewards" element={<WithdrawalsRewards />} />
            <Route path="statement" element={<Statement />} />
            <Route path="commission" element={<CommissionReport />} />
            <Route path="summary" element={<ReferralSummary />} />
            <Route path="payout" element={<PayoutReport />} />
          </Route>

          {/* Billing */}
          <Route path="billing">
            <Route path="add" element={<AddBillOrder />} />
            <Route path="list" element={<TestBillList />} />
            <Route path="reports/due" element={<DueReport />} />
            <Route path="reports/paid" element={<PaidReport />} />
            <Route path="reports/collect" element={<DueCollectReport />} />
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
