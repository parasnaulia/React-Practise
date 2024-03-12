// import { useState } from 'react';
 import './App.css';
 import Item from './components/Item.jsx';
 import Container from './components/Conatiner.jsx';
import { useState } from 'react';

// function App() {
//   const [count, setCount] = useState(0);
//   const [timerId, setTimerId] = useState(null);

//   function startTimer() {
//     // Ensure that there is no existing timer before starting a new one
//     if (timerId===null) {
//       setTimerId(setInterval(() => {
//         setCount(Count => Count + 1);
//       }, 1000));
//     }
//   }

//   function stopTimer() {
//     // Clear the interval and reset the timer ID
//     clearInterval(timerId);
//     setTimerId(null);
//   }

//   function resetTimer() {
//     // Stop the timer, reset the count, and clear the timer ID
//     stopTimer();
//     setCount(0);
//   }

//   return (
//     <>
//       <button onClick={startTimer}>Start</button>
//       <button onClick={stopTimer}>Stop</button>
//       <button onClick={resetTimer}>Reset</button>
//       <div>{count}</div>
//     </>
//   );
// }

// export default App;
function App() {
  var [arr, changeArr] = useState([]);
  var date1=new Date();
  var x=date1.toLocaleString();
  var [date,changeDate]=useState(0);


  function handle(event) {
    if (event.key === "Enter") {
      let ans = event.target.value;
      let ans1 = [...arr, ans];
      changeArr(ans1);
      event.target.value='';
     
      changeDate(x);

    }
  }

  return (
    <>
      <Container>
        <div>KAho bc</div>
        <div>
          <input
            placeholder="Enter The Items to eat"
            name="pp"
            onKeyDown={handle}
            className="input"
          />
        </div>
        {/* Use curly braces to map the array and return JSX */}
        {arr.map((ele, index) => (
          <Item key={index} ele={ele} date={date} ></Item>
        ))}
      </Container>
    </>
  );
}

export default App;
