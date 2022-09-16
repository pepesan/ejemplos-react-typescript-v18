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
import Menu from "./Menu";
import MiContenedor from "../context/MiContenedor";
import FormularioBasicoComponenteCreateRef from "../formularios/FormularioBasicoComponenteCreateRef";
import HookEstadoComponente from "../hooks/HookEstadoComponente";
import HookEffect from "../hooks/HookEffect";
import CicloDeVida from "../ciclosdevida/CicloDeVida";

class AppRoutes extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Menu></Menu>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="navega" element={<Navega/>} />
                        <Route path="listado" element={<Listado/>} />
                        <Route path="listado/:id" element={<Detalle></Detalle>} />
                        <Route path="ciclodevida" element={<CicloDeVida />} />
                        <Route path="usestate" element={<HookEstadoComponente />} />
                        <Route path="useeffect" element={<HookEffect />} />
                        <Route path="coches" element={<CochesComponente />} />
                        <Route path="clientes" element={<ClienteComponente/>} />
                        <Route path="httprequest" element={<PeticionesWeb />} />
                        <Route path="redux" element={<ReduxAPP />} />
                        <Route path="contexto" element={<MiContenedor />} />
                        <Route path="formcreateref" element={<FormularioBasicoComponenteCreateRef />} />
                        <Route
                            path="*"
                            element={
                                <NotFound/>
                            }
                        />
                    </Routes>
                </header>
            </div>
        );
    }
}
export default AppRoutes;