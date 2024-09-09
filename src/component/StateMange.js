import {useEffect, useState} from "react"





const StateMange=()=>{
//1st and for 2nd case
//const [value, setValues] = useState(1)
// after 3rd case use let obj={no:5,}  //in this case it behave different

// 3rd case
const [value, setValues] = useState({no:5,})

const clickHndler=()=>{
    console.log("hi",Math.random())
//after reaching to 2 it not goint to renrender the whole of this component
 //   setValues(2)


  //case-3

//if we set default value object and update by same object
//you will see we have provide same object it should not rerender but it is rerender each time even value not changes that because
//it is refernce dtatypes ,object alwyas create new one/boxes and its values is reference to original one
//so here each time new boxes/thing is going there that's why react render each time
//each time wehen we pass premitive dattypes it pass by value 
//and for non-primitive it pass by refernce types i.e each time new box is passed 
//how to protect/save this from re-rendering
//use value.no  the exact one


//here we created new obj that's why --my thought---
setValues({no:5,})

}
////how to protect/save this from re-rendering
// or Tips whenever you have to use usesteate value as dependency
//make sure to  use exact value like value.no not value because it call useeffect each time as because we have 
//passed reference value so it will pass by reference above explained
//unwnated render so by using this it will only rerender when actual values changed
//not use this useEffect(()=>{},[value])
// useEffect(()=>{},[value.no])
    return(
        <>
        {Math.random()}
<button onClick={clickHndler}>clickME</button>
<h1>{value.no}</h1>
</>
    )
}

export default StateMange