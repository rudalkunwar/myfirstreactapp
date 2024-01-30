import React, { useEffect } from "react";
import axios from "../../api/axios";

export default function Blogs() {
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("/blogs");
        const blogs = response.data;
        console.log(blogs);
      } catch (e) {
        console.log("Error fetching the blogs");
      }
    };
    fetchBlogs();
  },[]);
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-4xl font-bold mb-4">Latest Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-bold mb-2">Hello</h3>
          <p className="text-gray-600 mb-4">This is the snippet</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
