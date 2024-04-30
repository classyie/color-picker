
import React, {useState} from "react";

function ColorPicker(){
    const [color, setColor] = useState("#fffff");
    const handleColorChange = (event) => {
        setColor(event.target.value);
    }
    return (
        <div className="color-picker">
            <h1>Color Picker using Hooks</h1>
            <h2>Color Picker</h2>
            <p>Selected color is : {color}</p>
            <div className="color-display" style={{backgroundColor: color}}>{color}</div>
            <label htmlFor="color">Choose a color:</label>
            <input type="color" value={color} onChange={handleColorChange} />
        </div>
    );
}

export default ColorPicker;