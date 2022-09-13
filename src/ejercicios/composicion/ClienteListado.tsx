import React from 'react';
import {Coche} from "../../components/coches/Coche";
import {Cliente} from "./Cliente";
import ClienteComponente from "./ClienteComponente";
import ClienteListadoItem from "./ClienteListadoItem";
import clienteListadoItem from "./ClienteListadoItem";

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
                    <ClienteListadoItem cliente={cliente}></ClienteListadoItem>
                ))}
            </ul>
        );
    }


}
export default Clientelistado;