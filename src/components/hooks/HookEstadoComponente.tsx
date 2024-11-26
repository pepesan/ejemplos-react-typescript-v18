import React, {useState} from 'react';

// componente de tipo Función (FC)
function HookEstadoComponente() {
    // Declara una nueva variable de estado, que llamaremos "count".
    const [count, setcount] = useState(0);
    // código de la plantilla que hace uso de ese estado
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setcount(count + 1)}>
                Click me
            </button>
        </div>
    );
}
export default HookEstadoComponente;