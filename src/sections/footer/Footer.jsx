import './footer.css';
import { FaFacebook } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io';


const Footer = () => {
  return (
    <footer>
      <a href='#top' className='footer__logo'>EGATOR</a>

      <ul className='permalinks'>
        <li><a href="#top">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com" rel="noreferrer" target='_blank'><FaFacebook/></a>
        <a href="https://www.instagram.com" rel="noreferrer" target='_blank'><FiInstagram /></a>
        <a href="https://www.twitter.com" rel="noreferrer" target='_blank'><IoLogoTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Portfolio. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer