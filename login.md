# ElabAssist - Authentication & Doctor Module Documentation

## Overview

This document provides comprehensive technical documentation for the ElabAssist authentication system and Doctor module. It covers the architecture, implementation details, components, and API references for developers.

---

## Table of Contents

1. [System Architecture](#1-system-architecture)
2. [Authentication System](#2-authentication-system)
3. [Login Module](#3-login-module)
4. [Role-Based Access Control](#4-role-based-access-control)
5. [Doctor Module](#5-doctor-module)
6. [Doctor Dashboard](#6-doctor-dashboard)
7. [Components Reference](#7-components-reference)
8. [API Reference](#8-api-reference)
9. [Demo Credentials](#9-demo-credentials)
10. [Environment Setup](#10-environment-setup)

---

## 1. System Architecture

### 1.1 Technology Stack

| Layer | Technology | Version |
|-------|------------|---------|
| Frontend Framework | React | 19.2.4 |
| Routing | React Router DOM | 7.14.1 |
| Styling | Tailwind CSS | 3.4.19 |
| Icons | Lucide React | 1.8.0 |
| State Management | React Context API | - |
| Build Tool | Vite | 8.0.4 |
| Language | JavaScript (ES6+) | ES2020 |

### 1.2 Project Structure

```
Admin-Page/
├── src/
│   ├── context/
│   │   └── AuthContext.jsx          # Authentication state management
│   ├── components/
│   │   ├── AuthLayout.jsx           # Auth pages wrapper
│   │   ├── Layout.jsx               # Admin layout
│   │   └── TopNavigation.jsx         # Navigation bar
│   ├── pages/
│   │   ├── auth/
│   │   │   ├── Login.jsx            # Unified login form
│   │   │   └── ForgotPassword.jsx   # Password reset page
│   │   ├── Dashboard.jsx            # Admin dashboard
│   │   └── doctor/
│   │       ├── DoctorLayout.jsx     # Doctor module layout
│   │       ├── DoctorDashboard.jsx   # Doctor dashboard
│   │       ├── AppointmentList.jsx   # Appointment management
│   │       ├── PatientProfile.jsx    # Patient details view
│   │       ├── PrescriptionForm.jsx  # Prescription creation
│   │       ├── LabRequest.jsx        # Lab request creation
│   │       ├── services/
│   │       │   └── doctorApi.js      # Doctor API endpoints
│   │       └── hooks/
│   │           └── useDoctorAuth.js  # Doctor auth hook
│   ├── App.jsx                      # Route definitions
│   └── main.jsx                     # Application entry point
├── eslint.config.js
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## 2. Authentication System

### 2.1 AuthContext Architecture

The authentication system uses React Context API for global state management.

**File:** `src/context/AuthContext.jsx`

```javascript
// State Shape
{
  user: {
    token: string,
    role: 'ADMIN' | 'DOCTOR',
    name: string
  } | null,
  loading: boolean
}
```

**Provider Methods:**

| Method | Parameters | Returns | Description |
|--------|------------|---------|-------------|
| `login` | `{username, password, role}` | `Promise<{success, role, error?}>` | Authenticates user |
| `logout` | - | `void` | Clears session |
| `isAuthenticated` | - | `boolean` | Checks token existence |
| `getRole` | - | `string | null` | Returns user role |

**Usage:**

```javascript
import { useAuth } from '../context/AuthContext';

function MyComponent() {
  const { user, login, logout, isAuthenticated } = useAuth();
  
  // Use auth methods
}
```

### 2.2 localStorage Schema

| Key | Type | Description | Example |
|-----|------|-------------|---------|
| `token` | string | Authentication token | `token_ADMIN_1713206400000` |
| `role` | string | User role | `ADMIN` or `DOCTOR` |
| `userName` | string | Display name | `Administrator` |

### 2.3 Auth Flow Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                        AUTHENTICATION FLOW                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   ┌──────────┐    ┌──────────┐    ┌──────────────────────┐    │
│   │  Login   │───▶│ Validate │───▶│ Match Credentials    │    │
│   │   Form   │    │  Inputs  │    │ against mockUsers    │    │
│   └──────────┘    └──────────┘    └──────────┬───────────┘    │
│                                               │                 │
│                        ┌──────────────────────┴───────────────┐ │
│                        │                                     │ │
│                    ┌───┴────┐                            ┌───┴────┐
│                    │ Match! │                            │ No Match│
│                    └───┬────┘                            └───┬────┘
│                        │                                     │
│        ┌───────────────┼───────────────┐                     │
│        │               │               │                     │
│        ▼               ▼               ▼                     │
│   ┌─────────┐    ┌───────────┐    ┌───────────┐               │
│   │Generate │    │ Store in │    │  Update   │               │
│   │ Token  │───▶│   local   │───▶│   State   │               │
│   └─────────┘    │  Storage  │    └─────┬─────┘               │
│                  └───────────┘          │                     │
│                                         ▼                     │
│                              ┌───────────────────┐             │
│                              │   Redirect Based   │             │
│                              │     on Role        │             │
│                              └───────────────────┘             │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## 3. Login Module

### 3.1 Login Component

**File:** `src/pages/auth/Login.jsx`

**Component Signature:**

```javascript
export default function Login()
```

**State Management:**

```javascript
const [form, setForm] = useState({
  username: '',        // string - required
  password: '',        // string - required
  role: 'ADMIN',      // 'ADMIN' | 'DOCTOR'
  remember: false      // boolean
});

const [showPassword, setShowPassword] = useState(false);  // boolean
const [loading, setLoading] = useState(false);             // boolean
const [error, setError] = useState('');                    // string
```

### 3.2 Features Matrix

| Feature | Implementation | Status |
|---------|---------------|--------|
| Username input | Text field with validation | ✅ Implemented |
| Password input | Toggle visibility with Eye/EyeOff icons | ✅ Implemented |
| Role selection | Dropdown (Administrator/Doctor) | ✅ Implemented |
| Remember me | Checkbox for preference storage | ✅ Implemented |
| Forgot password | Link to `/forgot-password` | ✅ Implemented |
| Loading state | Spinner + disabled inputs | ✅ Implemented |
| Error display | Red bordered alert box | ✅ Implemented |
| Form validation | Required field validation | ✅ Implemented |

### 3.3 Login Form UI

```
┌─────────────────────────────────────────────────────────┐
│                    [Activity Icon]                        │
│                     ElabAssist                          │
│             Laboratory Management System                 │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  USERNAME *                                             │
│  ┌─────────────────────────────────────────────────┐  │
│  │ Enter username                                    │  │
│  └─────────────────────────────────────────────────┘  │
│                                                         │
│  PASSWORD *                                             │
│  ┌─────────────────────────────────────────────────┐  │
│  │ ••••••••••                              [👁]     │  │
│  └─────────────────────────────────────────────────┘  │
│                                                         │
│  LOGIN AS *                                             │
│  ┌─────────────────────────────────────────────────┐  │
│  │ Administrator                               ▼   │  │
│  │ Doctor                                          │  │
│  └─────────────────────────────────────────────────┘  │
│                                                         │
│  [✓] Remember me              Forgot Password?        │
│                                                         │
│  ┌─────────────────────────────────────────────────┐  │
│  │                  SIGN IN                         │  │
│  └─────────────────────────────────────────────────┘  │
│                                                         │
├─────────────────────────────────────────────────────────┤
│  Demo: admin/admin123 or doctor/doctor123                │
└─────────────────────────────────────────────────────────┘
```

### 3.4 Login Flow Implementation

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  setError('');

  // 1. Validate inputs
  if (!form.username || !form.password) {
    setError('Please enter both username and password');
    return;
  }

  // 2. Set loading state
  setLoading(true);

  // 3. Call login API (simulated with timeout)
  setTimeout(async () => {
    const result = await login(form);
    setLoading(false);

    // 4. Handle response
    if (result.success) {
      // 5. Redirect based on role
      if (result.role === 'ADMIN') {
        navigate('/admin');
      } else if (result.role === 'DOCTOR') {
        navigate('/doctor/dashboard');
      }
    } else {
      // 6. Display error
      setError(result.error);
    }
  }, 800);
};
```

---

## 4. Role-Based Access Control

### 4.1 Route Protection Strategy

```javascript
// ProtectedRoute Component
const ProtectedRoute = ({ children, allowedRole }) => {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  // Check 1: Is user authenticated?
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Check 2: Does user have required role?
  if (allowedRole && role !== allowedRole) {
    return <Navigate to={/* appropriate dashboard */} replace />;
  }

  return children;
};

// AuthRoute Component (prevents authenticated users from accessing login)
const AuthRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  if (token) {
    return <Navigate to={role === 'ADMIN' ? '/admin' : '/doctor/dashboard'} replace />;
  }

  return children;
};
```

### 4.2 Route Configuration Matrix

| Route | Layout | Access Level | Auth Required | Role Required | Default Redirect |
|-------|--------|--------------|---------------|---------------|------------------|
| `/login` | AuthLayout | Public | ❌ No | None | → `/admin` or `/doctor/dashboard` |
| `/forgot-password` | AuthLayout | Public | ❌ No | None | → `/login` |
| `/admin` | Layout | Protected | ✅ Yes | `ADMIN` | → `/login` |
| `/admin/*` | Layout | Protected | ✅ Yes | `ADMIN` | → `/login` |
| `/doctor/dashboard` | DoctorLayout | Protected | ✅ Yes | `DOCTOR` | → `/login` |
| `/doctor/*` | DoctorLayout | Protected | ✅ Yes | `DOCTOR` | → `/login` |
| `/*` | None | All | - | - | → `/login` |

### 4.3 Route Definition Structure

```javascript
// App.jsx
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Auth Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<AuthRoute><Login /></AuthRoute>} />
          <Route path="/forgot-password" element={<AuthRoute><ForgotPassword /></AuthRoute>} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin/*" element={<ProtectedRoute allowedRole="ADMIN"><Layout /></ProtectedRoute>}>
          <Route index element={<Dashboard />} />
          {/* ... other admin routes */}
        </Route>

        {/* Doctor Routes */}
        <Route path="/doctor/*" element={<ProtectedRoute allowedRole="DOCTOR"><DoctorLayout /></ProtectedRoute>}>
          <Route path="dashboard" element={<DoctorDashboard />} />
          {/* ... other doctor routes */}
        </Route>

        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
```

---

## 5. Doctor Module

### 5.1 Doctor Module Structure

**File:** `src/pages/doctor/DoctorLayout.jsx`

The Doctor Module uses a horizontal navigation layout matching the admin theme.

### 5.2 Navigation Design

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│  🏥 ElabAssist           │ Dashboard │ Appointments ▼ │ Patients ▼ │ Prescriptions ▼ │ Lab ▼ │       │ Dr. Smith  [Logout] │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

### 5.3 Navigation Menu Items

| Menu | Icon | Dropdown Items |
|------|------|----------------|
| Dashboard | LayoutDashboard | - |
| Appointments | Calendar | Today's Appointments, All Appointments, Calendar View |
| Patients | Users | Patient List, Search Patient, Add Patient |
| Prescriptions | FileText | Write Prescription, View History |
| Lab | FlaskConical | Lab Requests, Pending Results, Create Request |

### 5.4 DoctorLayout Component

```javascript
// Navigation configuration
const navigation = [
  { label: 'Dashboard', to: '/doctor/dashboard', icon: LayoutDashboard },
  { 
    label: 'Appointments', icon: Calendar, 
    dropdown: [
      { label: "Today's Appointments", to: '/doctor/appointments' },
      { label: 'All Appointments', to: '/doctor/appointments' },
      { label: 'Calendar View', to: '/doctor/appointments' },
    ]
  },
  // ... other menu items
];
```

### 5.5 DoctorLayout Layout Structure

```jsx
export default function DoctorLayout() {
  const { logout, user } = useAuth();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      
      {/* Top Navigation Bar */}
      <div className="bg-slate-900 border-b-2 border-slate-700 sticky top-0 z-40">
        <div className="max-w-full px-16 lg:px-28">
          {/* Logo, Navigation, User Info */}
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Outlet />  {/* Child routes render here */}
      </main>

      {/* Footer Status Bar */}
      <footer className="bg-slate-200 border-t-2 border-slate-400 p-2">
        {/* User info, version */}
      </footer>
      
    </div>
  );
}
```

---

## 6. Doctor Dashboard

### 6.1 Dashboard Component

**File:** `src/pages/doctor/DoctorDashboard.jsx`

The Doctor Dashboard provides a comprehensive overview of daily activities and metrics.

### 6.2 Dashboard Layout

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│  DOCTOR DASHBOARD                                                 15-Apr-2026        │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                     │
│  ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐    │
│  │    👥 120       │ │    📅 18        │ │    ⚕️ 32        │ │    🧪 10        │    │
│  │ Total Patients  │ │ Appointments    │ │ Active Cases    │ │ Lab Requests    │    │
│  │ +12 this week   │ │ 4 pending       │ │ 5 critical     │ │ 3 pending       │    │
│  └─────────────────┘ └─────────────────┘ └─────────────────┘ └─────────────────┘    │
│                                                                                     │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                     │
│  ┌───────────────────────────────────────┐  ┌───────────────────────────────────┐  │
│  │ TODAY'S APPOINTMENTS              [View All]  │ PENDING LAB RESULTS             │  │
│  ├──────┬───────┬──────────┬──────────┬────────┤  ├──────┬─────────┬────────┬────┤  │
│  │ ID   │ Time  │ Patient  │ Status   │ Action │  │ Req  │ Patient │ Tests  │ P  │  │
│  ├──────┼───────┼──────────┼──────────┼────────┤  ├──────┼─────────┼────────┼────┤  │
│  │APT-992│10:30 │ John Doe │ Waiting  │ Open   │  │REQ-12│Alice W. │CBC,LFT │ U  │  │
│  │APT-993│10:45 │ Jane Sm. │ In Consult│ Open  │  │REQ-13│Tom H.  │KFT     │ R  │  │
│  │APT-994│11:00 │Robert K. │ Booked   │ Open   │  │REQ-14│Emma S. │Thyroid │ R  │  │
│  └──────┴───────┴──────────┴──────────┴────────┘  └──────┴─────────┴────────┴────┘  │
│                                                                                     │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                     │
│  ┌─────────────────────────┐ ┌─────────────────────────┐ ┌─────────────────────────┐│
│  │ 📊 QUICK STATS          │ │ 📈 PERFORMANCE          │ │ ⚠️ ALERTS               ││
│  ├─────────────────────────┤ ├─────────────────────────┤ ├─────────────────────────┤│
│  │ Avg. Consultation  15min│ │ Completion Rate    94% │ │ 2 lab results urgent   ││
│  │ Patients This Week   87 │ │ Patient Satisfaction 4.8/5 │ │ 3 patients follow-up   ││
│  │ Prescriptions Today  12 │ │ On-time Arrival     89% │ │ 1 prescription pending ││
│  └─────────────────────────┘ └─────────────────────────┘ └─────────────────────────┘│
│                                                                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

### 6.3 StatCard Component

```javascript
const StatCard = ({ title, value, subtitle, icon: Icon, color, onClick }) => (
  <div className="bg-white border-2 border-slate-400 p-4 cursor-pointer hover:shadow-md...">
    <div className="flex items-start justify-between">
      <div>
        <p className="text-xs font-bold text-slate-600 uppercase">{title}</p>
        <p className="text-2xl font-bold text-slate-900">{value}</p>
        {subtitle && <p className="text-xs text-slate-500">{subtitle}</p>}
      </div>
      <div className={color}>
        <Icon className="w-5 h-5" />
      </div>
    </div>
  </div>
);

// Usage
<StatCard
  title="Total Patients"
  value="120"
  subtitle="+12 this week"
  icon={Users}
  color="bg-blue-100 text-blue-700"
  onClick={() => navigate('/doctor/appointments')}
/>
```

### 6.4 StatCards Configuration

| Title | Value | Icon | Color | Click Action |
|-------|-------|------|-------|--------------|
| Total Patients | 120 | Users | `bg-blue-100 text-blue-700` | → `/doctor/appointments` |
| Today's Appointments | 18 | Calendar | `bg-purple-100 text-purple-700` | → `/doctor/appointments` |
| Active Cases | 32 | Activity | `bg-orange-100 text-orange-700` | None |
| Lab Requests | 10 | FlaskConical | `bg-green-100 text-green-700` | None |

### 6.5 Status Indicators

| Status | Color | Tailwind Classes |
|--------|-------|------------------|
| Waiting | Orange | `text-orange-600` |
| In Consult | Blue | `text-blue-600` |
| Booked | Slate | `text-slate-600` |
| Completed | Green | `text-green-600` |
| Cancelled | Red | `text-red-600` |
| URGENT (Priority) | Red Badge | `text-red-700 bg-red-200 border border-red-500 uppercase` |
| Routine (Priority) | Green Badge | `text-green-700 uppercase` |

---

## 7. Components Reference

### 7.1 Authentication Components

| Component | File | Description |
|-----------|------|-------------|
| `Login` | `src/pages/auth/Login.jsx` | Unified login form for Admin and Doctor |
| `ForgotPassword` | `src/pages/auth/ForgotPassword.jsx` | Password reset form |
| `AuthLayout` | `src/components/AuthLayout.jsx` | Layout wrapper for auth pages |

### 7.2 Admin Components

| Component | File | Description |
|-----------|------|-------------|
| `Layout` | `src/components/Layout.jsx` | Main admin layout with navigation |
| `TopNavigation` | `src/components/TopNavigation.jsx` | Horizontal navigation bar |
| `Dashboard` | `src/pages/Dashboard.jsx` | Admin dashboard page |

### 7.3 Doctor Components

| Component | File | Description |
|-----------|------|-------------|
| `DoctorLayout` | `src/pages/doctor/DoctorLayout.jsx` | Doctor module layout |
| `DoctorDashboard` | `src/pages/doctor/DoctorDashboard.jsx` | Doctor dashboard with metrics |
| `AppointmentList` | `src/pages/doctor/AppointmentList.jsx` | List and filter appointments |
| `PatientProfile` | `src/pages/doctor/PatientProfile.jsx` | Patient details with tabs |
| `PrescriptionForm` | `src/pages/doctor/PrescriptionForm.jsx` | Create prescriptions |
| `LabRequest` | `src/pages/doctor/LabRequest.jsx` | Create lab requests |

### 7.4 Utility Components

| Component | File | Description |
|-----------|------|-------------|
| `StatCard` | `src/pages/doctor/DoctorDashboard.jsx` | Reusable metric card |
| `NavItem` | `src/pages/doctor/DoctorLayout.jsx` | Navigation item with dropdown |

---

## 8. API Reference

### 8.1 Authentication API

```javascript
// Login Function
const login = async (credentials) => {
  // credentials: { username: string, password: string, role: string }
  // Returns: { success: boolean, role?: string, error?: string }
  
  // 1. Find user in mockUsers
  const foundUser = Object.values(mockUsers).find(
    (u) => u.username === credentials.username && 
          u.password === credentials.password
  );
  
  // 2. If found, generate token and store
  if (foundUser) {
    const token = `token_${foundUser.role}_${Date.now()}`;
    localStorage.setItem('token', token);
    localStorage.setItem('role', foundUser.role);
    localStorage.setItem('userName', foundUser.name);
    return { success: true, role: foundUser.role };
  }
  
  return { success: false, error: 'Invalid credentials' };
};

// Logout Function
const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('role');
  localStorage.removeItem('userName');
  navigate('/login');
};
```

### 8.2 Doctor API

**File:** `src/pages/doctor/services/doctorApi.js`

```javascript
// Get all appointments
export const getAppointments = async () => {
  const res = await fetch('/api/doctor/appointments', {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return res.json();
};

// Get patient details
export const getPatient = async (id) => {
  const res = await fetch(`/api/patient/${id}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return res.json();
};

// Create prescription
export const createPrescription = async (data) => {
  const res = await fetch('/api/prescription', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify(data),
  });
  return res.json();
};

// Create lab request
export const createLabRequest = async (data) => {
  const res = await fetch('/api/lab/request', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify(data),
  });
  return res.json();
};
```

### 8.3 Data Models

```typescript
// Appointment
interface Appointment {
  id: string;              // 'APT-992'
  time: string;             // '10:30 AM'
  patient: string;          // 'John Doe'
  phone?: string;           // '9876543210'
  status: Status;          // 'Waiting' | 'In Consult' | 'Booked' | 'Completed' | 'Cancelled'
  type: string;             // 'New Case' | 'Follow-up'
  notes?: string;           // 'BP check'
}

// Patient
interface Patient {
  id: string;              // 'PAT-001'
  name: string;            // 'John Doe'
  age: number;             // 45
  gender: string;          // 'Male'
  phone: string;           // '9876543210'
  email: string;           // 'john.doe@email.com'
  bloodGroup: string;      // 'B+'
  allergies?: string;      // 'Penicillin'
  history?: string;        // 'Type 2 Diabetes (5 years)'
  medications?: string;    // 'Metformin 500mg'
  vitals: Vitals;
}

interface Vitals {
  bp: string;              // '130/85'
  heartRate: number;       // 78
  temp: string;            // '98.6°F'
  weight: string;          // '75kg'
}

// Lab Request
interface LabRequest {
  id: string;              // 'REQ-8012'
  patient: string;         // 'Alice Wong'
  tests: string[];         // ['CBC', 'LFT']
  priority: Priority;       // 'Routine' | 'Urgent' | 'Emergency'
  status: string;          // 'Pending' | 'Completed'
  fastingRequired: boolean;
  notes?: string;
}

// Prescription
interface Prescription {
  id: string;              // 'RX-001'
  date: string;            // '2024-01-15'
  diagnosis: string;       // 'Diabetes Follow-up'
  doctor: string;          // 'Dr. Smith'
  medicines: Medicine[];
}

interface Medicine {
  name: string;            // 'Metformin 500mg'
  dosage: string;          // '1-0-1'
  frequency: string;       // 'Twice Daily'
  duration: string;        // '14 Days'
  notes?: string;
}
```

---

## 9. Demo Credentials

### 9.1 Test Accounts

| Role | Username | Password | Redirect URL | Capabilities |
|------|----------|----------|--------------|--------------|
| Administrator | `admin` | `admin123` | `/admin` | Full admin access |
| Doctor | `doctor` | `doctor123` | `/doctor/dashboard` | Doctor module access |

### 9.2 Mock Users Configuration

```javascript
const mockUsers = {
  admin: { 
    username: 'admin', 
    password: 'admin123', 
    role: 'ADMIN', 
    name: 'Administrator' 
  },
  doctor: { 
    username: 'doctor', 
    password: 'doctor123', 
    role: 'DOCTOR', 
    name: 'Dr. Smith' 
  },
};
```

---

## 10. Environment Setup

### 10.1 Prerequisites

- Node.js 18+ 
- npm 9+

### 10.2 Installation

```bash
# Navigate to project directory
cd Admin-Page

# Install dependencies
npm install

# Start development server
npm run dev

# Run linter
npm run lint

# Build for production
npm run build

# Preview production build
npm run preview
```

### 10.3 Development Server

```bash
# Default URL
http://localhost:5173

# Available routes during development
- http://localhost:5173/login
- http://localhost:5173/admin
- http://localhost:5173/doctor/dashboard
```

### 10.4 Environment Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_URL` | Backend API URL | `/api` |

---

## Appendix A: Color Palette

| Name | Hex | Tailwind | Usage |
|------|-----|----------|-------|
| Primary | `#2563eb` | `primary-*` | Buttons, links, accents |
| Slate 900 | `#0f172a` | `slate-900` | Navigation background |
| Slate 700 | `#334155` | `slate-700` | Secondary text |
| Slate 200 | `#e2e8f0` | `slate-200` | Table headers |
| Slate 100 | `#f1f5f9` | `slate-100` | Backgrounds |
| Success | `#16a34a` | `green-*` | Completed, positive |
| Warning | `#ea580c` | `orange-*` | Pending, caution |
| Error | `#dc2626` | `red-*` | Errors, urgent |
| Info | `#0284c7` | `blue-*` | Information |

---

## Appendix B: Tailwind Classes Reference

### Typography

| Class | Description |
|-------|-------------|
| `text-xs` | 12px font size |
| `text-sm` | 14px font size |
| `text-base` | 16px font size |
| `text-lg` | 18px font size |
| `text-xl` | 20px font size |
| `text-2xl` | 24px font size |
| `font-bold` | 700 weight |
| `font-semibold` | 600 weight |
| `uppercase` | Uppercase transform |
| `tracking-wide` | Letter spacing |

### Borders

| Class | Description |
|-------|-------------|
| `border` | 1px border |
| `border-2` | 2px border |
| `border-slate-400` | Slate border color |
| `border-b-2` | Bottom 2px border |

### Layout

| Class | Description |
|-------|-------------|
| `flex` | Display flex |
| `grid` | Display grid |
| `space-y-4` | Vertical spacing |
| `gap-3` | Grid/flex gap |
| `p-4` | Padding all |
| `px-4` | Padding horizontal |
| `py-2` | Padding vertical |

---

## Appendix C: Version Information

| Item | Value |
|------|-------|
| Application Version | 4.2.0 |
| Build Number | 8912 |
| React Version | 19.2.4 |
| React Router Version | 7.14.1 |
| Tailwind CSS Version | 3.4.19 |
| Vite Version | 8.0.4 |

---

## Appendix D: Troubleshooting

### Common Issues

| Issue | Solution |
|-------|----------|
| Blank screen after login | Check localStorage for token/role |
| Route not found | Verify BrowserRouter wraps App |
| Outlet not defined | Import Outlet from react-router-dom |
| Icons not showing | Verify lucide-react is installed |
| Styles not applied | Run `npm install` to ensure dependencies |

### Debug Commands

```bash
# Clear localStorage (reset auth state)
localStorage.clear()

# Check localStorage in browser console
console.log(localStorage)

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

---

*Document Version: 1.0*  
*Last Updated: April 15, 2026*  
*Author: ElabAssist Development Team*

---

**End of Documentation**
