import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="logo">Flame Sizzle & Grills</h1>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? 'change' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'change' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'change' : ''}`}></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
