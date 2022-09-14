import React from 'react';
import {Route, Routes} from "react-router-dom";
import {About, Home, NotFound} from "./Pages";
import Navega from "./Navega";
import Listado from "./Listado";
import Detalle from "./Detalle";
import CochesComponente from "../coches/CochesComponente";
import ClienteComponente from "../../ejercicios/composicion/ClienteComponente";
import PeticionesWeb from "../httprequest/PeticionesWeb";
import ReduxAPP from "../redux/ReduxApp";

class AppRoutes extends React.Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="navega" element={<Navega/>} />
                <Route path="listado" element={<Listado/>} />
                <Route path="listado/:id" element={<Detalle></Detalle>} />
                <Route path="coches" element={<CochesComponente />} />
                <Route path="clientes" element={<ClienteComponente/>} />
                <Route path="httprequest" element={<PeticionesWeb />} />
                <Route path="redux" element={<ReduxAPP />} />
                <Route
                    path="*"
                    element={
                        <NotFound/>
                    }
                />
            </Routes>
        );
    }
}
export default AppRoutes;