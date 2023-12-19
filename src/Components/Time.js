import React, { Component } from "react";
import "./Time.css";
class Time extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
    time:"",
    };
  }
  setTime(){
    const clock = new Date();
    let tt = clock.toLocaleTimeString();
    this.setState ({
      time : tt,
    });
    setTimeout(() => {
      this.setTime();
    }, 1000);
  }
  componentDidMount() {
    this.setTime();
  }
  render() {
    const {time} = this.state;
    return (
      <div>
        <div className="time">
          <p className="show-time">
            {time}
          </p>
        </div>
      </div>
    );
  }
}
export default Time;
