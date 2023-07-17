import React from "react";

const Radio = ({ pergunta, options, id, onChange, value, active }) => {

    if (active === false) return null
    return(
        <fieldset 
            style={{
                padding: '1em',
                marginBottom: '2em',
                border: '2px solid #414141'
            }}
        >
            <legend style={{fontWeight: 'bold'}}>
                {pergunta}
            </legend>

            {options.map((op) => (
                <label 
                    key={op} 
                    style={{
                        marginBottom: '1em', 
                        fontFamily: 'monospace'
                    }}>
                    <input 
                        id={id}
                        type="radio"
                        value={op}
                        onChange={onChange}
                        checked={value === op}
                    />
                    {op}
                </label>
            ))}
        </fieldset>
    )
}

export default Radio