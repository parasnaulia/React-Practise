import { useContext } from "react";
import store from "./Store/Store";

function Decrement()
{
       let {handleD}=useContext(store)
      return <>
      <button onClick={()=>{handleD()}}>
            Decrement
      </button>
      </>
}
export default Decrement;


