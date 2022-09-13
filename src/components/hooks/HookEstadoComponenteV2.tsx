import React, {useState} from 'react';

function HookEstadoComponente() {
// Declara una nueva variable de estado, que llamaremos "count".
    const [count, setCount] = useState(0);
    const [valor, setValor] = useState("Hola");
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => {
                setCount(count + 1);
                setValor("Valor modificado");
            }}>
                Click me
            </button>
            <p>{valor}</p>
        </div>
    );
}
export default HookEstadoComponente;