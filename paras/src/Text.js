import React, { useState } from "react";
import './Text.css'
 export default function Text()
{
     
    const Change1=()=>
{
      // Text=ChangeText(event.target.value);
console.log("Upper"+Text);
      let newText= Text.toUpperCase();
      ChangeText(newText);
      
}
      
    function Change(event)
    {
      ChangeText(event.target.value);
      ChangeText1(Text.split(" ").length);
    } 
    function Change2()
    {
      console.log(Text);
      let count=1;
      for(let i=0;i<Text.length;i++)
      {
            if(Text[i]==" ")
            {
                  count++;
            }

      }
      ChangeText1(count);




    }
    let lower=()=>
    {
     let newtext=Text.toLowerCase();
     ChangeText(newtext);
    }
  
      

    const [Text,ChangeText]=useState("");
    const [Text1,ChangeText1]=useState("");
      
      return (
           
           <>
            
            <div className="container1">
                  <div> <textarea rows ='20' cols='100' id="Form" value={Text} onChange={Change }> </textarea></div>
                 
  
       </div>
       <div className="container3">
            <button  className="btn " onClick={Change1} > Count Words</button>
            <button  className="btn " onClick={Change2} > Count Words</button>
            <button className="btn" onClick={lower}> Lower </button>
            
            </div>
<div>
      <h1 >   words are {Text1}</h1>
</div>

       </>
      )
}
 