// so redux is a libraray which can be used with react and it is used for the state managnemnt in easier way to handle complex application

// The main Diff b/w context api and redux is that context api is decentralized in nature due to which it has to depend on various other hooks like use state useReducer hooks but Reudx has inbuild state managment and its centralized means it does not depends on external hooks it has its own dispatch and reducer methods to handle the state
//                        /************* */
// Now we know That Redux is a container that stores and manage the state so the componentes who wanted to acces the state uses use selctor hook and using this hook it can select the slice of the Redux container (it follows The concept of Subscription)
// if To create Redux We Use CreateRedux function of redux library to create that store and to we export that so that other components use that who has subsscription
// Now it also has useDispatch Hook To handle the type of actions and send to use reducer so tha reducer can change the state reducer takes two arguments 1st state and second is action type which dispacher object now reducer is reponsible for change in state

const redux = require("redux");
//imported Redux Library
const INTIAL = {
  counter: 0,
};
function reducer(state = INTIAL, action) {
  if (action.type === "INC") {
    return { ...state, counter: state.counter + 1 };
  } else if (action.type === "DSC") {
    return { ...state, counter: state.counter - 1 };
  } else if (action.type === "ADD") {
    return { counter: state.counter + action.payload };
  } else if (action.type === "DC") {
    return { counter: state.counter - action.payload };
  }

  return state;
}
const store = redux.createStore(reducer);
//Now creating the subscriber
// so that any updates will trgigger this subscriber
function subscriber() {
  // This is only used to get the value of the state but to create tghe subscripion we have to do
  const ans = store.getState();
  console.log(ans);
}
//create the subscription
store.subscribe(subscriber);

//Here WE are managing the state with Redux
store.dispatch({ type: "INC" });
store.dispatch({ type: "DSC" });
store.dispatch({ type: "INC" });
store.dispatch({ type: "INC" });
store.dispatch({ type: "DSC" });
store.dispatch({ type: "ADD", payload: 7 });
store.dispatch({ type: "DC", payload: 10 });
