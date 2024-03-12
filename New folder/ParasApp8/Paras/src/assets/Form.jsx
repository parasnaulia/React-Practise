import { useLoaderData } from "react-router-dom";

function Form() {
 const ans=useLoaderData();
  return (
    <>
     
      <div>
        <h1>This Is My form  {ans}</h1>
      </div>
    </>
  );
}
export default Form;
