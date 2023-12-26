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

// for github search 
// import React, { Component } from "react";
// import Gitprofile from "./Components/Github-Profile/Gitprofile";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: "ruzal10",
//       userimage: "",
//       followerss: "",
//       followingg: "",
//       repo: "",
//       cdate: "",
//     };
//   }
//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.username !== this.state.username) {
//       this.getUserInfo();
//     }
//   }
//   componentDidMount() {
//     this.getUserInfo();
//   }

//   async getUserInfo() {
//     const api = `https://api.github.com/users/${this.state.username}`;
//     try {
//       const prmis = await fetch(api);
//       if (prmis.ok) {
//         const data = await prmis.json();
//         let username, userimage, followingg, followerss, repo, cdate;
//         username = data.login;
//         userimage = data.avatar_url;
//         followerss = data.followers;
//         followingg = data.following;
//         repo = data.public_repos;
//         cdate = data.created_at;
//         this.setState({ username, userimage, followerss, followingg, repo, cdate });
//       }
//     } catch (erro) {
//       console.error("Cannot find the user".error);
//     }
//   }

//   searchUser = (event) => {
//     event.preventDefault();
//     const username = event.target.name.value;
//     this.setState({ username });
//   };
//   render() {
//     return (
//       <div>
//         <Gitprofile
//           user={this.searchUser}
//           uname={this.state.username}
//           uimage={this.state.userimage}
//           flwer={this.state.followerss}
//           flwin={this.state.followingg}
//           rep={this.state.repo}
//           date={this.state.cdate}
//         />
//       </div>
//     );
//   }
// }

// export default App;





// add data into the firebase 
// import React, { Component } from "react";
// import Userdetails from "./Components/Survey/Userdetails";
// import Questions from "./Components/Survey/Questions";
// import { v4 as uuidv4 } from "uuid";

// import { initializeApp } from "firebase/app";
// import { getDatabase, ref, set } from "firebase/database";

// const firebaseConfig = {
//   apiKey: "AIzaSyA_Foq8vQc0xth_KZSSbm5AoX8KRIIAQOM",
//   authDomain: "survey-45545.firebaseapp.com",
//   projectId: "survey-45545",
//   storageBucket: "survey-45545.appspot.com",
//   messagingSenderId: "997194768147",
//   appId: "1:997194768147:web:da4b4465fffc17e41d84e6",
// };

// const app = initializeApp(firebaseConfig);

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       id: uuidv4(),
//       username: null,
//       email: null,
//       isRegistered: false,
//       questions: {
//         q1: null,
//         q2: null,
//         q3: null,
//       },
//     };
//   }
//   submitDetails = (event) => {
//     event.preventDefault();
//     let username = event.target.name.value;
//     let email = event.target.email.value;
//     this.setState({
//       username,
//       email,
//       isRegistered: true,
//     });
//   };
//   submitQuestions = (event) => {
//     event.preventDefault();
//     const questions = {};
//     questions.q1 = event.target.course.value;
//     questions.q2 = event.target.rate.value;
//     questions.q3 = event.target.review.value;
//     this.setState({ questions});

//     const database = getDatabase(app);

//     const data = {
//       name: this.state.username,
//       email: this.state.email,
//       questions: this.state.questions,
//     };

//     // Reference to the path where you want to store data
//     const dbRef = ref(database, "survey/" + this.state.id);

//     // Set the data at the specified path
//     set(dbRef, data)
//       .then(() => {
//         console.log("Data has been successfully written to the database.");
//       })
//       .catch((error) => {
//         console.error("Error writing data to the database:", error);
//       });

//   };
//   render() {
//     return (
//       <div>
//         <div className="text-center bg-yellow-200 text-5xl">
//           <h5> This is just survey hahahah</h5>
//         </div>
//         <div className="bg-yellow-200"></div>
//         {!this.state.isRegistered ? (
//           <Userdetails detail={this.submitDetails} />
//         ) : (
//           <Questions qn={this.submitQuestions} />
//         )}
//       </div>
//     );
//   }
// }
// export default App;
