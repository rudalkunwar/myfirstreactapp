// import { createReducer } from "@reduxjs/toolkit";

// const initialState = {
//   count: 0,
// };

// export const myredux = createReducer(initialState, {
//   incrementByValue: (state, action) => {
//     state.count += action.payload;
//   },
//   increment: (state) => {
//     state.count += 1;
//   },

//   decrement: (state) => {
//     state.count -= 1;
//   },
// });
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const myredux = createReducer(initialState, (builder) => {
  builder
    .addCase("incrementByValue", (state, action) => {
      state.count += action.payload;
    })
    .addCase("increment", (state) => {
      state.count += 1;
    })
    .addCase("decrement", (state) => {
      state.count -= 1;
    });
});
