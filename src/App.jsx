import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import AuthLayout from './components/AuthLayout';
import Login from './pages/auth/Login';
import ForgotPassword from './pages/auth/ForgotPassword';

import DoctorLayout from './pages/doctor/DoctorLayout';
import DoctorDashboard from './pages/doctor/DoctorDashboard';
import AppointmentList from './pages/doctor/AppointmentList';
import PatientProfile from './pages/doctor/PatientProfile';
import PrescriptionForm from './pages/doctor/PrescriptionForm';
import LabRequest from './pages/doctor/LabRequest';

const ProtectedRoute = ({ children, allowedRole }) => {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRole && role !== allowedRole) {
    return <Navigate to={role === 'ADMIN' ? '/admin' : '/doctor/dashboard'} replace />;
  }

  return children;
};

const AuthRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  if (token) {
    return <Navigate to={role === 'ADMIN' ? '/admin' : '/doctor/dashboard'} replace />;
  }

  return children;
};

const Placeholder = ({ title }) => (
  <div className="flex justify-center p-10 bg-white">
    <h2 className="text-xl font-semibold text-slate-700">{title} - Under Construction</h2>
  </div>
);

function App() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route
          index
          element={<Navigate to="/login" replace />}
        />
        <Route
          path="/login"
          element={
            <AuthRoute>
              <Login />
            </AuthRoute>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <AuthRoute>
              <ForgotPassword />
            </AuthRoute>
          }
        />
      </Route>

      <Route
        path="/admin/*"
        element={
          <ProtectedRoute allowedRole="ADMIN">
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />

        <Route path="patient">
          <Route path="create" element={<Placeholder title="Create Patient" />} />
          <Route path="list" element={<Placeholder title="Patient List" />} />
          <Route path="category" element={<Placeholder title="Patient Category" />} />
        </Route>

        <Route path="tests">
          <Route path="create" element={<Placeholder title="Create Test" />} />
          <Route path="list" element={<Placeholder title="Test List" />} />
          <Route path="add" element={<Placeholder title="Add Tests" />} />
        </Route>

        <Route path="employee">
          <Route path="create" element={<Placeholder title="Add Employee" />} />
          <Route path="list" element={<Placeholder title="Employee List" />} />
          <Route path="department" element={<Placeholder title="Department" />} />
          <Route path="designation" element={<Placeholder title="Designation" />} />
        </Route>

        <Route path="pathology">
          <Route path="tests" element={<Placeholder title="Lab Tests Config" />} />
          <Route path="categories" element={<Placeholder title="Categories" />} />
          <Route path="reports" element={<Placeholder title="Reports" />} />
        </Route>

        <Route path="referral">
          <Route path="set" element={<Placeholder title="Set Referral" />} />
          <Route path="list" element={<Placeholder title="Referral List" />} />
          <Route path="rewards" element={<Placeholder title="Withdrawals & Rewards" />} />
          <Route path="statement" element={<Placeholder title="Statement" />} />
          <Route path="commission" element={<Placeholder title="Commission Report" />} />
          <Route path="summary" element={<Placeholder title="Summary" />} />
          <Route path="payout" element={<Placeholder title="Payout Report" />} />
        </Route>

        <Route path="billing">
          <Route path="add" element={<Placeholder title="Add Tests (Order)" />} />
          <Route path="list" element={<Placeholder title="Test Bills" />} />
          <Route path="reports/due" element={<Placeholder title="Due Bill Report" />} />
          <Route path="reports/paid" element={<Placeholder title="Paid Bill Report" />} />
          <Route path="reports/collect" element={<Placeholder title="Due Collect Report" />} />
        </Route>

        <Route path="settings">
          <Route path="whatsapp" element={<Placeholder title="WhatsApp API" />} />
          <Route path="smtp" element={<Placeholder title="SMTP Email Config" />} />
          <Route path="formatting" element={<Placeholder title="Invoice & Report Formatting" />} />
          <Route path="taxes" element={<Placeholder title="Tax & Default Discount Rules" />} />
          <Route path="prefixes" element={<Placeholder title="ID Generation & Prefixes" />} />
          <Route path="audit" element={<Placeholder title="System Audit Logs" />} />
          <Route path="backup" element={<Placeholder title="Database Backup & Restore" />} />
          <Route path="updates" element={<Placeholder title="Software Updates & Licensing" />} />
        </Route>
      </Route>

      <Route
        path="/doctor/*"
        element={
          <ProtectedRoute allowedRole="DOCTOR">
            <DoctorLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<DoctorDashboard />} />
        <Route path="appointments" element={<AppointmentList />} />
        <Route path="patient/:id" element={<PatientProfile />} />
        <Route path="prescription/:patientId" element={<PrescriptionForm />} />
        <Route path="lab-request/:patientId" element={<LabRequest />} />
      </Route>

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;
