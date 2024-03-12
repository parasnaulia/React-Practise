import styles from "./Comp.module.css";
function Comp({ele,hand})
{
     
      return (<><div className={styles.container}>
           <div>{ele.input}</div>
           <div>{ele.date}</div>
           <div><button className={styles.btn} onClick={()=>{hand(ele)}}>Delete</button></div>
            </div></>)
}
export default Comp;
