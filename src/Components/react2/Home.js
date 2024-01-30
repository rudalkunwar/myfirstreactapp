import { Link } from "react-router-dom";
import axios from "../../api/axios";
import React from "react";

export default function Home() {
  const getBlogs = async () => {
    try {
      const response = await axios.get("/");
      const data = response.data;
      console.log(data); // Log the received data
    } catch (e) {
      console.log("error: Cannot connect to the server" + e);
    }
  };
  return (
    <div className="h-screen bg-green-300 flex justify-center items-center">
      <div>
        <h2 className="text-5xl"> Blogge</h2>
        <p className="text-2xl">Welcome to the rudal blog.</p>
        <div className="mt-5">
          <Link
            className="bg-blue-500 px-2 py-3 text-white rounded-md mr-5"
            to=""
          >
            {" "}
            Get Started
          </Link>
          <Link className="bg-blue-500 px-2 py-3 text-white rounded-md" to="">
            {" "}
            Login
          </Link>

          <button onClick={getBlogs}>View Blogs</button>
        </div>
      </div>
    </div>
  );
}
