import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            const data = await res.json();
            if (data.success) {
                switch (data.userType) {
                    case 'Administrador':
                        navigate('/AdminRegister');
                        break;
                    case 'Médico':
                        navigate('/DoctorRegister');
                        break;
                    case 'Paciente':
                        navigate('/PatientRegister');
                        break;
                    default:
                        break;
                }
            } else {
                setError('Credenciais inválidas.');
            }
        } catch (error) {
            setError('Erro ao fazer login.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div>
                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Senha</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Entrar</button>
            {error && <p>{error}</p>}
        </form>
    );
};

export default Login;
