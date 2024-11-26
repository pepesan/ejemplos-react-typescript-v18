import React, {Component} from 'react'; // importaciones

interface Props {
    name?: string; // los ? Son optionals
    email?: string;
    age?: number;
}

class PropiedadesComponente extends Component<Props>{
    static defaultProps = { // Definimos los valores por defecto
        name: "nombre",
        email: "p@p.com",
        age : 2
    };
    render(): React.ReactElement{ // TS
        return (
            <div id="PropiedadesComponente">
                <h2>Propiedades Componente</h2>
                <h3>{this.props.name}</h3>
                <h3>{this.props.email}</h3>
                <h3>{this.props.age}</h3>
            </div>
        )
    }
}

export default PropiedadesComponente;