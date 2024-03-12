
import Button from "./Button";
import styles from  "./Navv.module.css";
//Prob is
import Container from "./Container.jsx";

function Navv(probs) {
  let date = new Date();

  return (
    <>
    <Container>
      <div className={styles.container}>
        <input className={styles.paras} placeholder="akvckn" value={date.toLocaleString()} />
        <input className={styles.paras} placeholder="ALMClm" value={date.toLocaleString()} />
        <Button  btn={probs.ele.Name}/>
        <div className={styles.ppp}>  Please Learn React In Efficent Way</div>
        <h1> Nyc Bhai Hogya </h1>
      </div>
      </Container>
      
    </>
  );
}

export default Navv;
