import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminRegister from './pages/AdminRegister';
import DoctorRegister from './pages/DoctorRegister';
import PatientRegister from './pages/PatientRegister';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/cadastro-admin" element={<AdminRegister />} />
        <Route path="/cadastro-medico" element={<DoctorRegister />} />
        <Route path="/cadastro-paciente" element={<PatientRegister />} />
      </Routes>
    </Router>
  );
}

export default App;

