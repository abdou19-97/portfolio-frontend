import "./FooterStyle.css";
import {
  FaGithub,
  // FaHome,
  FaMailBulk,
  // FaPhone,
  FaLinkedin,
} from "react-icons/fa";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <p>Designed by Abdou Sidiya</p>
        </div>
        <div className="middle">
          <p>copyright © 2023 by AS</p>
        </div>
        <div className="right">
          <div className="social">
            <a
              href="https://github.com/abdou19-97"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/abdousidiya/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
            <a href="mailto:diyamed98@gmail.com">
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
