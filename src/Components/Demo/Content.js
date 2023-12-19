import React, { Component } from "react";
import "../Demo.css";
import Form from "../Form";
export class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
    };
  }
  formhandeller = (event) => {
    console.log("Oldddd", this.state);
    const message = event.target.value;
    this.setState({ message }, () => console.log("Newwww", this.state));
  };
  render() {
    return (
      <div>
        <Form />
        <div className="body">
          <div className="inside-body">
            <div>
              <span className="msg-box">
                <img
                  className="img"
                  src="https://st4.depositphotos.com/4329009/19956/v/450/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg"
                />
                <div className="msg-item">
                  <h5>10:12 AM</h5>
                  <p>{this.props.msg}</p>
                </div>
              </span>
            </div>
            <div>
              <span className="msg-box">
                <img
                  className="img"
                  src="https://st4.depositphotos.com/4329009/19956/v/450/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg"
                />
                <div className="msg-item">
                  <h5>2:12 PM</h5>
                  <form>
                    <label>Message:</label>
                    <input
                      type="text"
                      name="name"
                      onChange={this.formhandeller}
                    ></input>
                  </form>
                  <p>{this.state.message}</p>
                </div>
              </span>
            </div>
            <div>
              <span className="msg-box">
                <img
                  className="img"
                  src="https://st4.depositphotos.com/4329009/19956/v/450/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg"
                />
                <div className="msg-item">
                  <h5>a moment ago </h5>
                  <p>
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book.
                  </p>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
