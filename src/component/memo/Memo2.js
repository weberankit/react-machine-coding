
import { memo } from "react"

import { useMemo } from "react"


//showing both useMemo and memo
const Memo2= memo(({data,pass})=>{

 function handleItem(i){
        const play=data[0]+"lion"
        console.log(play,"play",data)
    }

const memoize=useMemo(()=>handleItem(4),[])
   

console.log(data,pass())
console.log("memo2",Math.random(),memoize)

return(
    <>
    {data[0]}
    <button onClick={()=>pass()}>check usecallBack</button>

    </>
)
})
export default Memo2