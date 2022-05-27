import { useState } from "react";

export default function FormMultiple(){
    const[inputs, setInputs] = useState({})
    const handleChange = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.value;
        
        setInputs(
            (values) => (console.log(values),
            {
                ...values,[inputName]: inputValue
            })
        )
    }
    const handleSubmit = (event) => {
        event.preventDefaut()
        alert(JSON.stringify(inputs))
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <h3>Formulário</h3>
            <input type="text" name='username' value={inputs.username || ""} placeholder="Username" onChange={handleChange} />
            <input type="number" name="age" value={inputs.age || ""} onChange={handleChange} />
            <textarea type="Description" cols="30" rows="10" onChange={handleChange} placeholder="Descricão"></textarea>
            <input type="submit" name="submit" value="Enviar" />
            </form>
            <p>Nome: {inputs.username} </p>
            <p>Descricão: {inputs.description} </p>
            <p>Idade: {inputs.age} </p>
        </div>
    )
}