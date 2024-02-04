import React from "react";
import Home from "./Home";
import { Provider, useSelector } from "react-redux";
import mystore from "./store/store";
import { myredux } from "./Reducer";
function App() {
  //   const { count } = useSelector((state) => state.myredux);
  return (
    <div>
      <Provider store={mystore}>
        <Home />
      </Provider>
    </div>
  );
}

export default App;
