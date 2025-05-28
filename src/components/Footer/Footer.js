import "./Footer.scss";
import instaIcon from "../../Assets/Icons/instagram_icon.png";
import linkedinIcon from "../../Assets/Icons/linkedin_icon.png";

function Footer() {
  return (
    <footer className="footer">
      <a
        href="https://www.instagram.com/aurorahull.design/"
        className="footer__link"
      >
        <img src={instaIcon} alt="instagram" className="footer__icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/aurora-hull/"
        className="footer__link"
      >
        <img src={linkedinIcon} alt="linkedIn" className="footer__icon" />
      </a>
      <p className="footer__text">©Copyright Aurora Hull 2025</p>
    </footer>
  );
}

export default Footer;
