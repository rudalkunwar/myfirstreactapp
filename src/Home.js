import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { decrement, increment, incrementby10 } from "./counterSlice";

function Home() {
  const counter = useSelector(state=>state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="h-screen flex justify-center items-center">
      <div>
        <button onClick={()=>dispatch(increment())} className="bg-blue-500 text-white px-10 py-3 text-3xl">
          +
        </button>
        <button onClick={()=>dispatch(incrementby10(10))} className="bg-blue-500 text-white px-10 py-3 text-3xl">
          +10
        </button>
        <p className="text-center py-4 text-3xl">{counter}</p>
        <button onClick={()=>dispatch(decrement())} className="bg-red-500 text-white px-10 py-3 text-3xl">-</button>
        
      </div>
    </div>
  );
}

export default Home;
