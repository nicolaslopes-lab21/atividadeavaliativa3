import "./style.css";

function Header() {
  return (
    <header className="header">
      <h1>Homenagem Especial</h1>
      <nav>
        <a href="#inicio">Início</a>
        <a href="#mae">Mãe</a>
        <a href="#pai">Pai</a>
        <a href="#galeria">Galeria</a>
        <a href="#videos">Vídeos</a>
      </nav>
    </header>
  );
}

export default Header;