import React from "react";

export default class FormExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event){
        event.preventDefaut();
        alert(this.state.email);
    }
    handleInputChange(event){
        return this.setState({
            email: event.target.value
                    //evento.campo_de_entrada.valor_da_entrada
        })
    }
    render(){
        return(
            <div>
                <h2>Exemplo de formulário</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Email" onChange={this.handleInputChange} />
                    <button>Enviar</button>
                </form>
                <h2>Email: {this.state.email} </h2>
            </div>
        )
    }
}