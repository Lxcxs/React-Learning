import React from "react"
import { useNavigate } from "react-router-dom"
import Head from "../components/Head/head"

const Login = () => {

    const navigate = useNavigate()

    function handleClick() {
        // console.log('fazer login')
        navigate('/')
    }

    return (
        <>
        <Head title="Login" description="Essa é a descrição de Login"/>
        <h1>Login</h1>
        <button onClick={handleClick}>
            Login
        </button>
        </>
    )
}

export default Login