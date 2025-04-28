import { FaTiktok, FaSnapchatGhost, FaInstagram, FaPhoneAlt } from 'react-icons/fa';
import './Footer.css'; // Make sure you have a Footer.css for the styles

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-socials">
        <p>Follow us:</p>
        <div className="social-icons">
          <a href="https://www.tiktok.com/@flamesizzlegrills5" target="_blank" rel="noopener noreferrer">
            <FaTiktok />
          </a>
          <a href="https://www.snapchat.com/add/flameandsizzlegrills" target="_blank" rel="noopener noreferrer">
            <FaSnapchatGhost />
          </a>
          <a href="https://www.instagram.com/flameandsizzlegrills" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>

      <div className="footer-contact">
        <p><FaPhoneAlt /> 0530505545</p>
      </div>

      <p className="footer-copy">© {new Date().getFullYear()} Flame Sizzle and Grills. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
