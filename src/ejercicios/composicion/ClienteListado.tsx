import React from 'react';
import {Coche} from "../../components/coches/Coche";
import {Cliente} from "./Cliente";
import ClienteComponente from "./ClienteComponente";

interface Props {
    clientes: Cliente[];
    onDelete: (cliente: Cliente) => void;
}
class Clientelistado extends React.Component<Props>{
    static defaultProps = { // Definimos los valores por defecto
        clientes: [],
        onDelete: (cliente :Cliente) => null
    };
    render() {
        return (
            <ul>
                {this.props.clientes.map(cliente => (
                    <li>id: {cliente.id}, nombre: {cliente.nombre}, dir: {cliente.dir}, tlf: {cliente.tlf}</li>
                ))}
            </ul>
        );
    }


}
export default Clientelistado;