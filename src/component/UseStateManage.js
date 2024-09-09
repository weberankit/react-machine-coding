import { useState } from "react";
//question rint table without using 2 usestate and
// useeffect as initial valu must be same and it also print multiplied value
//ok inital value can change 
const UseStatemange=()=>{


const[values, setValues] = useState(1)
//1st appoach

let store=values*5
function multiplyHandler(){
setValues(values+1)
}


    return(
        <>
        <h1>Initial valued:{values}</h1>
        
        <button onClick={multiplyHandler}>Multiply</button>
        <h2>multiplied value:{store}</h2>
        
        </>

    )
}


export default UseStatemange;

