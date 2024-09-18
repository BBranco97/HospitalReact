import React, { useState } from 'react';
import Form from '../componets/Form';

const DoctorRegister = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    crm: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Médico cadastrado:', formData);
    // Enviar os dados para o backend aqui
  };

  return (
    <div>
      <Form
        userType="Médico"
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default DoctorRegister;
