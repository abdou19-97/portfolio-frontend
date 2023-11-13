import "./MasterPageStyle2.css";
import React, { Component } from "react";

class MasterPage2 extends Component {
  render() {
    return (
      <div className="master-img">
        <div className="heading">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default MasterPage2;
