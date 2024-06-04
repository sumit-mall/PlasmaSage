import React from "react";
import "./Navbar.css";
import logo_light from "../../assets/logo-black.png";
import logo_dark from "../../assets/logo-white.png";
import toggle_light from "../../assets/night.png";
import toggle_dark from "../../assets/day.png";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = ({ theme, setTheme }) => {
  const {loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  const toggle_mode = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div>
      <div className="navbar">
        <img
          src={theme == "light" ? logo_light : logo_dark}
          alt=""
          className="logo"
        />
        <div
          className="toggleMenu"
          onClick={() => {
            toggleMenu();
          }}
        ></div>

        <a href="/">
          <li className="nav-home">Home</li>
        </a>
        <a href="/donate">
          <li className="nav-donate">Donate</li>
        </a>
        <a href="/request">
          <li className="nav-request">Request</li>
        </a>
        <a href="/bloodbank">
          <li className="nav-bloodbank">BloodBank</li>
        </a>
        <a href="/about">
          <li className="nav-about">About</li>
        </a>
        <li>{isAuthenticated && <p>{user.name}</p>}</li>
        {isAuthenticated ? (
          <li>
            <button
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log Out
            </button>
          </li>
        ) : (
          <li>
            <button onClick={() => loginWithRedirect()}>Log In</button>
          </li>
        )}

        <img
          onClick={() => {
            toggle_mode();
          }}
          src={theme == "light" ? toggle_light : toggle_dark}
          alt=""
          className="toggle-icon"
        />
      </div>
    </div>
  );
};

export default Navbar;
