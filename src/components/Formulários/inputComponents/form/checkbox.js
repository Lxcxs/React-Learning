import React from "react";  

export function Checkbox({ options, value, setValue }) {

    function handleChange ({target}) {
        if (target.checked) {
            setValue([...value, target.value])
        } else {
            setValue(value.filter((item) => item !== target.value))
        }
    }

    return (
        <div>
            {options.map((option) => (
                <label>
                    <input
                        id={option} 
                        type="checkbox" 
                        value={option}
                        checked={value.includes(option)}
                        onChange={handleChange}                        
                    />
                    {option}
                </label>
            ))}
        </div>
    )
}