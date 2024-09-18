import React, { useState } from 'react';
import Form from '../componets/Form';

const PatientRegister = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Paciente cadastrado:', formData);
    // Enviar os dados para o backend aqui
  };

  return (
    <div>
      <Form
        userType="Paciente"
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default PatientRegister;
