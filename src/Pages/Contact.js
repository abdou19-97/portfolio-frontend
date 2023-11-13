import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MasterPage2 from "../components/MasterPage2";
import Form from "../components/Form";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <MasterPage2 heading="Contact Us" text="Let's Connect:)" />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
