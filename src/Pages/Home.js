import React from "react";
import MasterPage from "../components/MasterPage";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Mywork from "../project/Mywork";
const Home = () => {
  return (
    <div>
      <Navbar />
      <MasterPage />
      <Mywork />
      <Footer />
    </div>
  );
};

export default Home;
