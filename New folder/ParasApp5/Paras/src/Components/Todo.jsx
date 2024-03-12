import { useState } from "react"
import styles from "./Todo.module.css"
function Todo({handler})
{
      let [Arr,changeArr]=useState("");
      let [Arr1,changeArr1]=useState("");
      function hand(event)
      {
            let x=event.target.value;
            changeArr(x);

      }
      function hand1(event)
      {
            let x=event.target.value;
            changeArr1(x);
      }

      return (<>
      <div className={styles.container}>
            <div className={styles.inner}>
          <div className={styles.todo} onChange={(event)=>{hand(event)}}><input placeholder="Enter Todo Here"/></div>
          <div className={styles.date} onChange={(event)=>{hand1(event)}}><input type="date"/></div>
          <div className={styles.btn}><button onClick={(event)=>{handler(event,Arr,Arr1)}}>Add</button></div>
          </div>
      </div>
      </>)
}
export default Todo;





