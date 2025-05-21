import "./Header.scss";
import siteLogo from "../../Assets/Branding/logo.png";
import { Link } from "react-router-dom";

let homeClass = "";
let contactClass = "";
let aboutClass = "";

function Header({ page, setPage }) {
  page === "home"
    ? (homeClass = "nav__item-active")
    : (homeClass = "nav__item-inactive");
  page === "contact"
    ? (contactClass = "nav__item-active")
    : (contactClass = "nav__item-inactive");
  page === "about"
    ? (aboutClass = "nav__item-active")
    : (aboutClass = "nav__item-inactive");
  return (
    <header className="header">
      <div className="header__branding">
        <img src={siteLogo} alt="site logo" className="header__logo" />
      </div>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/" onClick={() => setPage("home")}>
              <h3 className={homeClass}>Home</h3>
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/about" onClick={() => setPage("about")}>
              <h3 className={aboutClass}>About Me</h3>
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/contact" onClick={() => setPage("contact")}>
              <h3 className={contactClass}>Contact</h3>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
