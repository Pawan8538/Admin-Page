import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout';
import LabLayout from './components/LabLayout';
import ReceptionistLayout from './components/ReceptionistLayout';
import Dashboard from './pages/Dashboard';
import Login from './pages/auth/Login';

// Laboratorist
import LabDashboard from './pages/lab/Dashboard';
import LabRequests from './pages/lab/Requests';
import CreateReport from './pages/lab/CreateReport';
import LabReportList from './pages/lab/ReportList';
import TemplateManager from './pages/lab/TemplateManager';

// Receptionist
import ReceptionistDashboard from './pages/receptionist/Dashboard';
import ReceptionistAppointments from './pages/receptionist/Appointments';

// Patient
import CreatePatient from './pages/patient/CreatePatient';
import PatientList from './pages/patient/PatientList';
import PatientCategory from './pages/patient/PatientCategory';

// Tests
import TestList from './pages/tests/TestList';
import CreateTest from './pages/tests/CreateTest';
import AddTests from './pages/tests/AddTests';

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

// Settings
import WhatsAppConfig from './pages/settings/WhatsAppConfig';
import SMTPConfig from './pages/settings/SMTPConfig';
// Placeholder mapping component
const Placeholder = ({ title }) => (
  <div className="flex justify-center p-10 bg-white">
    <h2 className="text-xl font-semibold text-slate-700">{title} - Under Construction</h2>
  </div>
);

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/diagnostic/authentication" element={<Login />} />
          
          {/* Admin Routes - Admin Only */}
          <Route path="/" element={<ProtectedRoute allowedRoles={['admin']}><Layout /></ProtectedRoute>}>
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
              <Route path="add" element={<AddTests />} />
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

            {/* Settings */}
            <Route path="settings">
              <Route path="whatsapp" element={<WhatsAppConfig />} />
              <Route path="smtp" element={<SMTPConfig />} />
              <Route path="formatting" element={<Placeholder title="Invoice & Report Formatting" />} />
              <Route path="taxes" element={<Placeholder title="Tax & Default Discount Rules" />} />
              <Route path="prefixes" element={<Placeholder title="ID Generation & Prefixes" />} />
              <Route path="audit" element={<Placeholder title="System Audit Logs" />} />
              <Route path="backup" element={<Placeholder title="Database Backup & Restore" />} />
              <Route path="updates" element={<Placeholder title="Software Updates & Licensing" />} />
            </Route>

</Route>
          
          {/* Laboratorist Routes - Laboratorist Only */}
          <Route path="/laboratorist" element={<ProtectedRoute allowedRoles={['laboratorist']}><LabLayout /></ProtectedRoute>}>
            <Route path="dashboard" element={<LabDashboard />} />
            <Route path="investigation" element={<LabRequests />} />
            <Route path="investigation/create" element={<CreateReport />} />
            <Route path="investigation/report_list" element={<LabReportList />} />
            <Route path="investigation/template" element={<TemplateManager />} />
          </Route>
          
          {/* Receptionist Routes - Receptionist Only */}
          <Route path="/receptionist" element={<ProtectedRoute allowedRoles={['receptionist']}><ReceptionistLayout /></ProtectedRoute>}>
            <Route path="dashboard" element={<ReceptionistDashboard />} />
            <Route path="appointments" element={<ReceptionistAppointments />} />
            <Route path="patients/create" element={<CreatePatient />} />
            <Route path="patients/list" element={<PatientList />} />
            <Route path="patients/category" element={<PatientCategory />} />
            <Route path="billing/add" element={<AddBillOrder />} />
            <Route path="billing/list" element={<TestBillList />} />
            <Route path="billing/reports/due" element={<DueReport />} />
            <Route path="billing/reports/paid" element={<PaidReport />} />
            <Route path="billing/reports/collect" element={<DueCollectReport />} />
            <Route path="reports" element={<LabReportList />} />
          </Route>
           
          {/* Catch all - redirect to login */}
          <Route path="*" element={<Navigate to="/diagnostic/authentication" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
