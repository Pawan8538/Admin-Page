export const login = async (data) => {
  const res = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const getAppointments = async () => {
  const res = await fetch('/api/doctor/appointments', {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return res.json();
};

export const getPatient = async (id) => {
  const res = await fetch(`/api/patient/${id}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return res.json();
};

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

export const getLabResults = async (patientId) => {
  const res = await fetch(`/api/lab/results/${patientId}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return res.json();
};

export const getPrescriptions = async (patientId) => {
  const res = await fetch(`/api/prescriptions/${patientId}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return res.json();
};
