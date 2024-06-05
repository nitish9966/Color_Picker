import { useState } from "react";

function Color(){

    const [color,setColor]=useState("#FFFFFF")

    function handleColor(event){
        setColor(event.target.value);
    }

    return(
        <div className="container">
            <h1>Color Picker</h1>
            <div className="color-display" style={{backgroundColor:color}}>
            <p>Selected Color: {color}</p>
            </div>
            <label>Select a Color: </label><br></br>
            <input type="color" value={color} onChange={handleColor}/>
        </div>
    )
}

export default Color;