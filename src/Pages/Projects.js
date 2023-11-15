import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MasterPage2 from "../components/MasterPage2";
import Mywork from "../project/Mywork";

const Projects = () => {
  return (
    <div>
      <Navbar />
      <MasterPage2 heading="PROJECTS." text="Check out my most recent work!" />
      <Mywork />
      <Footer />
    </div>
  );
};

export default Projects;
