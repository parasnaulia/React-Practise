import styles from "./Container.module.css"
function Container(probs)
{
      return (
            <div className={styles.Container}>
                  <div className={styles.inner}>
                        <h1 className={styles.h1}> This is my Container</h1>
                        {probs.children}

                  </div>
            </div>
      
      )
}
export default Container;