import React, {useState} from 'react';

// componente de tipo Función (FC)
function EstadoSencillo() {
    // Declara una nueva variable de estado, que llamaremos "count".
    // El valor inicial del estado es 0
    const [count] = useState(0);
    // código de la plantilla que hace uso de ese estado
    return (
        <div>
            <h4>Valor del estado</h4>
            <p>Your state is {count}</p>
        </div>
    );
}
export default EstadoSencillo;