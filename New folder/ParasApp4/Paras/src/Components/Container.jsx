import styles from "./Container.module.css"
function Container(probs)
{
      return (<div className={styles.container}>
            <div className={styles.inner} >
                  <h1> This Is My container</h1>
                  {probs.children}
            </div>
      </div>)
}
export default Container;