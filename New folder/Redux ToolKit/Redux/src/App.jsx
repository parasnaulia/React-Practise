import Container from "./assets/Container";
import { Display } from "./assets/Display";
import Buttons from "./assets/Button";
import Input from "./assets/Input";
import No from "./No";
import { useSelector } from "react-redux";
//To use Redux Toolkit use npm install @reduxjs/toolkit
function App()
{
  const Toog=useSelector(store=>store.Tog);

  return (<>
  <Container>
   {Toog===true?<No/>:<Display/>}
<Buttons/>
<Input/>
  </Container>

  </>)
}
export default App;