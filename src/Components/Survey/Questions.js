import React from "react";

export default function Questions(props) {
  return (
    <div className="h-full  w-full flex justify-center items-center">
      <form className="w-1/2 py-12 flex justify-center items-center"  onSubmit={props.qn}>
        <div>
          <div className="w-full px-2 py-4">
            <label htmlFor="course">
              Which Course are you currently involved in ?{" "}
            </label>
            <select
              id="course"
              name="course"
              type="select"
              className="block w-full py-2 bg-cyan-200"
              required
            >
              <option value="react">
                React JS
              </option>
              <option value="laravel">
                Laravel
              </option>
              <option value="django">
                Django
              </option>
              <option value="ruby">
                Ruby
              </option>
              <option value="next">
                Next JS
              </option>
            </select>
          </div>
          <div className="py-4 ">
            <h3>Rate our course</h3>

            <div className="flex">
              <div className="px-2 py-2">
                <input type="radio" id="average" name="rate" value="Average"/>

                <label htmlFor="average">Average</label>
              </div>
              <div className="px-2 py-2">
                <input type="radio" id="good" name="rate" value="Good" />
                <label htmlFor="good">Good</label>
              </div>
              <div className="px-2 py-2">
                <input type="radio" id="excellent" name="rate" value="Excellent" />
                <label htmlFor="excellent">Excellent</label>
              </div>
            </div>
          </div>
          <div>
            <input
              className="w-full px-2 py-4"
              type="textbox"
              placeholder="Enter Your Review Here"
              autoComplete="off"
              name="review"
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
