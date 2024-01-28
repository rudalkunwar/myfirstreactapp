import React, { Component } from "react";
import clear from "../../assets/images/clear.png";
class Gitprofile extends Component {
  //"user_search_url": "https://api.github.com/search/users?q={query}{&page,per_page,sort,order}"
  //  "followers_url": "https://api.github.com/user/followers"
  //  "following_url": "https://api.github.com/user/following{/target}"
  constructor(props) {
    super(props);
  }
  render() {
    const gradient = {
      backgroundImage:
        "radial-gradient( circle 369px at -2.9% 12.9%, rgba(247,234,163,1) 0%, rgba(236,180,238,0.56) 46.4%, rgba(163,203,247,1) 100.7% )",
    };
    return (
      <div>
        <div className="h-screen flex justify-center items-center bg-violet-300 font-sans">
          <div style={gradient} className="container w-1/2 h-[80%] relative">
            <div className="flex justify-between">
              <div className="flex justify-around items-center mt-4 w-full h-64 rounded-2">
                <img
                  className="bg-cover w-56 h-56 rounded-full"
                  src={this.props.uimage}
                />
                <div className="flex flex-col justify-center pr-48 h-full ">
                  <p className="p-2 text-xl">User Name:{this.props.uname}</p>

                  <p className="p-2  text-xl">Created At: {this.props.date}</p>
                </div>
              </div>
              <form onSubmit={this.props.user}>
                <input
                  type="text"
                  name="name"
                  placeholder="Github Username"
                  className="absolute right-0 p-3 mt-4 mr-4 rounded outline-none border-2 border-blue-300"
                  required
                />
              </form>
            </div>

            <div className="text-xl flex mt-4">
              <div className="flex flex-col h-40">
                <div className="py-2 px-5">
                  <p>Followers</p>
                </div>
                <div className="py-2 px-5">{this.props.flwer}</div>
              </div>
              <div className="lex flex-col  h-40">
                <div className="py-2 px-5">
                  <p>Following</p>
                </div>
                <div className="py-2 px-5">{this.props.flwin}</div>
              </div>
              <div className="lex flex-col h-40">
                <div className="py-2 px-5">
                  <p>Public Repository</p>
                </div>
                <div className="py-2 px-5">{this.props.rep}</div>
              </div>
            </div>

            <div className="h-24 bg-yellow-300">
              <div>
                <p className="text-center p-2 text-2xl">More</p>
                <div className="text-center">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="text-3xl px-2 hover:text-blue-600 ri-facebook-fill"></i>
                  </a>

                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="text-3xl px-2 hover:text-blue-600 ri-twitter-fill"></i>
                  </a>

                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="text-3xl px-2 hover:text-blue-600 ri-instagram-fill"></i>
                  </a>

                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="text-3xl px-2 hover:text-blue-600 ri-linkedin-fill"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Gitprofile;
