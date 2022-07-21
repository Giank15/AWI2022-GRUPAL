import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Principal from './principal';
import Acceso from './accesoUsuario';
import Registro from './registro'

function App () {
    
    return (
      <Routes>
        <Route path = "/" element={<Principal />} />
        <Route path = "/acceso" element={<Acceso />} />
        <Route path = "/registro" element={<Registro />} />
      </Routes>
    );
}
export default App;
