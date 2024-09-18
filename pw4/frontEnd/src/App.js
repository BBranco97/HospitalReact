import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminRegister from '/pages/AdminRegister';
import DoctorRegister from '/pages/DoctorRegister';
import PatientRegister from '/pages/PatientRegister';
import Login from '/pages/Login';
import Navbar from "./componets/Navbar";

function App() {
  return (
    <Router>
        <Navbar />
      <Routes>
        <Route path="/cadastro-admin" element={<AdminRegister />} />
        <Route path="/cadastro-medico" element={<DoctorRegister />} />
        <Route path="/cadastro-paciente" element={<PatientRegister />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;

