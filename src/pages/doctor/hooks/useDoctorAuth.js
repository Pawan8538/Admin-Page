export const isDoctor = () => {
  return localStorage.getItem('role') === 'DOCTOR';
};

export const getDoctorToken = () => {
  return localStorage.getItem('token');
};

export const getDoctorInfo = () => {
  return {
    name: localStorage.getItem('userName'),
    role: localStorage.getItem('role'),
  };
};
