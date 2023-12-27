import { useState } from "react";
export default function Registration(props) {
  const [passType, setPass] = useState("password");
  function togglepass() {
    if (passType === "password") {
      setPass("text");
    } else {
      setPass("password");
    }
  }
  return (
    <div className="h-screen bg-gray-600 flex justify-center items-center flex-col ">
      <div className="bg-blue-300 w-1/2 h-1/2 pt-2 text-center shadow-xl rounded-md">
        <h1 className="text-2xl py-2 ">Register here for the free account.</h1>
        <form
          className="px-10 flex justify-center items-center flex-col"
          onSubmit={props.reg}
        >
          <div className="w-96">
            <input
              className="block p-2 px-5 w-full mb-2 rounded shadow-md outline-blue-500"
              placeholder="Full Name"
              type="text"
              name="name"
              required
            />
            <input
              className="block p-2 px-5 w-full mb-2 rounded shadow-md outline-blue-500"
              placeholder="Email"
              type="email"
              name="email"
              required
            />
            <div className="relative">
              <input
                className="block p-2 px-5 w-full mb-2 rounded shadow-md outline-blue-500"
                placeholder="Password"
                type={passType}
                name="password"
                required
              />
              <i
                className={`text-2xl absolute right-0 inset-y-0 items-center flex pr-2 ${
                  passType === "password" ? "ri-eye-line" : "ri-eye-off-line"
                }`}
                onClick={togglepass}
              ></i>
            </div>
            <div className="relative">
              <input
                className="block p-2 px-5 w-full mb-2 rounded shadow-md outline-blue-500"
                placeholder="Confirm Password"
                type={passType}
                name="cpassword"
                required
              />
              <i
                className={`text-2xl absolute right-0 inset-y-0 items-center flex pr-2 ${
                  passType === "password" ? "ri-eye-line" : "ri-eye-off-line"
                }`}
                onClick={togglepass}
              ></i>
            </div>
            <input
              className="block p-2 px-5 w-full mb-2 rounded bg-green-600 w-full text-white hover:cursor-pointer hover:bg-green-500"
              type="submit"
              value="Register"
              required
            />
          </div>
          <h2>
            Already a member?
            <span
              className="text-blue-500 cursor-pointer"
              onClick={props.switch}
            >
              Login here
            </span>
          </h2>
        </form>
      </div>
      <div className="bg-yellow-200 h-24 w-1/2 text-center">
        <h2 className="text-xl pb-2">Sign up options</h2>
        <div>
          <i onClick={props.gg} className="ri-google-fill text-blue-500 text-2xl mr-4"></i>
          <i className="ri-facebook-fill text-blue-500 text-2xl mr-4"></i>
          <i className="ri-twitter-fill text-blue-400 text-2xl mr-4"></i>
          <i className="ri-instagram-fill text-pink-500 text-2xl mr-4"></i>
          <i className="ri-linkedin-box-fill text-blue-700 text-2xl mr-4"></i>
          <i className="ri-github-fill text-gray-600 text-2xl"></i>
        </div>
      </div>
    </div>
  );
}
