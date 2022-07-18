import { useState } from 'react'
import reactLogo from './assets/react.svg'
import logo from './images/logoperrito.png'
import './styles/principal.css'

function Principal() {
  const [count, setCount] = useState(0)

  return (
    <div className="principal">
      <header className="header">
        {/*Log de Header*/}
        <div className="logo">
          <div className="imagen-logo">
            <img src={logo} alt=""></img>
          </div>
          <div className="contenedor-letras-logo">
            <h1>Gigi Animal Shelter</h1>
            <p>Rescate y adopción de animalitos</p>
          </div>
          <i className="list material-icons bar-active" onClick="barActive()">list</i>
        </div>
      </header>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
};

export default Principal
