import React from "react";

export function Input({ id, label, value, setValue, ...props}) {

    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input 
                type="text"
                id={id}
                value={value}
                onChange={({target}) => setValue(target.value)}
                {...props}
            />
        </div>
    )
}