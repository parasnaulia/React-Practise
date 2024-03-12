import  { useReducer, useState } from "react";
import Content from "./Content";

function Reducer(state, action) {
  if (action.type === "Add") {
    return [action.payload, ...state];
  } else if (action.type === "Del") {
    const updatedState = state.filter((ele) => ele.Title !== action.payload.Title);
    return updatedState;
  } else {
    return state;
  }
}

function MainContext(probs) {
  let [state, dispatch] = useReducer(Reducer, []);
   

  function insert(obj1) {
    dispatch({
      type: "Add",
      payload: obj1
    });
  }

  function delete1(title) {
    dispatch({
      type: "Del",
      payload: { Title: title }
    });
  }
  if(state.length===0)
  { cb(true);

  }

  return (
    <Content.Provider value={{ state, insert, delete1 }}>
      {probs.children}
    </Content.Provider>
  );
}

export default MainContext;
