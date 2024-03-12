import { createSlice } from "@reduxjs/toolkit";
const Slice2=createSlice({
      name:"Tog",
      initialState:false,
      reducers:{
      Toggle:(state)=>
      {
             return !state;
      }
}
})
export default Slice2;