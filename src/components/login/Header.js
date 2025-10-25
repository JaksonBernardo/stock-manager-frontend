import '../../css/Header.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <nav className="navbar">
            <div className="logo">SmartStock</div>
            <ul className="nav-links">
                <li><Link to="/">Início</Link></li>
                <li><Link to="/about">Sobre</Link></li>
                <li><Link to="/home">Dashboard</Link></li>
                <li><Link to="/login" style={{ display: "flex", alignItems: "center", flexDirection: "row", gap: "0px 5px" }}><AccountCircleIcon /> Entrar</Link></li>
            </ul>
        </nav>
    )

}

export default Header;
