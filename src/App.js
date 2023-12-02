import "./App.css";
import Navbar from "./Components/Navbar/navbar";
import Number from "./Components/Numbers";
import Num from "./Components/Num";
import Namee from "./Components/Nameprops";
import Eventhandeler from "./Components/Eventhandle";
import Footer from "./Components/Footer/Footer";
import axios from "axios";
import React, { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      fruits: [
        {
          name: "orange",
          colour: "orange",
        },
        {
          name: "banana",
          colour: "yellow",
        },
        {
          name: "Apple",
          colour: "Red",
        },
        {
          name: "Grapes",
          colour: "blue",
        },
      ],
      isShow : true,
    };
  }
  togglehandel() {
    this.setState({isShow: !this.state.isShow});
  }
  render() {
    let fruits;
    fruits = this.state.fruits.map((p, index) => {
      return <Namee key={index} name={p.name} colour={p.colour} />;
    });
    return (
      <div>
        <Navbar />
        <Number />
        <button className="btn" onClick={this.togglehandel.bind(this)}>{this.state.isShow===true?"Hide":"Show"}</button>
        <Eventhandeler />
        <Footer />
        {this.state.isShow === true ?fruits:""}
      </div>
    );
  }
}

export default App;
