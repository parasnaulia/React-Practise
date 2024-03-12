import 'bootstrap/dist/css/bootstrap.css';
import {useDispatch} from "react-redux";
import styles from "./Button.module.css";

function Button()
{
      //Here Dispatch Will Give us The Functionality to use dispatch it returns dispatch function
     const dis=useDispatch();
      return (<>
      <div>
      <button onClick={()=>{dis({type:"INC"})}} type="button" className={`btn btn-success  ${styles.btn}`}>Success</button>
<button onClick={()=>{dis({type:"DSC"})}} type="button" className={`btn btn-danger ${styles.btn}`}>Danger</button>
      </div>
      
      </>)
}
export default Button;