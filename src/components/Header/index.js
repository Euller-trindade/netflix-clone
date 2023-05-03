import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const Header = ({ black }) => {
  return (
    <header className={black ? "header--black" : "header--home"}>
      <div className="header--logo">
        <Link to="/home">
          <img
            src="https://www.pngall.com/wp-content/uploads/4/Netflix-Logo-HD.png"
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
