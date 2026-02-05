import "../styles/header.css";
const Header = () => {
  return (  
<header className="main-header">

    <h1>Caffee</h1>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/productos">Productos</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/registro">Registro</a></li>
      </ul>
    </nav>
  </header>
  );
}
 
 export { Header };