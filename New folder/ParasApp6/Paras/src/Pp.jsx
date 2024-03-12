import MyContext from "./store/MyContext";
const ans=69;
const name="Hero"
function Pp({children})
{
      return (<MyContext.Provider value={{ans:ans,name:name}}>
            {children}
      </MyContext.Provider>)
}
export default Pp;
