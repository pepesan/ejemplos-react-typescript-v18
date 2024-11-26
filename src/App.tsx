import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRoutes from "./components/rutas/AppRoutes";
import SimpleComponent from "./components/props/SimpleComponent";
import PropiedadesComponente from "./components/props/PropiedadesComponente";
import SimplePropFC from "./components/props/SimplePropFC";
function App() {
  return (
    <div className="App">
        <SimpleComponent message="hola"/>
        <PropiedadesComponente/>
        <PropiedadesComponente name="valor" email="pepesan@gmail.com" age={20}/>
        <SimplePropFC mensaje="mi mensaje"  />
        <header className="App-header">
            <h1>Componente principal</h1>
            <AppRoutes></AppRoutes>
        </header>
    </div>
  );
}

export default App;
