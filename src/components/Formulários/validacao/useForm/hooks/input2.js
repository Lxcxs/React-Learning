import React from "react";

export function Input({ id, label, value, onChange, placeholder, onBlur, type, error}) {

    return (
        <div>
            <label key={id} htmlFor={id}>{label}</label>
            <input 
                id={id}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                onBlur={onBlur}
                type={type}
            />
            {error && <p style={{color: 'red'}}>{error}</p>}
        </div>
    )
}