import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Principal from './principal';
import Acceso from './accesoUsuario';

function App () {
    
    return (
      <Routes>
        <Route path = "/" element={<Principal />} />
        <Route path = "/acceso" element={<Acceso />} />
      </Routes>
    );
}
export default App;
