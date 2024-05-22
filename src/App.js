import React from "react";
import { Provider } from "react-redux";
import store from "./store/mystore";
import Movie from "./Components/Movie";
function App() {
  return (
    <div>
      <Provider store={store}>
        <Movie/>
      </Provider>
    </div>
  );
}

export default App;
