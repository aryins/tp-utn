import { use, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import { useAuth } from "../context/AuthContext.jsx";


const Header = () => {
const { logout, user } = useAuth();
  return (  
<header className="main-header">

    <h1>Caffee</h1>
    <nav>
      <ul>
        {user && <li><Link to="/">Home</Link></li>}
        <li><Link to="/quienes-somos">Quienes Somos</Link></li>
        {!user && <li><Link to="/registrarme">Registrarme</Link></li>}
        <li><Link to="/login">Ingresar</Link></li>
      </ul>
      {user && <button onClick={() => {logout()}}>cerrar sesión</button>}
      
    </nav>
  </header>
  );
}
 
 export { Header };