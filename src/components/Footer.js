import React from "react";
import "./Footer.css";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="col col-1">
          <Link to="/">
            <h2>
              iCe<span className="primary">Coin</span>
            </h2>
          </Link>
        </div>
        <div className="col">
          <h5>Support</h5>
          <span className="bar"></span>
          <a href="/">Contact</a>
          <a href="/">Chat</a>
          <a href="/">Help Center</a>
          <a href="/">FAQ</a>
        </div>
        <div className="col">
          <h5>Developers</h5>
          <span className="bar"></span>
          <a href="/">Cloud</a>
          <a href="/">Commerce</a>
          <a href="/">Pro</a>
          <a href="/">API</a>
        </div>
        <div className="col">
          <h5>Company</h5>
          <span className="bar"></span>
          <a href="/">About</a>
          <a href="/">Information</a>
          <a href="/">Legal</a>
          <a href="/">Privacy</a>
        </div>
        <div className="col">
          <h5>Social</h5>
          <span className="bar"></span>
          <a href="/">
            <FaFacebook className="icon" />
          </a>
          <a href="/">
            <FaTwitter className="icon" />
          </a>
          <a href="/">
            <FaLinkedin className="icon" />
          </a>
          <a href="/">
            <FaGithub className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
