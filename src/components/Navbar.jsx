import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';
import { useOrder } from '../context/OrderContext';
import OrderModal from './OrderModal';
import { FaShoppingCart } from 'react-icons/fa'; // 🛒 Import cart icon

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const { orderItems } = useOrder();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="logo">Flame Sizzle & Grills</h1>
        
        <div className="nav-right">
          <div className="order-icon-wrapper" onClick={() => setIsOrderOpen(true)}>
            <FaShoppingCart className="order-icon" />
            {orderItems.length > 0 && <span className="cart-count">{orderItems.length}</span>}
          </div>
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
      </div>

      <OrderModal isOpen={isOrderOpen} onClose={() => setIsOrderOpen(false)} />
    </nav>
  );
}

export default Navbar;
