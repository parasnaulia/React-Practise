import { useContext } from "react";
import MyContext from "./store/MyContext";

function Paras2()
{
       var pop=useContext(MyContext);
      return (<>
      <div>
            <h1> This is Paras 2 {pop.name}  {pop.ans}</h1>
      </div>
      </>)
}
export default Paras2;