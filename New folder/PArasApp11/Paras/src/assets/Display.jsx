 import {  useSelector } from "react-redux/es/hooks/useSelector";
 export function Display()
{
      //We CAn use The Slice of the data so that only that changes will re renders the component 
      //So this useSlection USes a concept of subscription that we have done in in Node js
      //Thank you

     const dis=useSelector((store)=>{return store.counter});
      return <><div>
            
            <h1>
                  counter is {dis}
            </h1>
            </div></>
}
