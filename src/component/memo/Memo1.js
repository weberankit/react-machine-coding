import UseRef from "../UseRef"
import Memo2 from "./Memo2"
import { useCallback, useState } from "react"

const Memo1=()=>{
    //pssin datas value to memo2 to chck what happen if we change props
const [datas,setDatas]=useState(["D","d"])
//to see what happen to child components if we change only states of paerent 
const [value,setValue] = useState("this is value")
console.log("memo1",Math.random())
//usecllback  as we passing it s props so to prevent from creating new instances of function
function handlememoCallBack(){
    const a="mukahan babau"
    console.log(a)
    setValue(["lohare"])
}
const handleUseCall=useCallback(()=>handlememoCallBack(),[])

    return(
        <>

        <button onClick={()=>{setDatas(["l","k"])}}>change props</button>
        <Memo2 data={datas} pass={handleUseCall}/>
    <p>   {value} <button onClick={()=>{setValue(value+1)}}>only change state of memo1</button></p>
 {
 /*
 <UseRef/> 
 */
 }


</>
    )
}
export default Memo1