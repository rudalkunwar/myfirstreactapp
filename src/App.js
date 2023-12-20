import React, { Component } from "react";
import "./App.css";
import Registration from "./Components/Registration/Registration";
import Welcome from "./Components/Registration/Welcome";
class App extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      name: null,
      email: null,
      password: null,
      isRegistered: false,
      isShow:false
    };
  }
  RegistrationHandler = (event) => {
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    this.setState({ name, email, password, isRegistered: true });
    event.preventDefault();
  };
  ShowHidepass = ()=>{

    if(this.state.isShow){
      this.setState({
        isShow:false,
      });
    }else{
      this.setState({
        isShow:true,
      });
    }
 
  }
  render() {
    return (
      <div className="App">
        {!this.state.isRegistered ? (
          <Registration register={this.RegistrationHandler} togglepass={this.ShowHidepass} status={this.state.isShow} />
        ) : (
          <Welcome name={this.state.name} email={this.state.email} />
        )}
      </div>
    );
  }
}
export default App;

