import { useContext } from "react";
import MyContext from "./store/MyContext";

//Now to consume the context We use UseContext hook
function Paras1()
{
      const val=useContext(MyContext);
      return (<>
      <div>
            <h1> This is Paras 1 {val.name}</h1>
      </div>
      </>)
}
export default Paras1;