import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/cadastro-admin">Cadastro Admin</Link></li>
                <li><Link to="/cadastro-medico">Cadastro Médico</Link></li>
                <li><Link to="/cadastro-paciente">Cadastro Paciente</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
