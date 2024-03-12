import { useState } from "react";
import styles from "./App.module.css"
import Buttons from "./Components/Buttons.jsx";
import Container from "./Components/Container.jsx";
function App()
{
  let [ans1,Cans1]=useState("");
  let arr=["1","2","3","4","5","6","7","8","9","0","C","=","-","+","*","/"];
  function Handle(ans)
{
 if(ans==="=")
 {
  let res=eval(ans1);
  Cans1(res);

 }
 else if(ans==="C")
 {
  Cans1("");


 }
 else
 {
  let res1=ans1+ans;
 
  Cans1(res1);

 }

}
  return (<>
  <Container>
  <div >
  <input className={styles.pp} readOnly value={ans1}/>
  </div>
  {arr.map((ele,index)=>{
    return <Buttons key={index} ele={ele} Handle={Handle}/>
  })}
  </Container>
  </>)
}
export default App;