import { useReducer, useRef } from "react";
import "./App.css"
import Reducer from "./Reducer";

function App()
{
 let [state,dispatch]=useReducer( Reducer,[]);
 let x=useRef("");
  function hand()
 {
  let newobj={
    id:x.current.value,
    name:"PP"
  };
  x.current.value = "";

  dispatch({type:'Add',payload:newobj})
  
 }
  return (<>
  <div>
    <input ref={x}/>
    <ul>
      {state.map((ele)=>
      {
       return  <li key={ele.id} className="pp" > {ele.id}</li>

      })}
    </ul>
    <button onClick={()=>{hand()}}>Add</button>
    
  </div>
  </>)
}
export default App;