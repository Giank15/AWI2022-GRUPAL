import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
//Importar imagenes
import logo from './images/logoperrito.png'
import imagen1 from './images/ref1.jpg'
import imagen2 from './images/red2.jpg'
import imagen3 from './images/ref3.jpg'
import imagen4 from './images/ref4.jpg'
import imagen5 from './images/ref5.jpg'
import imagen6 from './images/ref6.jpg'
//Importar estilo
import './styles/iniciada.css'


function Iniciada() {
  
  /*useEffect(()=> {
    //let html = ''

    let paginas = [
      {url: 'Perdil/perfil.html', descripcion:"Mi perfil" },
      {url: "Informacion/infoProyecto.html", descripcion:"Informacion" },
      {url: "Adopcion/adopcion.html", descripcion:"Adopcion" },
      {url: "Acerca/acerca.html", descripcion:"Acerca de" },
      {url: "../index.html", descripcion:"Cerrar Secion" }
    ]

    for (let elemento of paginas){
      html+=`<li>`;
      html+=`<${Link} to={${elemento.url}}>${elemento.descripcion}</${Link}>`;
      html+=`</li>`;
    }
    opMenu.innerHTML = html;
  });*/

  return (
    <div className="Iniciada">
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
            <Link to={'/'}>Cerrar Sesión</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main class="main container">
        <div class="parrafo-principal">
          <p>El tema de nuestro proyecto consiste en un aplicativo web de un refugio de animales en la que las personas podrán donar para aquellos animales que se encuentran en un mal estado y necesitan para su tratamiento. Además tendrán la opción de poder adoptar a los animales desde el aplicativo.</p>
        </div>
        <div class="Contenido-multimedia">
          <h2>Contenido multimedia de nuestro refugio GiGi</h2>
          <div class="carrucel-imagenes">
          <div class="contenedor-magenes-carrucel"><img src={imagen1} alt=""></img></div>
          <div class="contenedor-magenes-carrucel"><img src={imagen2} alt=""></img></div>
          <div class="contenedor-magenes-carrucel"><img src={imagen3} alt=""></img></div>
          <div class="contenedor-magenes-carrucel"><img src={imagen4} alt=""></img></div>
          <div class="contenedor-magenes-carrucel"><img src={imagen5} alt=""></img></div>
          <div class="contenedor-magenes-carrucel"><img src={imagen6} alt=""></img></div>
        </div>
        </div>
        <section class="seccion-refugio">
          <div class="perfil-refugio">
            <h2>Perfil del Refugio</h2>
            <hr></hr>
          </div>
          <div class="grid-refugio">
            <div class="sub-grid">
              <h2>Misión</h2>
              <div class="sub-parrafo"><p>Promovemos la protección y el bienestar de los animales mediante acciones directas y la concienciación de la comunidad en el respeto que merecen y se debe tener hacia las demás especies.</p>  </div>
            </div>
            <div class="sub-grid">
              <h2>Visión</h2>
              <div class="sub-parrafo"><p>Ser una organización autosustentable, reconocida como referente nacional en bienestar animal, responsable del cambio en la relación humano - animal en el Ecuador.</p>  </div>
            </div>
            <div class="sub-grid">
              <img src={imagen4} alt=""></img>
            </div>
            <div class="sub-grid">
              <img src={imagen6} alt=""></img>
            </div>
          </div>
        </section>
      </main>
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

export default Iniciada
