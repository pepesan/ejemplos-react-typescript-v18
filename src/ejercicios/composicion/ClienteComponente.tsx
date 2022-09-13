import React from 'react';
import {Cliente} from "./Cliente";
import {CocheListItem} from "../../components/coches/CocheListItem";
import Clientelistado from "./ClienteListado";
import AddCliente from "./AddCliente";

interface MiEstadoCliente {
    nuevoCliente: Cliente;
    listadoCliente: Cliente[];
}

class ClienteComponente extends React.Component<{}, MiEstadoCliente> {
    constructor() {
        super({});
        this.state = {
            nuevoCliente: {
                id: 1,
                nombre: "",
                dir: "",
                tlf: "+34"
            },
            listadoCliente: [

                {
                    id: 0,
                    nombre: "Pepe",
                    dir: "C/ de mi casa 27",
                    tlf: "+34 676554433"
                }


            ]
        }
    }
    private handleClienteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            nuevoCliente: {
                ...this.state.nuevoCliente,
                nombre: event.target.value
            }
        });
    };
    private addCliente = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        this.setState(previousState => ({
            nuevoCliente: {
                id: previousState.nuevoCliente.id + 1,
                nombre: "",
                dir: "",
                tlf: ""
            },
            listadoCliente: [...previousState.listadoCliente, previousState.nuevoCliente]
        }));
    };
    render() {
        return (
            <div>
                <h2>Gestión de Clientes</h2>
                <AddCliente nuevoCliente={this.state.nuevoCliente} onAdd={this.addCliente} onChange={this.handleClienteChange}></AddCliente>
                <Clientelistado clientes={this.state.listadoCliente}></Clientelistado>
            </div>
        );
    }
}
export default ClienteComponente;