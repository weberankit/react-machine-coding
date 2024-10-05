import {useRef,useEffect} from "react"
import { forwardRef } from "react";
const Four=()=>{
  /*---1st question
        const myRef = useRef();
        myRef.current.focus();
        return <input ref={myRef} />;
        concept---cause error we as we have to check first current exist or not as it can be null also
        */
       
            const elementRef = useRef();
            useEffect(() => {
            console.log(elementRef.current);
            // expected log: <div>Hello, World!</div>
            }, []);

            /**
             *  we cannot pass ref directly instead we should use React.forwardRef() like this 
const Child = React.forwardRef((props, ref) => {
 return <div ref={ref}>Hello, World!</div>;
});
             * 
             */
            return <>
            <ChildImprove item={"song"} ref={elementRef}/>
            <Child ref={elementRef} />
             </>;
         }
           
         function Child({ ref }) {
            return <div ref={ref}>Hello, World!</div>;
       }


const ChildImprove=forwardRef((prop,ref)=>{

    return <div ref={ref}>Hello, World!{prop.item}</div>;
})
/**also use like this
 * const MyInput = forwardRef(function MyInput({ label }, ref) {
  return (
    <label>
      {label}
      <input ref={ref} />
    </label>
  );
});
 * 
 * 
 * 
 */

export default Four