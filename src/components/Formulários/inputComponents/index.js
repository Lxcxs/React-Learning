import React from "react";
import { Input } from "./form/input";
import { Select } from "./form/select";
import { Radio } from "./form/radio";
import './style.css'
import { Checkbox } from "./form/checkbox";

export function InputTests() {

    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [product, setProduct] = React.useState('')
    const [color, setColor] = React.useState('verde')
    const [language, setLanguage] = React.useState([])

    function handleClick(event) {
        event.preventDefault()
        console.log(name, email)
    }

    return (
        <form onSubmit={handleClick} style={{textTransform: 'capitalize'}}>

            <Checkbox 
                options={['Javascript', 'PHP', 'Python']}
                value={language}
                setValue={setLanguage} 
            />

            <Select 
                options={['smartphone', 'tablet', 'teclado']} 
                value={product} 
                setValue={setProduct} />

            <Radio 
                options={['verde', 'azul', 'amarelo']}
                value={color}
                setValue={setColor} 
            />

            <div className="inputs">
                <Input id='name' label='name' value={name} setValue={setName} required />
                <Input id='email' label='Email' value={email} setValue={setEmail} />
            </div>

            <button>Enviar</button>
        </form>
    )
}