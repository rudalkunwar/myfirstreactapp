import React, { Component } from "react";
import Gitprofile from "./Components/Github-Profile/Gitprofile";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "ruzal10",
      userimage: "",
      followerss: "",
      followingg: "",
      repo: "",
      cdate: "",
    };
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.username !== this.state.username) {
      this.getUserInfo();
    }
  }
  componentDidMount() {
    this.getUserInfo();
  }

  async getUserInfo() {
    const api = `https://api.github.com/users/${this.state.username}`;
    try {
      const prmis = await fetch(api);
      if (prmis.ok) {
        const data = await prmis.json();
        let username, userimage, followingg, followerss, repo, cdate;
        username = data.login;
        userimage = data.avatar_url;
        followerss = data.followers;
        followingg = data.following;
        repo = data.public_repos;
        cdate = data.created_at;
        this.setState({ username, userimage, followerss, followingg, repo, cdate });
      }
    } catch (erro) {
      console.error("Cannot find the user".error);
    }
  }

  searchUser = (event) => {
    event.preventDefault();
    const username = event.target.name.value;
    this.setState({ username });
  };
  render() {
    return (
      <div>
        <Gitprofile
          user={this.searchUser}
          uname={this.state.username}
          uimage={this.state.userimage}
          flwer={this.state.followerss}
          flwin={this.state.followingg}
          rep={this.state.repo}
          date={this.state.cdate}
        />
      </div>
    );
  }
}

export default App;
