//Importar imagenes
import logo from './images/logoperrito.png'

import './styles/perfil.css'
 
function Perfil (){
    useEffect(()=> {
    let html = ''
    let paginas = [
        {url: "Informacion/infoProyecto.html", descripcion:"Informacion" },
        {url: "Adopcion/adopcion.html", descripcion:"Adopcion" },
        {url: "Acerca/acerca.html", descripcion:"Acerca de" },
        {url: "../index.html", descripcion:"Cerrar Sesion" }
        ]
        for (let elemento of paginas)
       {
         html+=`<li>`;
         html+=`<a href="${elemento.url}">${elemento.descripcion}</a>`;
         html+=`</li>`;
       }    
       opMenu.innerHTML = html;
    });

    return (
        <div className="Perfil">
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
            <nav class="nadvar" id="nadvar">
              <ul id='opMenu'>
                <li>
                <Link to={'/acceso'}>Acceso</Link>
                </li>
                
              </ul>
            </nav>
          </header>
        
            <section class="seccion-formulario">
              <div class="contenedor-formulario">
                  <h2>Datos de usuario</h2><br></br>
                  <form method="post">
                         <label for="nombres">Nombres</label><br></br>
                         <input type="text" name="nombres" id="nombres" ></input><br></br>
                         <label for="apellidos">Apellidos</label><br></br>
                         <input type="text" name="apellidos" id="apellidos"></input><br></br>
                         <label for="correo">Correo electronico</label><br></br>
                         <input type="email" name="correo" id="correo" ></input><br></br>
                         <label for="fechanacimiento">Fecha de nacimiento</label><br></br>
                         <input type="date" name="fechanacimiento" id="fechanacimiento" value="15-5-2000"></input><br></br>
                 </form>
                    <button class="guardar">Editar</button>
                    <button class="regresar">Atras</button>
             </div>
         </section>
          
          <section class="seccion-formulario">
            <div class="contenedor-formulario">
              <form method="post">
                <label for="nombre">Nombre</label><br></br>
                <input type="text" name="nombre" id="nombre"></input><br></br>
                <label for="correo">Correo</label><br></br>
                <input type="email" name="correo" id="correo"></input><br></br>
                <label for="mensaje">Mensaje</label><br></br>
                <textarea name="mensaje" id="mensaje" cols="30" rows="10"></textarea><br></br>
              </form>
            </div>
          </section>
          <footer class="footer">
            <p>Aplicaciones Web 1</p>
            <p>Designed with by <a href="#">Estudiantes de 5to A</a></p>
          </footer>
        </div>
      )
}
export default Perfil
/*
let botones2 = document.querySelectorAll('.regresar');
botones2.forEach(boton => {
  boton.addEventListener('click', ()=>{
    window.location.href = "../Iniciada/iniciada.html";
  })  
})

let botones = document.querySelectorAll('.guardar');
botones.forEach(boton => {
  boton.addEventListener('click', ()=>{
    alert(`Guardando datos...`);
  })  
})
*/
