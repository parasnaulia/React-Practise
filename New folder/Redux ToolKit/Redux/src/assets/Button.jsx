import 'bootstrap/dist/css/bootstrap.css';
import {useDispatch} from "react-redux";
import styles from "./Button.module.css";
import { Counter1 } from './store/store';
import { Counter2 } from './store/store';

function Button()
{
      //Here Dispatch Will Give us The Functionality to use dispatch it returns dispatch function
     const dis=useDispatch();
     
      return (<>
      <div>
      <button onClick={()=>{dis(Counter1.decrement())}} type="button" className={`btn btn-success  ${styles.btn}`}>Subtract</button>
<button onClick={()=>{dis(Counter1.increment())}} type="button" className={`btn btn-danger ${styles.btn}`}>Add</button>
      </div>
      <div>
      <button onClick={()=>{dis(Counter2.Toggle())}} type="button" className={`btn btn-success  ${styles.btn}`}>Toogle</button>
            
      </div>
      </>)
}
export default Button;