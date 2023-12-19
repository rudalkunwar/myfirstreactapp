import "./App.css";
import Navbar from "./Components/Navbar/navbar";
import Number from "./Components/Numbers";
import Num from "./Components/Num";
import Namee from "./Components/Nameprops";
import Eventhandeler from "./Components/Eventhandle";
import Footer from "./Components/Footer/Footer";
import axios from "axios";
import Form from "./Components/Form";
import Header from "./Components/Demo/Header";
import Content from "./Components/Demo/Content";
import React, { Component } from "react";
import Time from "./Components/Time";
class App extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    //   this.state = {
    //     fruits: [
    //       {
    //         name: "orange",
    //         colour: "orange",
    //       },
    //       {
    //         name: "banana",
    //         colour: "yellow",
    //       },
    //       {
    //         name: "Apple",
    //         colour: "Red",
    //       },
    //       {
    //         name: "Grapes",
    //         colour: "blue",
    //       },
    //     ],
    //     isShow: true,
    //   };
  }
  // togglehandel() {
  //   this.setState({ isShow: !this.state.isShow });
  // }
  // removeItem = (itemIndex) => {
  //   const oldfruits = this.state.fruits;
  //   oldfruits.splice(itemIndex, 2);
  //   this.setState({ fruits: oldfruits });
  // };
  render() {
    //   let fruits;
    //   fruits = this.state.fruits.map((p, index) => {
    //     <button
    //       onClick={() => this.removeItem()}
    //       style={{ background: "red", color: "white" }}
    //     >
    //       Delete
    //     </button>;
    //     return (
    //       <Namee
    //         key={index}
    //         name={p.name}
    //         colour={p.colour}
    //         remove={() => this.removeItem(index)}
    //       />
    //     );
    //   });
    return (
      // <div>
      //   <Navbar />
      //   <Number />
      //   <button className="btn" onClick={this.togglehandel.bind(this)}>
      //     {this.state.isShow === true ? "Hide" : "Show"}
      //   </button>
      //   <Eventhandeler />
      //   {this.state.isShow === true ? fruits : ""}
      // </div>
      // <div>
      //   <Form/>
      // </div>
      <div>
        <Header />
        {/* <Content msg="This is my message heheheheheheh" /> */}
        <Time/>
        <Footer />
      </div>
    );
  }
}
export default App;
