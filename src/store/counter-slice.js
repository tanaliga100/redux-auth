import {createSlice} from '@reduxjs/toolkit'

const initialCounterState = {
    counter: 10,
    showCounter: true,
  };
  
  const counterSlice = createSlice({
    name: "counterSlice",
    initialState: initialCounterState,
    reducers: {
      increment (state) {
          state.counter++;
      },
      decrement(state) {
         state.counter--;
      },
      increase(state, action) {
         state.counter = state.counter + action.payload;
      },
      toggleCounter(state) {
        state.showCounter = !state.showCounter;
      },
    },
  });

export const counterActionCreators = counterSlice.actions;

  
  export default counterSlice;