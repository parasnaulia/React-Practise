//For using the value present in Container of context of Api we useContext Hook
import { useContext } from "react";
import Api from "./Components/Api";
function Paras()
{
      var {todoArr}=useContext(Api);
      return (<>
      <div>
            <h1>
                  Plse yr bhai {todoArr[0].input}
            </h1>
      </div>
      </>)
}
export default Paras;