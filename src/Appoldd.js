// // import "./App.css";
// // import Navbar from "./Components/Navbar/navbar";
// // import Number from "./Components/Numbers";
// // import Num from "./Components/Num";
// // import Namee from "./Components/Nameprops";
// // import Eventhandeler from "./Components/Eventhandle";
// // import Footer from "./Components/Footer/Footer";
// // import axios from "axios";
// // import Form from "./Components/Form";
// // import Header from "./Components/Demo/Header";
// // import Content from "./Components/Demo/Content";
// // import React, { Component } from "react";
// // import Time from "./Components/Time";
// // import React, { Component } from "react";
// // import "./App.css";
// // import Registration from "./Components/Registration/Registration";
// // import Welcome from "./Components/Registration/Welcome";
// // class App extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.props = props;
// //     //   this.state = {
// //     //     fruits: [
// //     //       {
// //     //         name: "orange",
// //     //         colour: "orange",
// //     //       },
// //     //       {
// //     //         name: "banana",
// //     //         colour: "yellow",
// //     //       },
// //     //       {
// //     //         name: "Apple",
// //     //         colour: "Red",
// //     //       },
// //     //       {
// //     //         name: "Grapes",
// //     //         colour: "blue",
// //     //       },
// //     //     ],
// //     //     isShow: true,
// //     //   };
// //   }
// //   // togglehandel() {
// //   //   this.setState({ isShow: !this.state.isShow });
// //   // }
// //   // removeItem = (itemIndex) => {
// //   //   const oldfruits = this.state.fruits;
// //   //   oldfruits.splice(itemIndex, 2);
// //   //   this.setState({ fruits: oldfruits });
// //   // };
// //   render() {
// //     //   let fruits;
// //     //   fruits = this.state.fruits.map((p, index) => {
// //     //     <button
// //     //       onClick={() => this.removeItem()}
// //     //       style={{ background: "red", color: "white" }}
// //     //     >
// //     //       Delete
// //     //     </button>;
// //     //     return (
// //     //       <Namee
// //     //         key={index}
// //     //         name={p.name}
// //     //         colour={p.colour}
// //     //         remove={() => this.removeItem(index)}
// //     //       />
// //     //     );
// //     //   });
// //     return (
// //       // <div>
// //       //   <Navbar />
// //       //   <Number />
// //       //   <button className="btn" onClick={this.togglehandel.bind(this)}>
// //       //     {this.state.isShow === true ? "Hide" : "Show"}
// //       //   </button>
// //       //   <Eventhandeler />
// //       //   {this.state.isShow === true ? fruits : ""}
// //       // </div>
// //       // <div>
// //       //   <Form/>
// //       // </div>
// //       <div>
// //         <Header />
// //         {/* <Content msg="This is my message heheheheheheh" /> */}
// //         <Time/>
// //         <Footer />
// //       </div>
// //     );
// //   }
// // }

// // class App extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.props = props;
// //     this.state = {
// //       name: null,
// //       email: null,
// //       password: null,
// //       isRegistered: false,
// //       isShow:false
// //     };
// //   }
// //   RegistrationHandler = (event) => {
// //     const name = event.target.name.value;
// //     const email = event.target.email.value;
// //     const password = event.target.password.value;
// //     this.setState({ name, email, password, isRegistered: true });
// //     event.preventDefault();
// //   };
// //   ShowHidepass = ()=>{

// //     if(this.state.isShow){
// //       this.setState({
// //         isShow:false,
// //       });
// //     }else{
// //       this.setState({
// //         isShow:true,
// //       });
// //     }
 
// //   }
// //   render() {
// //     return (
// //       <div className="App">
// //         {!this.state.isRegistered ? (
// //           <Registration register={this.RegistrationHandler} togglepass={this.ShowHidepass} status={this.state.isShow} />
// //         ) : (
// //           <Welcome name={this.state.name} email={this.state.email} />
// //         )}
// //       </div>
// //     );
// //   }
// // }
// // export default App;

// const [count , setCount] = useState(0);
// const Sbtn = styled.button`
// background-color:#148F77;
// padding:10px 20px;
// text-allign:center;
// border:2px solid black;
// border-radius:5px;
// color:white;
// &:hover {
//     background-color: #2ECC71;
// }
// margin:10px;
// `;
// function setincrement(){
//     setCount(previousCount=>previousCount+1)
// }
// function setdecrement(){
//     setCount(previousCount=>previousCount-1)
// }
// return(
//     <div className="h-screen bg-blue-200 flex justify-center items-center">
//         <Sbtn onClick={setincrement}>Increment</Sbtn>
//         <div className="px-6 bg-yellow-200">{count}</div>
//         <Sbtn onClick={setdecrement}>Decrement</Sbtn>
//     </div>
// );