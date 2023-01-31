import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "./logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav
        className="custom-navbar navbar sticky-top navbar-expand-lg navbar-ligth bg-light"
        id="navbar"
      >
        <div className="container-fluid">
          <NavLink className="logo navbar-brand" to="#">
            <img src={logo} alt="logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarNav"
            style={{
              backgroundColor: "var(--accent-color)",
              borderRadius: "20px",
            }}
          >
            <ul className="custom-navbar-nav navbar-nav ms-auto text-center">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link" to="#event">
                  Events
                </HashLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/leaderboard">
                  Leaderboard
                </NavLink>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link" to="#blogs">
                  Blogs
                </HashLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/team">
                  Team
                </NavLink>
              </li>
            </ul>
            <ul className="custom-navbar-nav navbar-nav ms-auto text-center">
              <li className="custom-contact nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
