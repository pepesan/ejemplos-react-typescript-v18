import React from 'react';
import {Cliente} from "./Cliente";

interface Props {
    nuevoCliente: Cliente;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onAdd: (event: React.FormEvent<HTMLFormElement>) => void;
}
class AddCliente extends React.Component<Props> {
    static defaultProps = { // Definimos los valores por defecto
        cliente: {
            id: 1,
            nombre: "",
            dir: "",
            tlf: ""
        }

    };
    render() {
        return (
            <div >
                <h3>Formulario añadir cliente</h3>
                <form onSubmit={this.props.onAdd}>
                    <label>
                        Name:
                        <input type="text" value={this.props.nuevoCliente.nombre} ref="name" onChange={this.props.onChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}
export default AddCliente;