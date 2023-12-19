import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <div>
        {" "}
      
        <div className="main">
          <span className="header">
            <i className="icon1 ri-bar-chart-horizontal-fill"></i>
            <h2>Timeline</h2>
            <i className="icon2 ri-search-2-line"></i>
          </span>
        </div>
      </div>
    );
  }
}

export default Header;
