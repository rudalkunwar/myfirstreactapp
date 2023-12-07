import React, { Component } from "react";
class Namee extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const style = {
      height: "200px",
      display: "flex",
      allignItem: "center",
      justifyContent: "center",
    };
    const pstyle = {
      color: "red",
      boxShadow: "0px 0px 5px blue",
      width:"50%"
    };
    return (
      <div style={style}>
        <div style={pstyle} onClick={this.props.remove}>
          <ul>
            <li><span>Name:</span> <span> {this.props.name}</span></li>
            <li><span>Colour:</span> <span> {this.props.colour}</span></li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Namee;
