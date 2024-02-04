import React from "react";

function Home({value}) {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="text-3xl text-center">
        <h1>{value}</h1>
        <div className="py-5 flex justify-between">
          <button className="bg-green-600 px-5 py-3 rounded-full text-white mr-4">+</button>
          <button className="bg-red-400 px-5 py-3 rounded-full text-white ml-4">-</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
