import  { useContext } from "react";
import styles from "./Comp.module.css";
import Api from "./Api";

function Comp() {
  const { handleDelete, todoArr } = useContext(Api);

  return (
    <>
      {todoArr.map((ele, index) => (
        <div key={index} className={styles.container}>
          <div>{ele.input}</div>
          <div>{ele.date}</div>
          <div>
            <button
              className={styles.btn}
              onClick={() => handleDelete(ele.input)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Comp;
