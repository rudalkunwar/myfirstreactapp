import React, { Component } from "react";
import Login from "./Login";
import Register from "./Register";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA_Foq8vQc0xth_KZSSbm5AoX8KRIIAQOM",
  authDomain: "survey-45545.firebaseapp.com",
  projectId: "survey-45545",
  storageBucket: "survey-45545.appspot.com",
  messagingSenderId: "997194768147",
  appId: "1:997194768147:web:da4b4465fffc17e41d84e6",
};

firebase.initializeApp(firebaseConfig);

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      password: null,
      isRegistered: false,
    };
  }
  pageSwitch = () => {
    if (this.state.isRegistered) {
      this.setState({
        isRegistered: false,
      });
    } else {
      this.setState({
        isRegistered: true,
      });
    }
  };

  registrationHandeler = (event) => {
    event.preventDefault();

    let name = event.target.name.value;
    let email = event.target.email.value;
    let password = event.target.password.value;
    let cpassword = event.target.cpassword.value;
    if (password != cpassword) {
      alert("Confirm password doesnot match");
      return;
    }
    const auth = firebase.auth();
    const authPromis = auth.createUserWithEmailAndPassword(email, password);
    authPromis
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  loginHandeler = (event) => {
    event.preventDefault();

    let name = event.target.name.value;

    let email = event.target.email.value;
    let password = event.target.password.value;
    const auth = firebase.auth();
    const authPromis = auth.signInWithEmailAndPassword(email, password);
    authPromis
      .then((data) => {
        console.log(data);
        alert("you are signed in");
      })
      .catch((error) => {
        alert(error.message);
        console.log(error.message);
      });
  };

  signInWithGoogle = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((msg) => {
        console.log(msg);
        alert("Your are registered");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        {this.state.isRegistered === false ? (
          <Register switch={this.pageSwitch} reg={this.registrationHandeler} gg={this.signInWithGoogle} />
        ) : (
          <Login switch={this.pageSwitch} logg={this.loginHandeler} />
        )}
      </div>
    );
  }
}
