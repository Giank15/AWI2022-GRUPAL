import { useState } from 'react'
import './styles/accesoUsuario.css'

function Acceso() {
    
    return (
      <div className="acceso">
        <header class="header">
        <div class="logo">
        <div class="imagen-logo">
        <img src="../../images/logoperrito.png" alt=""></img>
        </div>
        <div class="contenedor-letras-logo">
        <h1>Gigi Animal Shelter</h1>
        <p>Rescate y adopción de animalitos</p>
        </div>
        <i class="list material-icons bar-active" onclick="barActive()">list</i>
        </div>
        <nav class="nadvar" id="nadvar">
        <ul>
        </ul>
        </nav>
        </header>
        <section class="seccion-formulario">
        <div class="contenedor-formulario">
        <form method="post">
        <h2>Iniciar Sesion</h2><br></br>
        <label for="correo">Correo electronico</label><br></br>
        <input type="email" name="correo" id="correo"></input><br></br>
        <label for="pass">Contraseña</label>
        <input type="password" name="pass" id="pass"></input><br></br>
        </form>
        <button class="acceder">Acceder</button><br></br>
        <button class="regresar">Atras</button>
        </div>
        </section>
        <footer class="footer">
        <p>Aplicaciones Web 1</p>
        <p>Designed with by <a href="#">Estudiantes de 5to A</a></p>
        </footer>
      </div>
    )
  }
  
export default Acceso


/*let paginas = [
    {url: "Registro/registroUsuario.html", descripcion:"Registrase" },
    {url: "Informacion/infoProyecto.html", descripcion:"Informacion" },
    {url: "Adopcion/adopcion.html", descripcion:"Adopcion" },
    {url: "Acerca/acerca.html", descripcion:"Acerca de" }
]
for (let elemento of paginas)
{
    html+=`<li>`;
    html+=`<a href="../${elemento.url}">${elemento.descripcion}</a>`;
    html+=`</li>`;
}
let botones2 = document.querySelectorAll('.regresar');
botones2.forEach(boton => {
  boton.addEventListener('click', ()=>{
    window.location.href = "../../index.html";
  })  
})

let botones = document.querySelectorAll('.acceder');
botones.forEach(boton => {
  boton.addEventListener('click', ()=>{
    if(correo.value=="12345@gmail.com" && pass.value=="12345"){
        alert(`Sesion iniciada. Bienvenido Usuario! :D`);
        window.location.href = "../Iniciada/iniciada.html";
    }
    else if(correo.value=="admi@admi" && pass.value=="54321"){
        alert(`Sesion iniciada. Bienvenido Administrador!`);
        window.location.href = "../Administracion/administracion.html";
    }
    else{
        alert(`Datos incorrectos. Vuelva a intentarlo...`);
    }
  })  
})
*/