import React from "react";
import { GlobalContext } from "./GlobalContext";


export function Produto() {

    const dados = React.useContext(GlobalContext)

    function handleClick() {
        dados.setContar(dados.contar + 1)
    }
    function handleRemove() {
        dados.setContar(dados.contar - 1)
    }
    return(
        <div>
            <h1>contador: {dados.contar}</h1>
            <button onClick={handleClick}>
                Adicionar
            </button>
            <button onClick={handleRemove}>
                Remover
            </button>
        </div>
    )
}