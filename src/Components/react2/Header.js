import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav className="bg-gray-400 text-xl py-5">
        <div className="flex justify-around">
          <div className="">Blogge</div>
          <div>
            <ul className="flex">
              <li className="pl-5 cursor-pointer hover:text-blue-600">
                <Link to="/">Home</Link>
              </li>
              <li className="pl-5 cursor-pointer hover:text-blue-600">
                <Link to="/blogs">Blogs</Link>
              </li>
              <li className="pl-5 cursor-pointer hover:text-blue-600">
                <Link to="/blog/add">Add Blogs</Link>
              </li>
              <li className="pl-5 cursor-pointer hover:text-blue-600">
                <Link to="/about">About</Link>
              </li>
              <li className="pl-5 cursor-pointer hover:text-blue-600">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
