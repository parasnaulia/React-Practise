import 'bootstrap/dist/css/bootstrap.css';
import Header from './assets/Components/Header';
import Footar from './assets/Components/Footar';
import Sidebar from './assets/Components/Sidbar';
import styles from "./App.module.css"
import PostList from './assets/Components/PostList';
import CreatePost from './assets/Components/CreatePost';
import {  useState } from 'react';
import MainContext from './assets/Components/store/MainContext';



function App()
{
 let [value,setVal]=useState("Home");
 

  return <>
  <MainContext>
  <div className={styles.container}>
  <Sidebar value={value} setVal={setVal} />

  <div className={styles.inner}>
  <Header/>
{value==="Home"? <PostList/>:<CreatePost/>}
 
  

  <Footar/>
  </div>
  </div>
  </MainContext>

  </>
}
export default App;