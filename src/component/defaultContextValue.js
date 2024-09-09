
import { useContext } from "react"
import { context } from "./UseContext"
const DefaultContextValue=()=>{
const coin=useContext(context)
console.log(coin)
}
export default DefaultContextValue