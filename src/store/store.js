import { configureStore } from "@reduxjs/toolkit";
import { myredux } from "../Reducer";


const store = configureStore({
  reducer: {
    myredux: myredux,
  },
});

export default store;
