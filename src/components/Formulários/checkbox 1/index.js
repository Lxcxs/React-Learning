import React from "react";

export function CheckBox01() {

    const [cores, setCores] = React.useState([])
    const coresArr = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza', 'vermelho']

    function handleChange({ target }) {
        if (target.checked) {
            setCores([...cores, target.value])
        } else {
            setCores(cores.filter((cor) => cor !== target.value))
        }
    }

    React.useEffect(() => {
        console.log(cores)
    }, [cores])

    return (

        <form>
            {coresArr.map( (item, index) => (
                <label key={index} style={{textTransform: 'capitalize'}}>
                    <input 
                        type="checkbox"
                        value={item + index}
                        checked={cores.includes(item + index)}
                        onChange={handleChange}
                    />
                    {item}
                </label>
            ) )}

        </form>
    )
}