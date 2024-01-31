import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
export default function Blogs() {
  // Use destructuring to get the state and the setter function from useState
  const [blogs, setBlogs] = useState([]);
  const errorMessage = (err) => {
    toast.error(err, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
      theme: "colored",
    });
  };
  const sucessMessage = (msg) => {
    toast.warning(msg, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
      theme: "colored",
    });
  };
  const getBlogs = async () => {
    try {
      const response = await axios.get("/blogs");
      if (response.status === 200) {
        const newblogs = response.data;
        setBlogs(newblogs.blogs);
      }
    } catch (e) {
      console.log("Error fetching the blogs");
    }
  };
  useEffect(() => {
    getBlogs();
  }, []);
  const deleteBlog = async (id) => {
    try {
      const response = await axios.delete(`/blog/delete/${id}`);
      if (response.status === 200) {
        sucessMessage("Blog Deleted Sucessfully");
        getBlogs();
      } else {
        errorMessage("Cannot Delete Blog,Try again later.");
      }
    } catch (e) {
      errorMessage("Connection Failed!!!!!!");
    }
  };
  return (
    <>
      <ToastContainer />
      <div className="h-full bg-gray-700">
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
                <p className="text-gray-600 mb-4 text-xl">{blog.snippet}</p>
                <Link
                  className="bg-blue-500 text-white px-4 py-2 rounded mb-3"
                  to={`blog/${blog._id}`}
                >
                  Read More
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>No blogs available</p>
        )}
      </div>
    </>
  );
}
