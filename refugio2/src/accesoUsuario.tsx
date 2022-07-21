import { useNavigate } from 'react-router-dom'
import { IUsuario } from './interfaces/IUsuarios';
import axios from 'axios'
import React, { useEffect } from 'react';
import './styles/accesoUsuario.css'

function Acceso() {
  
  const navigate = useNavigate();

  const handleAtras = ()=>{
    navigate("/");
  }
  const handleIngreso = ()=>{
    navigate("/Iniciada");
  }

  const httpAxios = axios.create({
    baseURL:`https://proyectoweb-5b85f-default-rtdb.firebaseio.com/`
  })
  useEffect(()=>
        {
            const consultar = document.querySelector<HTMLButtonElement>('#consultar')!

            const correo = document.querySelector<HTMLInputElement>('#correo')!
            const contrasena = document.querySelector<HTMLInputElement>('#pass')!

            consultar.addEventListener('click', async()=>{
              const {data} = await httpAxios.get(`usuario.json`)
              const usuarios:IUsuario[] = []
              for (let id of Object.keys(data))
              {
                  usuarios.push({
                      id,
                      ...data[id]
                  })
              }
              console.log(usuarios);
              for(const usuario of usuarios){
                if(correo.value==usuario.correo && contrasena.value==usuario.contrasena){
                  alert(`Sesión iniciada. Bienvenido Usuario! :D`);
                  handleIngreso()
                }
                else{
                  alert(`Datos incorrectos. Vuelva a intentarlo...`);
                }
              }
          })
        }
    )

  return (
    <div className="acceso">
      <header className="header">
      <div className="logo">
      <div className="imagen-logo">
      <img src="../../images/logoperrito.png" alt=""></img>
      </div>
      <div className="contenedor-letras-logo">
      <h1>Gigi Animal Shelter</h1>
      <p>Rescate y adopción de animalitos</p>
      </div>
      <i className="list material-icons bar-active">list</i>
      </div>
      <nav className="nadvar" id="nadvar">
      <ul>
      </ul>
      </nav>
      </header>
      <section className="seccion-formulario">
      <div className="contenedor-formulario">
      <form method="post">
      <h2>Iniciar Sesion</h2><br></br>
      <label htmlFor="correo">Correo electronico</label><br></br>
      <input type="email" name="correo" id="correo"></input><br></br>
      <label htmlFor="pass">Contraseña</label>
      <input type="password" name="pass" id="pass"></input><br></br>
      </form>
      <button className="acceder" id='consultar'>Acceder</button><br></br>
      <button className="regresar" onClick={handleAtras}>Atras</button>
      </div>
      </section>
      <footer className="footer">
      <p>Aplicaciones Web 1</p>
      <p>Designed with by <a href="#">Estudiantes de 5to A</a></p>
      </footer>
    </div>
  )
}
  
export default Acceso
