import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MasterPage2 from "../components/MasterPage2";
import AboutContent from "../components/AboutContent";

const About = () => {
  return (
    <div>
      <Navbar />
      <MasterPage2
        heading="ABOUT ME."
        text="I am a full stack web developer with a passion for learning and creating."
      />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
