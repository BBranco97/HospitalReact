import React, { useState } from 'react';
import Input from '../componets/Input';
import Button from '../componets/Button';

const Form = ({ userType }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    crm: ''
  });
  const [response, setResponse] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://seu-backend-api.com/cadastrar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userType,
          ...formData
        })
      });
      const data = await res.json();
      setResponse(data.message);
    } catch (error) {
      console.error('Erro ao enviar os dados', error);
      setResponse('Erro ao cadastrar.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Cadastro de {userType}</h2>

      <Input
        label="Nome"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <Input
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <Input
        label="Senha"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />

      {userType === 'Médico' && (
        <Input
          label="CRM"
          type="text"
          name="crm"
          value={formData.crm}
          onChange={handleChange}
        />
      )}

      <Button type="submit" text="Cadastrar" />

      {response && <p>{response}</p>}
    </form>
  );
};

export default Form;
