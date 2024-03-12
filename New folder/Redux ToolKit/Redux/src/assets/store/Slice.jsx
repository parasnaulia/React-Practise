import { createSlice } from "@reduxjs/toolkit";


const Slice=createSlice({
      name:"Counter",
      initialState:{counter:0},
      reducers:{
            increment:(state)=>
            {
             state.counter++;
            },
            decrement:(state)=>
            {
             state.counter--;
            },
            Dec:(state,action)=>
            {
                  state.counter+=Number(action.payload)

            },
            Asc:(state,action)=>
            {
                    state.counter-=Number(action.payload)

            }

      }


})
export default Slice;