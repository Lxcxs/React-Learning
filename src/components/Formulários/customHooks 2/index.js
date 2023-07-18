import { UseFetch } from "./useFetch";
import React from "react";

export function CustomHooks2() {

    const {request, data, loading, error} = UseFetch()

    React.useEffect(() => {

        async function fetchData() {
            const {response, json} = await request('https://ranekapi.origamid.dev/json/api/produto/')

            console.log(response, json)
        }
        fetchData()

    }, [request])

    if (error) return <h1>{error}</h1>
    if (loading) return <h1>Carregando...</h1>
    if (data) 
        return(

            <div>
                {data.map((produto) => (
                    <div key={produto.id}>
                        <h1>{produto.nome}</h1>
                    </div>
                )) }
            </div>
        )
    
    else return null

}