import { FaGithub, FaLinkedin, FaTelegramPlane } from 'react-icons/fa';
import { MdWebAsset } from "react-icons/md";
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-text">
            Ostrynska Kateryna - Test Task. 2025
          </div>
          <ul className="footer-socials">
            <li>
              <a
                href="https://github.com/Ostrynska"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                <FaGithub className="footer-icon" />
              </a>
            </li>
            <li>
              <a
                href="https://ostrynska-kateryna.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                <MdWebAsset className="footer-icon" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/kateryna-ostrynska-9155b0151"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                <FaLinkedin className="footer-icon" />
              </a>
            </li>
            <li>
              <a
                href="https://t.me/kateryna_ostrynska"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                <FaTelegramPlane className="footer-icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
