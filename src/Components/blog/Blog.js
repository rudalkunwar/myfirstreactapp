import React from "react";

export default function Blog() {
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-4xl font-bold mb-4">Latest Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
            <p className="text-gray-600 mb-4">{blog.snippet}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
