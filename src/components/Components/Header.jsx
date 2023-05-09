import React from "react";
import Logo from "../../images/logo.png";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-primary img-zoom">
      <Link to="/home">
        <div className="logo">
          <img src={Logo} className="toritto" />
         
        </div>
      </Link>
      <ul className="p-1">
        <li>
          <Link to="/home" className="text-decoration-none text-white">
            home
          </Link>
        </li>
        <li>
          <Link to="/clothes" className="text-decoration-none text-white">
            clothes
          </Link>
        </li>
        <li>
          <Link to="/work" className="text-decoration-none text-white">
            work
          </Link>
        </li>
        <li>
          <Link to="/about-me" className="text-decoration-none text-white">
            about me
          </Link>
        </li>
      </ul>
    </header>
  );
};
