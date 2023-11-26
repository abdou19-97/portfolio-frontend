import { Link } from "react-router-dom";
import "./AboutContent.css";

import React from "react";

function AboutContent() {
  return (
    <div className="about">
      <div className="left">
        <h1>ABOUT ME</h1>
        <p>
          I am Abdou Sidiya, a recent graduate in computer science deeply
          passionate about crafting web applications and harnessing the
          potential of data structures. My journey led me to acquire a
          bachelor's degree in computer science from IUPUI, during which I
          engaged in various web development projects, honing my skills and
          putting theory into practice. My expertise extends to working on data
          structures assignments and projects using languages such as C++ and
          Java. As a committed team player, I excel in communication and
          collaboration, thriving in dynamic settings where problem-solving is
          paramount. I am actively pursuing opportunities in entry-level to
          mid-level roles within software engineering, web development, or
          application development. My goal is to leverage my current expertise
          while expanding my skill set further. My enthusiasm for programming is
          rooted in a desire to create products that offer substantial value and
          enhance user experiences. I am eager to contribute my passion and
          skills to initiatives that make a meaningful impact. Please don't
          hesitate to reach out to explore potential collaborations. I am open
          to remote work opportunities or relocating for the right role.
        </p>
        <Link to="/contact" className="btn">
          Contact
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img
              src="https://th.bing.com/th/id/OIG.o_D4mByw2vw8mRcYg3bx?pid=ImgGn"
              alt="profile"
              className="img"
            />
          </div>
          <div className="img-stack bottom">
            <img
              src="https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
              alt="profile"
              className="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutContent;
