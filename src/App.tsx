import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRoutes from "./components/rutas/AppRoutes";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Componente principal</h1>
          <AppRoutes></AppRoutes>

      </header>
    </div>
  );
}

export default App;
