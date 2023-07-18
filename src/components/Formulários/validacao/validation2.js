import React from "react";  
import { Input } from './useForm/hooks/input2'
import { useForm } from "./useForm/hooks";

export function Validation2() {

    const cep = useForm('cep')
    const email = useForm('email')
    const name = useForm()
    const lastName = useForm(false)
    // console.log(cep)

    function handleSubmit(event) {
        event.preventDefault()

        if(cep.validate() && email.validate() && name.validate()) {
            console.log('enviou')
        }else {
            console.log('não enviou')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input
                id='nome' 
                type='text' 
                label='Nome'
                placeholder='Digite um nome'
                {...name}
                
            />
            <Input
                id='lastname' 
                type='text' 
                label='Sobrenome (opcional)'
                placeholder=''
                {...lastName}
                
            />
            <Input
                id='cep' 
                type='text' 
                label='CEP'
                placeholder='00000-000'
                {...cep}
                
            />

            <Input
                id='email' 
                type='email' 
                label='Email'
                placeholder='example@hotmail.com'
                {...email}
                
            />
            

            <button>Enviar</button>
        </form>
    )
}