import {useState } from "react"
import store from "./Store"



function StoreP({children})
{
      let [state,Cstate]=useState(0);



      function handleD()
{
      Cstate((prev)=>prev-1);

}
function handleI({children})
{
      Cstate((prev)=>prev+1);
}
      return(
            <store.Provider  value={{handleD,handleI,state}}>
                  
                 { children}

            </store.Provider>
      )
}
export default StoreP;