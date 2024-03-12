//useReducer is Hook in react which is alternate of UseState And it is used to Handle Complex State managngmnet
//we We our state depends on the previous state then we use useReduce Hook
//And also if we are chaninging our states multiple times on different handlers then oue use state 
//Become to lengthy .due to which we use useReduce
//dispacher tells us whicj action is performed and it triggers the reducer
import { useReducer } from "react";
import Form from "./assets/Form";
import Footar from "./assets/Footar";
import Header from "./assets/Header";
import Form1 from "./assets/Form1";
import { Link, Outlet } from "react-router-dom";
function reduce(state,action)
{
  switch(action.type){
  case "INCREMENT":
    return state+1;
    case "DECREMENT":
      return state-1;
  
  default:
    return state;
  }
}

function App()
{

  let [state,dispatcher]=useReducer(reduce,[]);
  function incre()
{
  dispatcher({type:"INCREMENT"});
}
function Dec()
{
  dispatcher({type:"DECREMENT"});
}
  return <>
  <Header/>
  <div>
    <p> {state}</p>
    <button onClick={()=>{incre()}}>
Increment
    </button>
    <button onClick={()=>{Dec()}}>
      Decrement

    </button>
    7
  </div>

  <Outlet/>
  <button>    <Link to="/Paras" target="_blank" rel="noopener noreferrer">
    Form
  </Link></button>
  <button>   <Link to="/Form1" target="_blank" rel="noopener noreferrer">
    Form
  </Link></button>
  <Footar/>

  </>

}
export default App;