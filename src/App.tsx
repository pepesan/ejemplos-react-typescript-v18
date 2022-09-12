import React from 'react';
import './App.css';
import MiComponente from "./components/MiComponente";
import Jedi from "./components/Jedi";
import Sith from "./components/Sith";
import PropiedadesComponente from "./components/props/PropiedadesComponente";
import EstadoComponente from "./components/estados/EstadoComponente";
import MisProps from "./ejercicios/MisProps";
import EventosComponente from "./components/eventos/EventosComponente";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Componente principal</h1>
        <MiComponente></MiComponente>
        <Jedi></Jedi>
        <Sith></Sith>
        <PropiedadesComponente></PropiedadesComponente>
        <PropiedadesComponente name="Pepe" email="pepesan@gmail.com" ></PropiedadesComponente>
        <EstadoComponente></EstadoComponente>
        <h1>Ejercicios</h1>
        <MisProps name="Pepe" email="p@p.com" age={12} fecha={new Date()}></MisProps>
        <EventosComponente></EventosComponente>
      </header>
    </div>
  );
}

export default App;
