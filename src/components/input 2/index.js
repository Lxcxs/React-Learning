import React from "react";

export function Input02() {

    const [response, setResponse] = React.useState('')
    const formFields = [
        {
            id: 'nome',
            label: 'Nome',
            type: 'text'
        },
        {
            id: 'email',
            label: 'Email',
            type: 'email'
        },
        {
            id: 'senha',
            label: 'Senha',
            type: 'password'
        },
        {
            id: 'cep',
            label: 'CEP',
            type: 'text'
        },
        {
            id: 'rua',
            label: 'Rua',
            type: 'text'
        },
        {
            id: 'numero',
            label: 'Número',
            type: 'text'
        },
        {
            id: 'bairro',
            label: 'Bairro',
            type: 'text'
        },
        {
            id: 'cidade',
            label: 'Cidade',
            type: 'text'
        },
        {
            id: 'estado',
            label: 'Estado',
            type: 'text'
        },
    ]
    const [form, setForm] = React.useState(
        formFields.reduce((acc, field) => {
            return {
                ...acc,
                [field.id]: '',
            }
        }, {}),
    )


    function handleSubmit(event) {
        event.preventDefault()
        console.log(form)

        // put a real email on the input
        fetch('https://ranekapi.origamid.dev/json/api/usuario', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form)
        }).then(res => {
            setResponse(res)
        })

        // setForm({nome: '', email: ''})

    }
    function handleChange({ target }) {
        const {id, value} = target
        setForm({...form, [id]: value})

    }

    return (
        <form onSubmit={handleSubmit}>

            {formFields.map(({id, label, type}) => (
                <div key={id}>
                    <label htmlFor={id}>{label}</label>
                    <input 
                        id={id}
                        type={type}
                        value={form[id]}
                        onChange={handleChange}
        
                    />
                </div>

            ))}
            {response && response.ok && <p>Formulário Enviado!</p>}    

            <button>Enviar</button>
        </form>
    )
}