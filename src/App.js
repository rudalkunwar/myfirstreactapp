import React from "react";
import { Provider } from "react-redux";
import store from "./store/mystore";
import Movie from "./Components/Movie";
import Test from "./Components/websocket/Test";
function App() {
  return (
    <div>
      {/* <Provider store={store}>
        <Movie/>
      </Provider> */}


      <Test/>
    </div>
  );
}

export default App;
