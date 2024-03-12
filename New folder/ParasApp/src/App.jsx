// import './App.css'
import Navv from "./components/Navv.jsx"
//Whenever we add component dynamically then at that particular case we have to unique so
//That react can identify that component uniquelly


function App() {
  let obj=[{
    Name:"Egg",
    Name2:"Chicken",
    date:"10/11/12"
  },{
    Name:"Egg1",
    Name2:"Chicken",
    date:"10/11/12"

  },{
    Name:"Egg2",
    Name2:"Chicken",
    date:"10/11/12"

  },{
    Name:"Egg3",
    Name2:"Chicken",
    date:"10/11/12"

  },{
    Name:"Egg3",
    Name2:"Chicken",
    date:"10/11/12"

},
{
  Name:"Egg3",
  Name2:"Chicken",
  date:"10/11/12"

},
{
  Name:"Egg3",
  Name2:"Chicken",
  date:"10/11/12"

},
{
  Name:"Egg3",
  Name2:"Chicken",
  date:"10/11/12"

}]
    
  return (
    <>
      {obj.map((ele, index) => (
        <Navv key={index} ele={ele} />
      ))}
    </>
  );
}

export default App;
