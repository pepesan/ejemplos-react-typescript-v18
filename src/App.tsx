import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRoutes from "./components/rutas/AppRoutes";
import SimpleComponent from "./components/props/SimpleComponent";
function App() {
  return (
    <div className="App">
        <SimpleComponent message={"hola"}/>
        <header className="App-header">
            <h1>Componente principal</h1>
            <AppRoutes></AppRoutes>
        </header>
    </div>
  );
}

export default App;
