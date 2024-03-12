import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Form from './assets/Form.jsx';
import Form1 from './assets/Form1.jsx';
import Paras from './assets/Paras.jsx';
import { pp } from './Paras11.jsx';
import { Submit } from './assets/Form1.jsx';

import {  RouterProvider, createBrowserRouter } from 'react-router-dom'
// let router=createBrowserRouter([{
//   path:"/",element:<App/>},
// {path:"/Form", element:<Form/> },
// {
//   path:"/Paras", element:<Paras/>
// }]);

//This A way to create a Router 
//We have to give Provider  componenet so That we acn use router Functionality
//And to Define routes We have to pass router as an argument so that we can create Outer we 
//use createBrowserRouter so that we can create diffetent path ans also we can do nested path 
//which we have doen here
//Now we see the loader method the loader will always run before the componenet re render
// 
let router=createBrowserRouter([{
  path:"/", element:<App/>, 
children:[{
  path:"/",element:<Form/>,loader:pp
},{
  path:"/Form1",element:<Form1/>, action:Submit
},
{
  path:"/Paras",element:<Paras/>
}]
 
}])
//If we Want That after submitting a foerm an action should happen
//so we can use action attribue so that after submimitting a form a particylar action shold be pe
//formed 
// so we HAve to use Form Componenet which is prenent on React ruter dom library so that we can
//use this functionality now go to <From1> component

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router}/>
    
  </React.StrictMode>,
)


