import { useRef } from "react";
import styles from "./Input.module.css";
import { useDispatch } from "react-redux";
import { Counter1 } from "./store/store";
function Input()
{
     let dis=useDispatch();
      let tag=useRef("");
      return (
      <>
      <div>
            <input placeholder="Enter The Number" type="text" ref={tag}/>
            <button   type="button" className={`btn btn-success  ${styles.btn}`} onClick={()=>{dis(Counter1.Asc(tag.current.value));tag.current.value=""}}>Sub</button>
<button  type="button" className={`btn btn-danger ${styles.btn}`} onClick={()=>{dis(Counter1.Dec(tag.current.value));tag.current.value=""}}>ADD</button>
      </div>
      </>)
}
export default Input;