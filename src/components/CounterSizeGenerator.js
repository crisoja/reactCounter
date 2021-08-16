import { useState } from "react";
import "../styles/CounterSizeGenerator.css"

function CounterSizeGenerator(props) {
    
    const [size, setSize]=useState(0);

    function handleChangeSize(event) {
        setSize(parseInt(event.target.value));
        props.updateCounterSize(parseInt(event.target.value));
    }

    return(
        <div>
            <span>Size:</span>
            <input type="number" min="0" value={size} onChange={handleChangeSize}></input>
        </div>
    );
}

export default CounterSizeGenerator;