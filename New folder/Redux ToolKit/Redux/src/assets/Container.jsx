import styles from "./Container.module.css"
function Container(probs)
{
      return (<>
      <div className={styles.container}>
            <h1>
                  This is my Container
            </h1>
            {probs.children}
      </div>
      </>)
}
export default Container;