import React from 'react';

// definición de las Propiedades del componente
interface Propiedades {
    // definición del argumento de las propiedades
    mensaje?: string; // los ? Son optionals
}

// definición del componente que recibe como parámetro las Propiedades del tipo de dato Props
// function SimplePropFC(props: Props) {
function SimplePropFC(propiedades: Propiedades) {
    return <div>{propiedades.mensaje}</div>;
}

export default SimplePropFC;