import React from 'react';
import {Link} from "react-router-dom";

class Menu extends React.Component {
    render() {
        return (
            <nav
                style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem",
                }}
            >
                <Link to="/">Inicio</Link>|{" "}
                <Link to="/about">About</Link> |{" "}
                <Link to="/navega">Navega</Link> |{" "}
                <Link to="/listado">Listado</Link> |{" "}
                <Link to="/ciclodevida">Ciclo de Vida</Link> |{" "}
                <Link to="/usestate">useState</Link> |{" "}
                <Link to="/useeffect">useEffect</Link> |{" "}
                <Link to="/coches">Coches</Link> |{" "}
                <Link to="/clientes">Clientes</Link> |{" "}
                <Link to="/httprequest">HttpRequest</Link> |{" "}
                <Link to="/redux">Redux</Link> |{" "}
                <Link to="/contexto">Contexto</Link> |{" "}
                <Link to="/formcreateref">Formulario</Link> |{" "}

            </nav>
        );
    }
}
export default Menu;