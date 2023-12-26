import React, { Component } from 'react';
import Registration from './Components/Register&Login/Register';
import Login from './Components/Register&Login/Login';
export default class App extends Component {
  render() {
    return (
      <div>
        <Registration/>
        <Login/>
      </div>
    )
  }
}
