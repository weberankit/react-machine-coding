
import { useState,useEffect } from "react";
function Sixth() {
    const [colour, setColour] = useState('red');
    const [count, setCount] = useState(0);
    const onClick = () => {
      setColour('blue');
    }
    useEffect(() => {
      setCount(count + 1)
      //useEffect dependcies count  cause infinte loop
    }, [colour,count])
    return (
      <div>
        <button onClick={onClick}>ChangeColour</button>
      </div>
    );
    }
    export default Sixth
    