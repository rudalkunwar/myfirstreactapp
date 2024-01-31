import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api/axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Blog() {
  const [blog, setBlog] = useState([]);
  const { id } = useParams();
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
  useEffect(() => {
    BlogDetail();
  });
  const BlogDetail = async () => {
    try {
      const response = await axios.get(`/blog/${id}`);
      if (response.status === 200) {
        setBlog(response.data.blog);
      }
    } catch (e) {
      console.log("Server Error");
    }
  };
  const deleteBlog = async (id) => {
    try {
      const response = await axios.delete(`/blog/delete/${id}`);
      if (response.status === 200) {
        sucessMessage("Blog Deleted Sucessfully");
        window.location.href = "/blogs";
      } else {
        errorMessage("Cannot Delete Blog,Try again later.");
      }
    } catch (e) {
      errorMessage("Connection Failed!!!!!!");
    }
  };
  return (
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
      </div>
    </div>
  );
}
