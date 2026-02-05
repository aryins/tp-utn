
import { Link } from "react-router-dom";

const Header = () => {
  return (  
<header className="main-header">

    <h1>Caffee</h1>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/quienes-somos">Quienes Somos</Link></li>
      </ul>
    </nav>
  </header>
  );
}
 
 export { Header };