import React, { useState, useEffect } from 'react';

function HookEffect (){

    // define el estado
    const [message, setMessage] = useState('Hi there, how are you?');

    // la idea es el useEffect cambie el estado pasado un segundo de la carga inicial
    // se disparará el efecto cada vez que se haga un update en el componente
    // es decir si cambia una prop o un estado
    // por lo que se ejecutará de normal con componenteDidUpdate, componentDidMount y componentWillMount
    useEffect(
        // se pasa como parámetro una función que se ejecutará cuando se dispare el efecto
        () => {
        console.log('trigger use effect hook');
        setTimeout(() => {
            setMessage("I'm fine, thanks for asking.");
        }, 1000)
    })

    return <h1>{message}</h1>
}
export default HookEffect;