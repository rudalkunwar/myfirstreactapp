import React, { Component } from "react";
import Userdetails from "./Userdetails";
import Questions from "./Questions";
import { v4 as uuidv4 } from "uuid";

import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA_Foq8vQc0xth_KZSSbm5AoX8KRIIAQOM",
  authDomain: "survey-45545.firebaseapp.com",
  projectId: "survey-45545",
  storageBucket: "survey-45545.appspot.com",
  messagingSenderId: "997194768147",
  appId: "1:997194768147:web:da4b4465fffc17e41d84e6",
};

const app = initializeApp(firebaseConfig);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uuidv4(),
      username: null,
      email: null,
      isRegistered: false,
      questions: {
        q1: null,
        q2: null,
        q3: null,
      },
    };
  }
  submitDetails = (event) => {
    event.preventDefault();
    let username = event.target.name.value;
    let email = event.target.email.value;
    this.setState({
      username,
      email,
      isRegistered: true,
    });
  };
  submitQuestions = (event) => {
    event.preventDefault();
    const questions = {};
    questions.q1 = event.target.course.value;
    questions.q2 = event.target.rate.value;
    questions.q3 = event.target.review.value;
    this.setState({ questions});

    const database = getDatabase(app);

    const data = {
      name: this.state.username,
      email: this.state.email,
      questions: this.state.questions,
    };

    // Reference to the path where you want to store data
    const dbRef = ref(database, "survey/" + this.state.id);

    // Set the data at the specified path
    set(dbRef, data)
      .then(() => {
        console.log("Data has been successfully written to the database.");
      })
      .catch((error) => {
        console.error("Error writing data to the database:", error);
      });

  };
  render() {
    return (
      <div>
        <div className="text-center bg-yellow-200 text-5xl">
          <h5> This is just survey hahahah</h5>
        </div>
        <div className="bg-yellow-200"></div>
        {!this.state.isRegistered ? (
          <Userdetails detail={this.submitDetails} />
        ) : (
          <Questions qn={this.submitQuestions} />
        )}
      </div>
    );
  }
}
export default App;
