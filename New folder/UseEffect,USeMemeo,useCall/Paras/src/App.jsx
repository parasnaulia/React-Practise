
// import { useCallback, useState } from "react"
// import Child from "./Child.jsx"




// function App()
// {
//      let [s,cs]=useState(0);
 

//   let handleOnClick=()=>
//   {
    
 
//    console.log("smkgrkngkdrnvbknr");
//    console.log(s);
//   }
  
//   return (<>
//   <h1>
//     {s}
//   </h1>
 

//     <Child handleOnClick={handleOnClick}  />
  

  
//   </>)
// }
// export default App;


// What will be the output when the user types in the input field:

import { useState, useEffect } from "react";
function App() {
  const [count, setCount] = useState(0);
 
  useEffect(() => {
	const interval = setInterval(() => {
  	setCount((prevCount) => prevCount + 1);
	}, 1000);
 
	return () => clearInterval(interval);
  }, []);
   return <div>Count: {count}</div>;
}
 export default App;

