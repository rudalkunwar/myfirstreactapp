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
              <Link className="pl-5 cursor-pointer hover:text-blue-600" to="/">
                Home
              </Link>
              <Link className="pl-5 cursor-pointer hover:text-blue-600" to='/about'>
                About
              </Link>
              <Link className="pl-5 cursor-pointer hover:text-blue-600" to='/contact'>
                Contact
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
