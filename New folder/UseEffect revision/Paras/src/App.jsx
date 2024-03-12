// import { useState,useRef } from "react";
// import "./App.css"
// import 'bootstrap/dist/css/bootstrap.css';
import { useEffect,useState } from "react";
// function App()
// {
//   let [state,setState]=useState(0);
//  let reff=useRef(null);
//  let [counter,cCounter]=useState(0);
//   function handleStart()
//   {
//     if(!reff.cuurent){
//     reff.current=setInterval(() => {
//       setState((prev)=>{
//         if(prev>=59)
//         {
//           cCounter((prev1)=>prev1+1)
//           return 0;
//         } 
//         return prev+1;
//       });
//       console.log("fkenlskfh")
      
//     }, 1000);
//   }
//   console.log("first")
//   }
// function handleStop()
// {
//   console.log("Stop phle");
//   clearInterval(reff.current);
//   console.log("Stop badd");
//   // reff.current=null;


// }
// function handleReset()
// {
//   clearInterval(reff.current);
//   setState(0);
//   cCounter(0);
// }
 
//   return (<>
//   <div className="con">
//     <div>Stopwatch FastTrack
//     <h1>
//       {counter}:{state}
//     </h1>
    
//     <button type="button" onClick={()=>{handleStart()}} className="btn btn-primary pp">Start</button>
// <button type="button" onClick={()=>{handleStop()}} className="btn btn-secondary pp">Stop</button>
// <button type="button"  onClick={handleReset} className="btn btn-success pp">Reset</button>
//   </div>
//   </div>
//   </>)
// }
// export default App;


const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    

    return () =>{return clearInterval(interval)};
    
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
  };

  return (
    <div>
      <h1>{formatTime(time)}</h1>
      <button onClick={handleStart} disabled={isRunning}>
        Start
      </button>
      <button onClick={handleStop} disabled={!isRunning}>
        Stop
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Stopwatch;
