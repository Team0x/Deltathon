import React from "react";
import { Link } from "react-router-dom";
import logo from '../images/logo.png'

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-md bg-dark position-fixed">
        <Link className="navbar-brand ms-4 fs-1" to="#"><img src={logo} alt='Logo' /></Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#btn"
          aria-controls="#btn"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="btn">
          <ul className="navbar-nav ms-auto me-5">
            <li className="nav-item">
              <Link className="nav-link mx-2" to="/">Home</Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link mx-2" to="/buyandsell" target="_self"
                >Buy and sell</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-2" to="/detection">Detection</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-2" to="/weatherforecast"> Weatherforecast</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-2" to="/contract">contact us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
