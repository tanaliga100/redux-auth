import { configureStore } from "@reduxjs/toolkit";
import counterSlice  from "./counter-slice";
import authSlice from "./auth-slice";

const store = configureStore({
    reducer : {
        counter : counterSlice.reducer,
        auth: authSlice.reducer
    }
});

export default store;

// const counterReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'INC':
//             return {counter: state.counter + 1 , showCounter: state.showCounter}
//             break;
//         case 'DEC':
//             return {counter: state.counter - 1 , showCounter: state.showCounter }
//             break;
//         case 'increase':
//             return {counter: state.counter + action.payload , showCounter: state.showCounter}
//         case 'show_counter':
//             return {showCounter: !state.showCounter,
//             counter: state.counter}
//         default:
//             console.log('back to the state');
//             return state;
//     }
// }





 // Redux Bare Minimum
// const initalState = {
//     counter: 10
// }

// const counterReducer = ( state = initalState, action ) => {

//     switch (action.type) {
//         case 'INC':
//             return {counter: state.counter + 1}
//             break;
//         case 'DEC':
//             return {counter: state.counter - 1}
//         default:
//             return state
//             break;
//     }
// }

// const store = redux.createStore(counterReducer)

// store.dispatch({type: 'INC'})
// store.dispatch({type: 'DEC'})
