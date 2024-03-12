import { useContext } from "react";
import Decrement from "./Decrement";
import Increment from "./Increment";
import store from "./Store/Store";
import { Outlet } from "react-router-dom";

function App() {
  let { state } = useContext(store);

  return (
    <>
      <div>
        <h1> {state}</h1>
      </div>
      <Increment />
      <Decrement />
      <Outlet />
      <button>
        <a href="/Paras1">Paras1</a>
      </button>
      <button>
        <a href="/"> Paras</a>
      </button>
    </>
  );
}
export default App;
