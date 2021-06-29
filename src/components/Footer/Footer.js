import './Footer.css';
import {Link} from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
        <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              AnyWorkD
              <i class='fab fa-typo3' />
            </Link>
          </div>
          </div>
        </section>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/why'>Why AnyWorkD</Link>
            <Link to='/how'>How it works</Link>
            <Link to='/terms'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/contact'>Contact</Link>
            
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
          </div>
        </div>
      </div>        
    </div>
  );
}

export default Footer;
