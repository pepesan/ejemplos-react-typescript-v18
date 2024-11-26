import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRoutes from "./components/rutas/AppRoutes";
import BotonConEvento from "./components/eventos/BotonConEvento";
function App() {
  return (
    <div className="App">
        <BotonConEvento/>
        <header className="App-header">
            <h1>Componente principal</h1>
            <AppRoutes></AppRoutes>
        </header>
    </div>
  );
}

export default App;
