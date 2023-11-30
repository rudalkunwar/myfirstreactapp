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
    };
  }
  render() {
    let fruits;
    fruits = this.state.fruits.map((p) => {
      return <Namee name={p.name} colour={p.colour} />;
    });
    return (
      <div>
        <Navbar />
        <Number />

        <Eventhandeler />
        <Footer />
        {fruits}
      </div>
    );
  }
}

export default App;
