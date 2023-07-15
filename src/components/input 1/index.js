import React from "react";

export function Input01() {
    const [nome, setNome] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [form, setForm] = React.useState({
        nome: '',
        email: ''
    })


    function handleSubmit(event) {
        event.preventDefault()
        console.log(form)
    }

    function handleChange({ target }) {
        const { id, value } = target
        setForm({...form, [id]: value})
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="nome">Nome</label>
            <input 
                id="nome"
                type="text"
                // value={nome}
                value={form.nome}
                name="nome"
                onChange={handleChange}
            />

            <label htmlFor="nome">Email</label>
            <input 
                id="email"
                type="email"
                // value={email}
                value={form.email}
                name="email"
                onChange={handleChange}
            />

            <button>Enviar</button>
        </form>
        
        
        <h1>{nome}</h1>

        </>

    )
}