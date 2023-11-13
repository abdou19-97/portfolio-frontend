import "./FormStyle.css";

import React from "react";

const From = () => {
  return (
    <div className="form">
      <form>
        <label>Your Name</label>
        <input type="text" placeholder="Enter Your Name" />
        <label>Your Email</label>
        <input type="email" placeholder="Enter Your Email" />
        <label>Subject</label>
        <input type="text" placeholder="Enter Subject" />
        <label>Your Message</label>
        <textarea placeholder="Enter Your Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default From;
