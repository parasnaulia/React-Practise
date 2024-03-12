//We have To craete a Store
// We know that CreateBrowserStore is Redux Functionality so to

//NOw We are using redux toolkit to simplify the use of Redux SO for that we have to use 
//npm install @react-redux/toolkit
//The MAin advantage of using react-redux toolkit is that in react-redux toolkit
//we make slice of different reducers and create different reducers which are indepent of each other
//if we want to use any reducers to change the state we can use the slice of the reducer which is 
// not there in redux 
// Now To create the slice of different reducer we make use of createSlice
import { configureStore } from "@reduxjs/toolkit";
// import { createStore} from "redux";
import Slice from "./Slice";
import Slice2 from "./Slice2";

// const Slice=createSlice({
//       name:"Counter",
//       initialState:{counter:0},
//       reducers:{
//             increment:(state)=>
//             {
//              state.counter++;
//             },
//             decrement:(state)=>
//             {
//              state.counter--;
//             },
//             Dec:(state,action)=>
//             {
//                   state.counter+=Number(action.payload)

//             },
//             Asc:(state,action)=>
//             {
//                     state.counter-=Number(action.payload)

//             }

//       }


// })
// const Slice2=createSlice({
//       name:"Tog",
//       initialState:false,
//       reducers:{
//       Toggle:(state)=>
//       {
//              return !state;
//       }
// }
// })
// function Reducer(state=INIT,action)
// {
//       switch(action.type)
//       {
//             case "INC":
//                   return {counter:state.counter+1};
//              case "DSC":
//              return {counter:state.counter-1}; 
//              case "ADD":
//                   return {counter:state.counter+ +action.payload};
//                   case "SUB":
//                         return {counter:state.counter- +action.payload};
//              default:
//                   return state;    
//       }
// }

const store=configureStore ({reducer:
      {
      Counter:Slice.reducer,
      Tog:Slice2.reducer

      }
      
});
export const Counter1=Slice.actions;
export const Counter2=Slice2.actions;
export default store;


