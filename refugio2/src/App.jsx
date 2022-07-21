import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Principal from './principal';
import Acceso from './accesoUsuario';
import Registro from './registro'
import Iniciada from './Iniciada';
import Acerca from './acerca';
import Info from './infoProyecto';
import Adopcion from './adopcion';

function App () {
    
    return (
      <Routes>
        <Route path = "/" element={<Principal />} />
        <Route path = "/acceso" element={<Acceso />} />
        <Route path = "/registro" element={<Registro />} />
        <Route path = "/Iniciada" element={<Iniciada />} />
        <Route path = "/acerca" element={<Acerca />} />
        <Route path = "/info" element={<Info />} />
        <Route path = "/adopcion" element={<Adopcion />} />
      </Routes>
    );
}
export default App;
