import React, {MouseEvent} from "react";

interface EstadoBoton {
    numero: number;
}

class CicloDeVida extends React.Component<any,EstadoBoton> {
    state : EstadoBoton= {
        numero : 0,
    };
    constructor(props: Readonly<any>){
        super(props);
        //asociación de los métodos a atributos
        this.pulsame = this.pulsame.bind(this);
    }
    componentDidMount() {
        console.log("CicloDeVida:componentDidMount");
    }
    componentWillUnmount(){
        console.log("CicloDeVida:componentUnmount");
    }
    componentWillUpdate() {
        console.log("CicloDeVida:componentWillUpdate");
    }
    componentDidUpdate() {
        console.log("CicloDeVida:componentDidUpdate");
    }
    pulsame(event: MouseEvent<HTMLButtonElement>){
        console.log("CicloDeVida:pulsame:Cambia estado");
        event.preventDefault();
        this.setState(state => ({
            ...state,
            numero: state.numero + 1
        }));
    }
    render() {
        console.log("CicloDeVida:render");
        return (
            <div>
                <h2>Ciclo de Vida</h2>
                <h3>mirar el console.log</h3>
                <button onClick={this.pulsame}>Incrementa</button>
                <h3>Estado: Numero: {this.state.numero}</h3>
            </div>
        );
    }
}
export default CicloDeVida;