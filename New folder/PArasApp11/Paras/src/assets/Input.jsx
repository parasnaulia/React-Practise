import { useRef } from "react";
import styles from "./Input.module.css";
import { useDispatch } from "react-redux";
function Input()
{
     let dis=useDispatch();
      let tag=useRef("");
      return (
      <>
      <div>
            <input placeholder="Enter The Number" type="text" ref={tag}/>
            <button   type="button" className={`btn btn-success  ${styles.btn}`} onClick={()=>{dis({type:"ADD",payload:tag.current.value});tag.current.value=""}}>Success</button>
<button  type="button" className={`btn btn-danger ${styles.btn}`} onClick={()=>{dis({type:"SUB",payload:tag.current.value});tag.current.value=""}}>Danger</button>
      </div>
      </>)
}
export default Input;