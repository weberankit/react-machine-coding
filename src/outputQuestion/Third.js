import { useState, useEffect } from "react";
const Third = () => {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
        
        setSeconds(seconds+1)
        //to fix
   //   setSeconds((prev)=>prev+1);
    }, 1000);
  }, []);
  return <div>Seconds: {seconds}</div>;
};

export default Third;
