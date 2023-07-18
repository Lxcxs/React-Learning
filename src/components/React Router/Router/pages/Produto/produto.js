import React from "react";
import { NavLink, useParams, Outlet } from "react-router-dom";


const Produto = () => {

    const params = useParams()

    return(<>
    
        <h1>Produto: {params.id}</h1>

        <div>
            <NavLink to=''>Descrição</NavLink>
            <NavLink to='avaliacao'>Avaliação</NavLink>
            <NavLink to='customizado'>Customizado</NavLink>
        </div>

        <Outlet />


    </>)
}

export default Produto