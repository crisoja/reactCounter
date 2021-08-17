import { useState } from "react";
//import "../styles/CounterSizeGenerator.css"

function CounterSizeGenerator(props) {
    
    const [size, setSize]=useState(0);

    function handleChangeSize(event) {
        const size = event.target.value.length === 0 ? 0 : parseInt(event.target.value)
        setSize(parseInt(size));
    }

    return(
        <div>
            <span>Size:</span>
            <input type="number" min="0" value={size} onChange={handleChangeSize}></input>
        </div>
    );
}

export default CounterSizeGenerator;