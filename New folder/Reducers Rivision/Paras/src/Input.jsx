import { useReducer } from "react";

function Input({dispatcher})
{
      let ans=useReducer("");
      return (<>
      <button onClick={()=>{
            dispatcher({type:"INC"})
      }}>Increment </button>
      <button onClick={()=>{dispatcher({type:"DEC"})}}>Decrement </button>
      <input placeholder="Enter Number" ref={ans} />
      <button onClick={()=>{
            dispatcher({type:"ADD",payload:ans.current.value})
      }}>
            Add

      </button>

      </>)
}
export default Input;