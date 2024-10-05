import { useEffect,useState } from "react";
const FirstDay=()=>{
    const [count, setCount] = useState(1);
    console.log('1');                     //1,3,1

    useEffect(() => {                     //conclusion
                                          // parent render
                                          //child render
                                          //child useEffect  run
                                          //parent useEffect run
                                          //since changes happen so parent re-render
                                          //due to dependency changes return statement will first call 
                                          //so child return statement call first
                                          //parent reutrn statement call
                                          //child other useeefect part--callback function will be call
                                          //parent other useefeect part--callback function will be call
        console.log("hi1")
      return () => {
        console.log('2');
      };
    }, [count]);
    useEffect(() => {
        console.log("hi2")
      setCount((count) => count + 1);
    }, []);
    return <Child count={count} />;
  }

  function Child({ count }) {
    useEffect(() => {
      console.log('3');
      return () => {
        console.log('4');
      };
    }, [count]);



    return null;
  }


export default FirstDay

/**  
 * output
 *                  1
FirstDay.js:31      3
FirstDay.js:17      hi1
FirstDay.js:23      hi2
FirstDay.js:4        1
FirstDay.js:33       4
FirstDay.js:19       2
FirstDay.js:31       3
FirstDay.js:17      hi1 */

