import Todo from "./Components/Todo.jsx"
import Container from "./Components/Container.jsx";
import Comp from "./Components/comp.jsx";
import { useState } from "react";
import Api from "./Components/Api.jsx";


function App()
{

  let [Arr,changeArr]=useState([]);


  // let [Arr,changeArr]=useState([]);
   function handler(event,input,date)
   {
    const newItem = {
      input: input,
      date: date,
    };
    changeArr((Arr) => [...Arr, newItem]);

   }
   function hand(ele)
   {
     const up=Arr.filter((ele1)=>{
      return ele!==ele1;
    })
    changeArr(up);
   }

  return(<>
  <Api.Provider value={{ todoArr: Arr, handleAdd: handler, handleDelete: hand }}>
  <Container>
  <Todo handler={handler}/> 
  {/* {Arr.map((ele,index)=>{
   return  <Comp key={index} ele={ele} hand={hand}/>
  })} */}
  <Comp/>
 
  

  </Container >
</Api.Provider>
 
  </>)
}
export default App;


