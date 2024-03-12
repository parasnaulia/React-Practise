import {Form, redirect} from "react-router-dom";
function Form1()
{
      return (<>
      <div>
            <Form method="post">
            <input placeholder="Enter Name" name="Name" />
            <input placeholder="Sex" name="Sex"/>
            <button type="submit"> Submit</button>
            </Form>
            
           
      </div>
      </>)
}
//Here We give the method name post due to which data is avalable on submit function argumenet 
//to use that data we can do below operation 
//since it is async operation so we use async await
//and ewwr have to give name attribue to target each ele

export async function Submit(data){
     const formdata=await data.request.formData();
     const ExactData= await Object.fromEntries(formdata);
     console.log(ExactData.Name);
     console.log(ExactData.Sex);
     return redirect("/");

      

}
export default Form1;
