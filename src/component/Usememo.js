
import { useState ,useMemo } from "react"


//Function to check the number is prime
function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
       return false;
      }
    }
    return true;
   }
  
   //Function to find the nth prime number
   function findNthPrime(n) {
    let count = 0;
    let num = 2;
    while (count < n) {
      if (isPrime(num)) {
       count++;
      }
      num++;
    }
    return num - 1;
   }
  
 




const Usememo=()=>{

const [text,setText] =  useState(2)

let [otherState , setOther]= useState(0)
console.log("rendering" , Math.random())

//const prime =findNthPrime(text)
//solution of freezing use--usememo
//here meoze it and only change when text changes
const primeSolution =useMemo(()=>findNthPrime(text),[text])

console.log(primeSolution)
    return(
<>
<div>

<input type="number" value={text} onChange={(e)=>{setText(e.target.value)}}/>
{
//<h1>nth:prime {prime}</h1>
}
<h1>nth:prime {primeSolution}</h1>
{
    //so point when we click on this button the above is prime function rendering again which is heavy operation so
    //use usememo
}
<button  onClick={()=>{
    setOther(otherState+1)
}}>click</button>
<h2>other state;{otherState}</h2>
</div>

</>
    )
}
export default Usememo
