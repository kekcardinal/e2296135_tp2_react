import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Accueil
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/portail" className="nav-link">
              Portail
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
