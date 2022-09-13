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
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import PrimeReactDemo from "./components/prime-react/PrimeReactDemo";
import InputGroupDemo from "./components/prime-react/InputGroupDemo";
import PrimeReactFormValidation from "./components/prime-react/PrimeReactFormValidation";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Componente principal</h1>
        <MiComponente></MiComponente>
        <Jedi></Jedi>
        <Sith></Sith>
        <ComponenteSeparado></ComponenteSeparado>
        <PropiedadesComponente></PropiedadesComponente>
        <PropiedadesComponente name="Pepe" email="pepesan@gmail.com" ></PropiedadesComponente>
        <EstadoComponente></EstadoComponente>
        <h1>Ejercicios</h1>
        <MisProps name="Pepe" email="p@p.com" age={12} fecha={new Date()}></MisProps>
        <EventosComponente></EventosComponente>
        <FormularioBasicoComponente></FormularioBasicoComponente>
        <FormularioBasicoComponenteCreateRef></FormularioBasicoComponenteCreateRef>
        <HookEstadoComponente></HookEstadoComponente>
        <CochesComponente></CochesComponente>
        <LoginFormValidationComponente></LoginFormValidationComponente>
        <PrimeReactDemo></PrimeReactDemo>
        <PrimeReactFormValidation></PrimeReactFormValidation>
      </header>
    </div>
  );
}

export default App;
