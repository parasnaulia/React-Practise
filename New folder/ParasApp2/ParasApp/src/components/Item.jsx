import { useState } from "react";
import styles from "./Item.module.css"
function Item(probs)
{
      var [click,clickchange]=useState(false);
      function change()
      {
            clickchange(true);
      }
      return (<>
      <div className={styles.Main}>
      <div className={`${styles.container} ${click ? styles.click : ''}`}>
            <span className={styles.food}> {probs.ele}</span>
            <button className={styles.btn} onClick={change}> Buy</button>
      </div>
      </div>
      </>)
}
export default Item;