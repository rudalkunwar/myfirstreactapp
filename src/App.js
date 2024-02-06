import React from "react";
import Home from "./Home";
import { Provider } from "react-redux";
import Store from './store/Store'
function App() {
  return (
    <div>
      <Provider store={Store}>
      <Home />
      </Provider>
    </div>
  );
}

export default App;
