//We have To craete a Store
// We know that CreateBrowserStore is Redux Functionality so to







import { createStore} from "redux";
const INIT={
      counter:0
}
function Reducer(state=INIT,action)
{
      switch(action.type)
      {
            case "INC":
                  return {counter:state.counter+1};
             case "DSC":
             return {counter:state.counter-1}; 
             case "ADD":
                  return {counter:state.counter+ +action.payload};
                  case "SUB":
                        return {counter:state.counter- +action.payload};
             default:
                  return state;    
      }
}

const store=createStore(Reducer);
export default store;


