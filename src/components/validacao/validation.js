import React from "react";  
import { Input } from '../inputComponents/form/input'

export function Validation() {

    const [cep, setCep] = React.useState('')
    const [error, setError] = React.useState(null)


    function validateCep(value) {
        if(value.length === 0) {
            setError('Preencha um valor!')
            return false

        } else if (!/^\d{5}-?\d{3}$/.test(value)) {
            setError('Preencha um CEP válido!')
            return false 

        } else {
            setError(null)
            return true
        }
    }

    function handleChange({target}) {
        if (error) validateCep(target.value)
        setCep(target.value)
    }

    function handleBlur({target}) {
        validateCep(target.value)
    } 

    function handleSubmit(event) {
        event.preventDefault()

        if(validateCep(cep)) {
            console.log('enviou')
        }else {
            console.log('não enviou')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input
                id='cep' 
                type='text' 
                label='CEP'
                value={cep}
                onChange={handleChange} 
                onBlur={handleBlur}
                placeholder='00000-000'
                
            />
            <p>{cep}</p>
            {error && <p>{error}</p>}

            <button>Enviar</button>
        </form>
    )
}