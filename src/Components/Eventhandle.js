import React, { Component } from "react";
class Eventhandeler extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    // another method is this for event handeling
    // this is another binding technique
    // this.changeme = this.changeme.bind(this);
  }
// //   we cannot use event directly as this object is binded by the method itself
  changeme(){
    console.log(this.props);

  }

//the most efficient and simple way is to use arrow function
// changeme = () =>{
//     console.log(this.props);
// }


changeme(){
    console.log(this.props);
}
  render(){
    return(
        <div>
            <i>Hi this me practicing event</i><br/>
            {/* using ()=>this methos */}
            {/* <button onClick={()=>this.changeme()}>Click</button> */}
            {/* using binding method */}
            {/* <button onClick={this.changeme.bind(this)}>Click</button> */}
            <button onClick={this.changeme}>Click</button>
        </div>
    );
  }
}
export default Eventhandeler;
