import { useState } from "react";
import "../../css/SideBar.css";
import { Link } from "react-router-dom";

import DashboardIcon from "@mui/icons-material/Dashboard";
import BarChartIcon from "@mui/icons-material/BarChart";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const SideBar = () => {
    const [active, setActive] = useState("dashboard");

    const menuItems = [
        { id: "dashboard", label: "Dashboard", icon: <DashboardIcon /> },
        { id: "analytics", label: "Relatórios", icon: <BarChartIcon /> },
        { id: "users", label: "Usuários", icon: <PeopleIcon /> },
        { id: "settings", label: "Configurações", icon: <SettingsIcon /> },
    ];

    return (
        <div className="sidebar">
            {/* Avatar */}
            <div className="avatar">
                <AccountCircleIcon sx={{ fontSize: 80 }} className="avatar-icon" />
                <span className="name">Jakson Bernardo</span>
                <span className="role">Administrador</span>
            </div>

            {/* Menu */}
            <div className="options">
                {menuItems.map((item) => (
                    <button
                        key={item.id}
                        className={`btn-option ${active === item.id ? "active" : ""}`}
                        onClick={() => setActive(item.id)}
                    >
                        {item.icon}
                        <span>{item.label}</span>
                    </button>
                ))}
            </div>

            {/* Footer */}
            <div>
                {/* <a href="/" className="btn-option logout">
                    <LogoutIcon />
                    <span>Sair</span>
                </a> */}
                <Link to="/login" className="btn-option logout">
                    <LogoutIcon />
                    <span>Sair</span>
                </Link>
            </div>
        </div>
    );
};

export default SideBar;
