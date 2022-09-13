import React from 'react';
import './App.css';
import MiComponente from "./components/MiComponente";
import Jedi from "./components/Jedi";
import Sith from "./components/Sith";
import ComponenteSeparado from "./components/ComponenteSeparado";
import PropiedadesComponente from "./components/props/PropiedadesComponente";
import EstadoComponente from "./components/estados/EstadoComponente";
import MisProps from "./ejercicios/MisProps";
import EventosComponente from "./components/eventos/EventosComponente";
import FormularioBasicoComponente from "./components/formularios/FormularioBasicoComponente";
import FormularioBasicoComponenteCreateRef from "./components/formularios/FormularioBasicoComponenteCreateRef";
import HookEstadoComponente from "./components/hooks/HookEstadoComponente";
import CochesComponente from "./components/coches/CochesComponente";
import LoginFormValidationComponente from "./components/formularios/LoginFormValidationComponente";
import 'bootstrap/dist/css/bootstrap.min.css';
import BotonReactBootstrap from "./components/react-bootstrap/BotonReactBootstrap";
import AlertasReactBootstrap from "./components/react-bootstrap/AlertasReactBootstrap";
import {Link, Route, Routes} from "react-router-dom";
import {About, Home, NotFound} from "./components/rutas/Pages";
import Navega from "./components/rutas/Navega";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Componente principal</h1>
        <CochesComponente></CochesComponente>
          <nav
              style={{
                  borderBottom: "solid 1px",
                  paddingBottom: "1rem",
              }}
          >
              <Link to="/">Inicio</Link>|{" "}
              <Link to="/about">About</Link> |{" "}
              <Link to="/navega">Navega</Link> |{" "}
              <Link to="/coches">Coches</Link> |{" "}
          </nav>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="navega" element={<Navega/>} />
              <Route path="coches" element={<CochesComponente />} />
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

export default App;
