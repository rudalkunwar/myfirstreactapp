import React, { useState } from "react";
import axios from "../../api/axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddBlog() {
  const [loading, setLoading] = useState(false);
  const errorMessage = (err) => {
    setLoading(false);
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
    setLoading(false);
    toast.success(msg, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
      theme: "colored",
    });
  };
  const addBlog = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const formdata = new FormData(e.target);
    const title = formdata.get("title");
    const snippet = formdata.get("snippet");
    const body = formdata.get("body");
    try {
      const response = await axios.post("/blog/add", {
        title,
        snippet,
        body,
      });
      setLoading(false);

      if (response.status == 200) {
        form.reset();
        sucessMessage("Blog added Sucessfully");
      } else {
        errorMessage("Unable to add blog this time,try again later!!");
      }
    } catch (e) {
      setLoading(false);
      errorMessage("Connection Failed!!!!!!");
    }
  };
  return (
    <div>
      <ToastContainer />
      <div className="max-w-md mx-auto mt-8">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={addBlog}
        >
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="snippet"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Snippet:
            </label>
            <input
              type="text"
              id="snippet"
              name="snippet"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="body"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Body:
            </label>
            <textarea
              id="body"
              name="body"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {loading && (
                <FontAwesomeIcon
                  icon={faSpinner}
                  spin
                  style={{ marginRight: "8px" }}
                />
              )}{" "}
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
