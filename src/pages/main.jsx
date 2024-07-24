import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <nav>
      <h1>Bienvenido!</h1>
      <p>Has iniciado sesión correctamente.</p>
         <Link to="timesheet">Timesheet</Link> 
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
