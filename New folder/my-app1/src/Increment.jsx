import { useContext } from "react";

import store from "./Store/Store";


function Increment()
{
      let {handleI}=useContext(store);
      return <>
      <button onClick={handleI}>
            Decrement
      </button>
      </>
}
export default  Increment;