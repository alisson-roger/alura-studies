import React from "react";
import Botao from "../botao";

class Formulario extends React.Component {
    render() {
        return (
            <form>
                <div>
                    <label htmlFor="tarefa">
                        Adicione um novo estudo
                    </label>
                    <input 
                        type='text' 
                        name='tarefa' 
                        id='tarefa'
                        placeholder="O que você quer estudar"
                        required>
                    </input>
                </div>
                <div>
                    <label>
                        Tempo
                    </label>
                    <input 
                        type='time'
                        step='1'
                        name='tempo'
                        id='tempo'
                        min='00:00:00'
                        max='00:30:00'
                        required>
                    </input>
                </div>
                <Botao />
            </form>
        )
    }
}

export default Formulario