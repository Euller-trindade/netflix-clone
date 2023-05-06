import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import NetflixLogo from '../../assets/netflixLogo.png';

const Header = ({ black }) => {
  return (
    <header className={black ? "header--black" : ""}>
      <div className="header--logo">
        <Link to="/home">
          <img
            src={NetflixLogo}
            alt="Netflix"
          />
        </Link>
      </div>
      <div className="header--usuario">
        <Link to="/">
          <img
            src="https://i.pinimg.com/originals/eb/05/eb/eb05eb6fb0880b5c811669b60b0278bb.png"
            alt="usuário"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
