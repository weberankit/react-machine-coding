import { useContext } from "react"
import { context } from "./UseContext"
const UseContsecond=()=>{
const contest=useContext(context)
console.log(contest)

return(

    <>
    {contest.a}
    <button onClick={()=>{contest.setA("lion")}}>click</button>
    </>
)


}
export default UseContsecond
