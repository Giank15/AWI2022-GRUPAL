import { useNavigate } from 'react-router-dom'
import { IUsuario } from './interfaces/IUsuarios';
import axios from 'axios'
import './styles/registro.css'
import React, { useEffect } from 'react';

function Registro (){

    const navigate = useNavigate();

    const handleAtras = ()=>{
      navigate("/");
    }
    const httpAxios = axios.create({
        baseURL:`https://proyectoweb-5b85f-default-rtdb.firebaseio.com/`
    })

    useEffect(()=>
        {
            const guardar = document.querySelector<HTMLButtonElement>('#guardar')!
            
            const id = document.querySelector<HTMLInputElement>('#id')!
            const nombres = document.querySelector<HTMLInputElement>('#nombres')!
            const apellidos = document.querySelector<HTMLInputElement>('#apellidos')!
            const correo = document.querySelector<HTMLInputElement>('#correo')!
            const contrasena = document.querySelector<HTMLInputElement>('#pass')!

            const asignarValores = ()=>{
                const body: IUsuario = {
                    id: id.value,
                    nombres: nombres.value,
                    apellidos: apellidos.value,
                    correo: correo.value,
                    contrasena: contrasena.value
                }
                return body;
            }
            guardar.addEventListener('click', async ()=>{
            
                const body = asignarValores();
                const {data} = await httpAxios.put<IUsuario>(`usuario/${id.value}.json`, body);
            
                console.log(`El usuario ${data.correo} se registro con éxito...`);
                alert(`Guardando datos...`);
            
            })
        }
    )

    return(
        <div>
            <header className="header">
            <div className="logo">
            <div className="imagen-logo">
            <img src="../../images/logoperrito.png" alt="" />
            </div>
            <div className="contenedor-letras-logo">
            <h1>Gigi Animal Shelter</h1>
            <p>Rescate y adopción de animalitos</p>
            </div>
            <i className="list material-icons bar-active" >list</i>
            </div>
            <nav className="nadvar" id="nadvar">
            <ul>
            </ul>
            </nav>
            </header>

            <section className="seccion-formulario">
            <div className="contenedor-formulario">
            <form method="post">
            <h2>Regístrese Aquí</h2><br/>
            <label htmlFor="id">ID</label><br/>
            <input type="text" name="id" id="id" /><br/><br/>
            <label htmlFor="nombres">Nombres</label><br/>
            <input type="text" name="nombres" id="nombres" /><br/><br/>
            <label htmlFor="apellidos">Apellidos</label><br/>
            <input type="text" name="apellidos" id="apellidos" /><br/><br/>
            <label htmlFor="correo">Correo electronico</label><br/>
            <input type="email" name="correo" id="correo" /><br/><br/>
            <label htmlFor="pass">Contraseña</label><br/>
            <input type="password" name="pass" id="pass" /><br/><br/>
            </form>
            <button className="guardar" id='guardar'>Enviar</button>
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
export default Registro;

/*let paginas = [
    {url: "Acceso/accesoUsuario.html", descripcion:"Acceder" },
    {url: "Informacion/infoProyecto.html", descripcion:"Informacion" },
    {url: "Adopcion/adopcion.html", descripcion:"Adopcion" },
    {url: "Acerca/acerca.html", descripcion:"Acerca de" }
]
for (let elemento of paginas)
{
    html+=`<li>`;
    html+=`<a href="../${elemento.url}">${elemento.descripcion}</a>`;
    html+=`</li>`;
}*/