import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../styles/footer.scss'; // Import the SCSS file

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <div className="container-fluid">
      <footer>
        {/* Footer Navigation */}
        <nav aria-label="Footer Navigation">
          <ul className="nav justify-content-center border-bottom pb-3 mb-4">
            <li className="nav-item">
              <a href="#" className="nav-link px-3 text-secondary">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-3 text-secondary">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-3 text-secondary">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-3 text-secondary">
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-3 text-secondary">
                About
              </a>
            </li>
          </ul>
        </nav>

        {/* Social Media Links */}
        <div className="d-flex justify-content-center mb-4">
          <a href="#" className="text-secondary mx-2" aria-label="Facebook">
            <FaFacebook size={24} className="hover-scale" />
          </a>
          <a href="#" className="text-secondary mx-2" aria-label="Twitter">
            <FaTwitter size={24} className="hover-scale" />
          </a>
          <a href="#" className="text-secondary mx-2" aria-label="Instagram">
            <FaInstagram size={24} className="hover-scale" />
          </a>
        </div>

        {/* Dynamic Year */}
        <div className="text-center">
          <p className="text-secondary mb-0">
            © {currentYear} Company, Inc. All rights reserved.
          </p>
        </div>

        {/* Back to Top Button */}
        <div className="text-center back-to-top">
          <a href="#">Back to top</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
