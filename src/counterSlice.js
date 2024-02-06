import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 50,
  },
  reducers: {
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      state.value -= 1;
    },
    incrementby10(state,action){
        state.value+=action.payload;
    }
  },
});

export const { increment, decrement,incrementby10 } = counterSlice.actions;
export default counterSlice.reducer;
