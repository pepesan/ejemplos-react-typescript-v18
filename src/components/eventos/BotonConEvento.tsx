import React, { MouseEvent } from "react";

function BotonConEvento() {

    const manejarClick = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        console.log("Se ha hecho clic en el botón");
    };

    return (
        <div>
            <h2>Componente con Evento</h2>
            <button onClick={manejarClick}>Haz clic aquí</button>
        </div>
    );
}

export default BotonConEvento;
