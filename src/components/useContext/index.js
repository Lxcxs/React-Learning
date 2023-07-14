import React from "react";
import { Produto } from "./Produto";
import { GlobalStorage } from "./GlobalContext";

export function UContext() {

    return(
        <GlobalStorage>
            <Produto />
        </GlobalStorage>
    )

}