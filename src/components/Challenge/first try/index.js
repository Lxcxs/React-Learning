import React from "react";
import { Radio } from "../../inputComponents/form/radio";

const perguntas = [
    {
      pergunta: 'Qual método é utilizado para criar componentes?',
      options: [
        'React.makeComponent()',
        'React.createComponent()',
        'React.createElement()',
      ],
      resposta: 'React.createElement()',
      id: 'p1',
    },
    {
      pergunta: 'Como importamos um componente externo?',
      options: [
        'import Component from "./Component"',
        'require("./Component")',
        'import "./Component"',
      ],
      resposta: 'import Component from "./Component"',
      id: 'p2',
    },
    {
      pergunta: 'Qual hook não é nativo?',
      options: ['useEffect()', 'useFetch()', 'useCallback()'],
      resposta: 'useFetch()',
      id: 'p3',
    },
    {
      pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
      options: ['set', 'get', 'use'],
      resposta: 'use',
      id: 'p4',
    },
]; 

export function Challenge() {

    const [answear, setAnswear] = React.useState({})
    const [count, setCount] = React.useState(0)
    const [correct, setCorrect] = React.useState(0)
    const [error, setError] = React.useState(null)
    const [end, setEnd] = React.useState(false)
    const questionId =['p1', 'p2', 'p3', 'p4']

 
      
    
    function handleSubmit(event) {
        event.preventDefault()

        if (answear !== '') {
            setCount(count + 1)
            setError(null)
            if (answear === perguntas[count].resposta) {
                setCorrect(correct + 1)
                setAnswear('')
            }
        } else {
            setError('Você precisa marcar uma opção!')

        }

        if(count > 2) setEnd(true)
    }
    
    return (
        <form onSubmit={handleSubmit}>
            {perguntas
            .filter((q) => q.id === questionId[count])
            .map((item) => (
                <fieldset>
                    <legend key={item.id}>{item.pergunta}</legend>
                    <Radio 
                        options={item.options}
                        value={answear}
                        setValue={setAnswear}
                    />
                </fieldset>
            ))}

            {error && <p>{error}</p>}
            {end && <h1>{`Você acertou: ${correct}/4`}</h1>}
            
            {!end && <button>Próxima</button>}
        </form>

    )
}