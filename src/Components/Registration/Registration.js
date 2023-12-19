import React from "react";
export default function Registration(props) {
  return (
    <div>
      <form onSubmit={props.register} className="h-screen bg-yellow-300 px-10 flex justify-center items-center">
        <div>
          <input
            className="block p-2 px-5 mb-2 rounded "
            placeholder="Name"
            type="text"
            name="name"
            required
          ></input>
          <input
            className="block p-2 px-5 mb-2 rounded "
            placeholder="Email"
            type="email"
            name="email"
            required
          ></input>
          <input
            className="block p-2 px-5 mb-2 rounded "
            placeholder="Password"
            type="password"
            name="password"
            required
          ></input>
          <input
            className="block p-2 px-5 mb-2 rounded bg-green-500 w-full text-white hover:bg-green-400"
            type="submit"
            required
          ></input>
        </div>
      </form>
    </div>
  );
}
