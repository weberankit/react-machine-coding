import { createContext ,useContext} from "react"  
  
   export const context = createContext({
    flag:{
        mode:true,
    }
  })


  const UseContextData=()=>{
   const c=useContext(context)
   console.log(c)
   return(
    <>
    <h1>jeedeqq Ankit is ankit</h1>
    
    </>
   )
  }

  export default UseContextData