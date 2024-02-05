import React from "react";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { increment,decrement } from "./counterSlice";
function Home() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="bg-cyan-300 h-screen flex justify-center items-center">
      <div className="flex">
        <div>
          <button
            onClick={() => dispatch(increment())}
            className="px-5 py-2 bg-blue-400 rounded-full"
          >
            +
          </button>
        </div>
        <div className="px-5">0</div>
        <div>
          <button
            onClick={() => dispatch(decrement())}
            className="bg-red-400 px-5 py-2 rounded-full"
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
