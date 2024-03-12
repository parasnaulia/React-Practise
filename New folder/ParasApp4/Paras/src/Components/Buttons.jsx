import styles from "./Buttons.module.css"
function Buttons(probs)
{
      return (<>
      <button className={styles.btn} onClick={()=>{probs.Handle(probs.ele)}}>{probs.ele}</button>
      </>)

}
export default Buttons;