
import React from "react";
import { useLocalStorage } from "./useLocalStorage";

export function CustomHooks() {

    const [produto, setProduto] = useLocalStorage('produto', '')

    function handleClick({target}) {
        setProduto(target.innerText)
    }

    return(
        <div>
            <button onClick={handleClick}>headset</button>
            <button onClick={handleClick}>teclado</button>
            <h1>{produto}</h1>
        </div>
    )
}