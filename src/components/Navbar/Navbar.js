import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="Navbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
        <Link className="navbar-brand" href="#">
          <img src={logo} alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link hvr-underline-from-center">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/find-pet"
                className="nav-link hvr-underline-from-center"
              >
                Find a pet
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/vet-services"
                className="nav-link hvr-underline-from-center"
              >
                Vet Services
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link hvr-underline-from-center"
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              aria-label="Search"
            />
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
