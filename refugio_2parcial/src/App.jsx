import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Principal from './principal';
import Acceso from './accesoUsuario';

function App () {
    const location = useLocation();

    console.log('hash', location.hash);
    console.log('pathname', location.pathname);
    console.log('search', location.search);
    return (
        <Router>
          <div className={"site-content"}>
            <Route pathname="/" element={<Principal/>} />
            <Route pathname="/acceso/" component={Acceso} />
          </div>
        </Router>
    );
}
export default App;