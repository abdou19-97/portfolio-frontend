import "./MasterPageStyle.css";
import BgImg from "../images/home-bg.jpg";
import React from "react";
import { Link } from "react-router-dom";

const MasterPage = () => {
  return (
    <div className="master">
      <div className="mask">
        <img className="into-img" src={BgImg} alt="home-bg" />
      </div>
      <div className="content">
        <p>Hi, my name is Abdou</p>
        <p>I'm a full-stack web developer</p>
        <div>
          <Link to="/projects" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MasterPage;
