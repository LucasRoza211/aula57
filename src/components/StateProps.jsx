import {useState} from "react";

export default function StateProps(props) {
    const[cor, setCor] = useState("azul")
    return(
        <div>
            <h2>Componente de função com Props</h2>
            <h3>Minha cor favorita: {cor} </h3>
            <button onClick={() => setCor(props.cor)} >Minha cor Favorita</button>
        </div>
    )
}