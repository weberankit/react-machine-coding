import { useEffect, useState } from "react";

const Second=()=>{
    ///chech --batching -process-react
    const [count, setCount] = useState(0);
   const increment = () => {

    // setCount(count + 1);
    // setCount(count + 2);
    // setCount(count + 3);
    //to fix above we use like this
setCount((prev)=>prev+1)
setCount((prev)=>prev+2)

    };





  //check--shallow--of--usestate
    let user={name:"joker",lion:33}
    const [list,setlisting]=useState(user)
    console.log(user)
useEffect(()=>{

//in console it provide correct value but react doesn not detect it as usestate use shallow copy 
  
setlisting((prev)=>{

 
   user.name="koer" 


  //const newobj={...user}
//return newobj  --- this work


//this also work
//prev.name="dd"
//return prev

  return user  //--this not work as same reference so it not work
})
//tofix it make new copy and then return
},[])



    return (
    <div>
    <p>{count}{list.name}</p>
    <button onClick={increment}>Increment</button>
    </div>
    );
}

export default Second
