import styles from "./Container.module.css"


export default function Container(probs) {
  return (
    <div className={styles.pp}>
      <h1> This is My Custom Container</h1>

      {probs.children}
    </div>
  )
}
