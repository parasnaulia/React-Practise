import { useReducer } from "react";
import Input from "./Input";
function reducer(state,action)
{
  if(action.type==="INC")
  {
      return  state+1;
      
  }
  else if(action.type==="DEC")
  {
    return state-1;
  }
  else if(action.type=="ADD")
  {
    return state+ +action.payload;
  }
  return state;
}

function App()
{

 
  let [state,dispatcher]=useReducer(reducer,0);
  return <><div>
    <div> {state} is </div>
    <Input dispatcher={dispatcher}/>
    </div></>
}
export default App;
