import styles from './Button.module.css'
function Button(probs)
{
      let handle=()=>{
            setTimeout(()=>{alert("Sahi hai Be 2 sec mai aagya")},2000);

      }
      return (<>
      <button className={styles.btn}  onClick={handle}>{probs.btn}</button>
      </>)
}
export default Button;