import styles from "./Container.module.css";
function Container(probs)
{
      return<> 
      <div className={styles.Main}>
      <h1> Ye Mera Container Hai</h1>
      <div className={styles.container}>{probs.children} </div>
      </div>
      </>
}
export default Container;