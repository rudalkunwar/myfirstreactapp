import React from "react";
import Home from "./Home";
import { Provider } from "react-redux";
import store from "./store/mystore";
import Test from "./Components/Survey/Test";
function App() {
  return (
    <div>
      <Provider store={store}>
        <Home />
        <Test/>
      </Provider>
    </div>
  );
}

export default App;
