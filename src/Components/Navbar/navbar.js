import React, { Component } from "react";
import Navbarcss from "./navbar.module.css";
class Navbar extends Component {
  render() {
    const logo = {
      backgroundColor: "Red",
      color:"blue"
    };
    return (
      <div>
        <nav className={Navbarcss.nav}>
          <div className="logo">
            <span style={logo}>logo</span>
          </div>
          <ul className={Navbarcss.uli}>
            <li style={{color:"blue"}}>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            <li>
              <a>Services</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default Navbar;
