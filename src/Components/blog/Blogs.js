import React, { useEffect, useState } from "react";
import axios from "../../api/axios";

export default function Blogs() {
  // Use destructuring to get the state and the setter function from useState
  const [blogs, setBlogs] = useState([]);
  const getBlogs = async () => {
    try {
      const response = await axios.get("/blogs");
      if (response.data && response.data.blogs) {
        setBlogs(response.data.blogs);
      }
    } catch (e) {
      console.log("Error fetching the blogs");
    }
  };
  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-4xl font-bold mb-4">Latest Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-4 rounded shadow">
          {blogs.length !== 0 ? (
            <>
              <h3 className="text-xl font-bold mb-2">Hello</h3>
              <p className="text-gray-600 mb-4">This is the snippet</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Read More
              </button>
            </>
          ) : (
            <p>No blogs available</p>
          )}
        </div>
      </div>
    </div>
  );
}
