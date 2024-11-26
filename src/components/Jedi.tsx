import React from 'react';
import "./Jedi.css";
// componente de Tipo Clase React.Component
class Jedi extends React.Component {
    // función que redenriza el componente
    render() {
        // Código de plantilla a presentar por el componente
        return (
            <div className="jedi-box">
                I am a Jedi Component
            </div>
        );
    }
}
// exportar el componenter para pueda ser cargado
export default Jedi;