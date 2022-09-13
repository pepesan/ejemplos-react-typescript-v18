import React from 'react';
import {Cliente} from "./Cliente";

interface Props {
    cliente: Cliente;
    onDelete: (cliente: Cliente) => void;
}
class Clientelistado extends React.Component<Props>{
    static defaultProps = { // Definimos los valores por defecto
        cliente: {
            id: 1,
            nombre: "",
            dir: "",
            tlf: ""
        },
        onDelete: (cliente :Cliente) => null
    };
    render() {
        return (

            <li>
                id: {this.props.cliente.id},
                nombre: {this.props.cliente.nombre},
                dir: {this.props.cliente.dir},
                tlf: {this.props.cliente.tlf}
            </li>
        );
    }


}
export default Clientelistado;