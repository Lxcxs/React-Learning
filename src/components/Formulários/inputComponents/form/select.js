import React from "react";

export function Select({ options, value, setValue, ...props }) {

    return (
        <div>
            <label>Selecione um Produto</label>

            <select 
                value={value} 
                onChange={({target}) => setValue(target.value)} {...props}
            >
                <option disabled value=''>Selecione</option>

                {options.map((item) => (
                    <option key={item} value={item} >{item}</option>
                ))}
            </select>
        </div>
    )
}