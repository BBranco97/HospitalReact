import React from 'react';

const Input = ({ label, type, name, value, onChange }) => {
  return (
    <div className="input-group">
      <label>{label}</label>
      <input 
        type={type} 
        name={name} 
        value={value} 
        onChange={onChange} 
        required
      />
    </div>
  );
};

export default Input;
