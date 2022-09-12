import React, {Component} from 'react'; // importaciones

interface MiEstado {
    healthPoints: number | undefined;
}

class EstadoComponente extends Component<{}, MiEstado>{
    constructor() {
        super({});
        this.state = {
            healthPoints :10
        }
    }
    render(): React.ReactElement{ // TS
        return (
            <div id="EstadoComponente">
                <h2>Estado</h2>
                <p>{this.state.healthPoints}</p>
            </div>
        )
    }
}
export default EstadoComponente;