import { useContext } from "react";
import styles from "./Container.module.css"
import Api from "./Api";
function Container(probs)

{
      const { todoArr } = useContext(Api);
      const firstTodoInput = todoArr && todoArr.length > 0 ? todoArr[0].input : "No todos";
      return (
            <div className={styles.Container}>
                  <div className={styles.inner}>
                        <h1 className={styles.h1}> This is my Container {firstTodoInput}</h1>
                        {probs.children}

                  </div>
            </div>
      
      )
}
export default Container;