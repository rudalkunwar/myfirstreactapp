import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Blogs() {
  // Use destructuring to get the state and the setter function from useState
  const [blogs, setBlogs] = useState([]);
  const getBlogs = async () => {
    try {
      const response = await axios.get("/blogs");
      if (response.status == 200) {
        const newblogs = response.data;
        setBlogs(newblogs.blogs);
      }
    } catch (e) {
      console.log("Error fetching the blogs");
    }
  };
  useEffect(() => {
    getBlogs();
    console.log(blogs);
  }, []);

  const deleteBlog = async (id) => {
    const response = await axios.delete("/blog/delete", id);
  };
  return (
    <div className="bg-gray-700 h-screen">
      {blogs.length !== 0 ? (
        blogs.map((blog) => (
          <div className="flex justify-center items-center" key={blog._id}>
            <div className="shadow-md w-1/2 my-5 pl-10 py-4 bg-cyan-200">
              <div className="flex justify-between">
                <h3 className="text-xl font-bold mb-2">{blog.title}</h3>{" "}
                <button
                  className="bg-gray-100 mr-16 p-3 rounded-lg hover:bg-gray-900 hover:text-white cursor-pointer"
                  onClick={() => deleteBlog(blog._id)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
              <p className="text-gray-600 mb-4">{blog.snippet}</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded mb-3">
                Read More
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No blogs available</p>
      )}
    </div>
  );
}
