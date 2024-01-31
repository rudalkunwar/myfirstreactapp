import React from "react";
import axios from "../../api/axios";

export default function AddBlog() {
  const addBlog = async (e) => {
    e.preventDefault();
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
      const data = response.data;
      console.log(data);
    } catch (e) {
      console.log("Error" + e);
    }
  };
  return (
    <div>
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
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
