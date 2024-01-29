import React, { Component } from "react";
import Auth from "./Components/practice/Auth";
import { useState } from "react";
export default function App() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const userAuth = (event) => {
    event.preventDefault();
    const formdata = new FormData(event.target);
    const username = formdata.get("username");
    const email = formdata.get("email");
    const password = formdata.get("password");

    setUsername(username);
    setEmail(email);
    setPassword(password);
  };
  return (
    <div>
      <Auth authenticate={userAuth} />
      <div>
        <h1>details</h1>
        <ul>
        <li>{username}</li>
          <li>{email}</li>
          <li>{password}</li>
        </ul>
      </div>
    </div>
  );
}
