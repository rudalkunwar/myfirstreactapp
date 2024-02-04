import React from "react";
import { useDispatch, useSelector } from "react-redux";
function Home() {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.myredux);
  const increment = () => {
    dispatch({
      type: "increment",
    });
  };
  const decrement = () => {
    dispatch({
      type: "decrement",
    });
  };
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="text-3xl text-center">
        <h1>{count}</h1>
        <div className="py-5 flex justify-between">
          <button
            onClick={increment}
            className="bg-green-600 px-5 py-3 rounded-full text-white mr-4"
          >
            +
          </button>
          <button
            onClick={decrement}
            className="bg-red-400 px-5 py-3 rounded-full text-white ml-4"
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
