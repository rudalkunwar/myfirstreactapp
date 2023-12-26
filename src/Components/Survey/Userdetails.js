import React from "react";

export default function Userdetails(props) {
  return (
    <div className="h-full  w-full flex justify-center items-center">
      <form className="w-1/2 py-12 flex justify-center items-center" onSubmit={props.detail}>
        <div>
          <div className="w-full px-2 py-4 ">
            <input
              className="block w-full px-16 py-2 my-2 bg-gray-100"
              type="text"
              placeholder="Enter Name"
              autoComplete="off"
              name="name"
              required
            />
            <input
              className="block w-full px-16 py-2 my-2 bg-gray-100"
              type="email"
              placeholder="Enter email"
              autoComplete="off"
              name="email"
              required
            />
          </div>
          <div className="w-full my-4">
            <div className="w-full  text-center">
              <button className="w-full text-white py-1 bg-green-600">Submit</button>
            </div>
            <div className="flex justify-center mt-10">
              <div className="h-10 flex justify-center">
                <span className="block px-2 py-1 my-1 mx-1 bg-white text-black  rounded-full">
                  1
                </span>
                <span className="block px-2 py-1 my-1 mx-1 bg-blue-600 text-white  rounded-full">
                  2
                </span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
