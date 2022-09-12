import React, {Component} from 'react'; // importaciones
class MiComponente extends Component{ // definimos el componente
    render(): React.ReactElement{ // plantilla renderizable
        return (
            <div id="MiComponente">
                <h2>Mi Componente</h2>
            </div>)
    }
}
export default MiComponente; // exportación del componente