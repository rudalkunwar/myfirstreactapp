import axios from "axios";
import React, { useEffect } from "react";

export default function Home() {
  const getBlogs = async () => {
    try {
      const response = await axios.get("/", {
        name:'rudal'
      },{
        headers: {
          "Content-Type": "application/app",
        },
      });
    //   const data = response.data;
    //   console.log(response.data);
    } catch (e) {
      console.log("error:Cannot connected to the server" + e);
    }
  };
  return (
    <div className="h-screen bg-green-300 flex justify-center items-center">
      <div>
        <h2 className="text-5xl"> Blogge</h2>
        <p className="text-2xl">Welcome to the rudal blog.</p>
        <div className="mt-5">
          <a
            href=""
            className="bg-blue-500 px-2 py-3 text-white rounded-md mr-5"
          >
            Get Started
          </a>
          <a href="" className="bg-blue-500 px-2 py-3 text-white rounded-md">
            Login
          </a>
          <button onClick={getBlogs}>View Blogs</button>
        </div>
      </div>
    </div>
  );
}
