import { useState,useRef } from "react"

const UseRef=()=>{
console.log(Math.random())
let text=9
const [y , setY] =useState(10)
const ref=useRef(0)
const divRef=useRef()
const formRef=useRef()
return(
<>


{
    //1st case in this value print in console and reset on each re-render
}
<div onClick={()=>{text=text+1;
console.log(text)}
}>
{text}button1

</div>
{
    //usestate it rem prev value while rerender
}
<div onClick={()=>{
    setY(y+1)
}}>y value{y} button2</div>

{
    //itwill print in console and not reset on re-render and visible when re-render by other state
}
<div onClick={()=>{
ref.current=ref.current+1
console.log(ref.current)
}}>
useReef {ref.current}button3

</div>



{
    //checking ref value on div how it behave on it
}

<div>
    <div ref={divRef}>
        <div onClick={()=>{
        console.log(divRef)
        }}>
       checking ref on div
        </div>
    </div>
</div>

{
    //checking on form 
    //basically what i understnad is that it console the value but it doest showor reflct changes in ui for that rendering is required
     
}
<form></form>
<input ref={formRef}  onChange={()=>{console.log(formRef.current.value)}} type="text"></input>
<p>this {formRef?.current?.value}</p>

</>
)

}
export default UseRef