import { Link } from "react-router-dom";
import "./AboutContent.css";

import React from "react";

function AboutContent() {
  return (
    <div className="about">
      <div className="left">
        <h1>ABOUT ME</h1>
        <p>
          I'm Abdou Sidiya, a computer science graduate with a passion for
          building web applications and working with data structures. I recently
          completed my bachelor's degree in computer science from IUPUI.
          Throughout my academic journey, I had the opportunity to work on
          several web development projects that allowed me to apply my knowledge
          and enhance my skills. I also completed data structures assignments
          and projects using languages like C++ and Java. I'm a dedicated team
          player with strong communication and collaboration abilities. I thrive
          in fast-paced environments and enjoy finding creative solutions to
          complex problems. I am seeking entry-level to mid-level software
          engineering, web development or application development roles where I
          can apply my existing knowledge and also expand my skillset. I'm
          excited to bring my passion for programming to build products that
          deliver value and enrich user experiences. Please feel free to contact
          me to explore opportunities where I can contribute my passion for
          programming and delivering impactful products. I'm open to remote work
          or relocating for the right opportunity.
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
