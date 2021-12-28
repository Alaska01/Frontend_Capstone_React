import { Link } from 'react-router-dom';

const Footer = () => (
  <div>
    <footer className=" text-white text-center">
      <div className="footer-link">
        <Link to="/home" className="logo text-center">
          Find House
        </Link>
        © 2021 Copyright
      </div>
    </footer>
  </div>
);

export default Footer;

