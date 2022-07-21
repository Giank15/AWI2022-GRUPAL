import { useEffect } from 'react';

import logo from './images/logoperrito.png'

import './styles/acerca.css'

function Acerca (){
      useEffect(()=>{
        let html = ''
        let paginas = [
            {url: "./index.html", descripcion:"Pagina Principal" },
            {url: "Informacion/infoProyecto.html", descripcion:"Informacion" }
            ]
            for (let elemento of paginas){
            html+=`<li>`;
            html+=`<a href="./${elemento.url}">${elemento.descripcion}</a>`
            html+=`</li>`
            } 
      });
  return(
      <div className='acerca'>
          <header className="header">
              <div className="logo"> 
                 <div className="imagen-logo">
                 <img src={logo} alt=""></img>
                 </div>
                 <div className="contenedor-letras-logo">
                        <p>Rescate y adopción de animalitos</p>
                        <h1>Gigi Animal Shelter</h1>
                        <i className="list material-icons bar-active" onclick="barActive()">list</i>
                 </div>
             </div>
             <nav class="nadvar" id="nadvar">
             <ul id='opMenu'>
             </ul>
             </nav>
          </header>
          <main class="main container">
             <div class="perfil-refugio">
             <h2>Acerca de proyecto</h2>
             <hr></hr>
             </div>
             <section class="seccion-refugio">
                <h1><br>Giusepy Alexander Calle Santana Giancarlo </br><br>Stephano Queirolo Rodriguez</br>
                <br>Ligia Nicole Vargas Garcia</br></h1>
                <button>Saber Mas</button>
             </section>
             <section id="Somos-proya">
               <div className="container">
                    <div className="img container"></div>
                    <div className="texto">
                         <h2><spam className="color-acento">Conoce acerca de</spam></h2>
                         <p> Nuestra organización protectora de animales especializada,en la ayuda a perros y gatos maltratados y/o abandonados.
                         Una organización totalmente independiente que no recibe subvenciones de organismos oficiales, 
                         empresas ni partidos políticos.Las cuotas de nuestros socios y las donaciones de nuestros simpatizantes 
                         permiten que nuestra labor sea sostenible y preservan nuestra libertad de acción.</p>
                    </div>
               </div>
               </section>
               <section id="nuestros-programas">
                  <div className="container">
                     <h2>Adopciones de</h2>
                     <div className="progrmas">
                         <div className="carta">
                            <h3>Perros</h3>
                            <p>Pasar tiempo con tu mascota puede resultar muy terapéutico, 
                            especialmente si estás atravesando un momento emocionalmente difícil.</p>
                            <button>+info</button>
                         </div>
                         <div className="carta">
                             <h3>Gatos</h3>
                             <p>Al adoptar, no solo iluminas la vida de un animal, además ayudas a liberar espacio en un albergue, 
                             lo que permite rescatar a más animales abandonados a su suerte.</p>
                             <button>+info</button>
                          </div>
                          <div className="carta">
                             <h3>Otros</h3>
                             <p>En la mayoría de los casos, adoptar significa darle una
                             segunda oportunidad a un animal que ha sufrido un proceso de abandono, 
                             y en ocasiones maltrato.</p>
                             <button>+info</button>
                          </div>    
                      </div>
                   </div>
             </section>
          </main>
         <section id="caracteristica">
             <div class="container">
                    <ul>
                    <li>✅Vacunas</li>
                    <li>✅Chequeos</li>
                    <li>✅Atencion veterinaria</li>
                    <li>✅Esterilización de machos y hembras</li>
                    </ul>
             </div>
         </section>
         <footer className="footer">
               <p>Aplicaciones Web 1</p>
               <p>Designed with by <a href="#">Estudiantes de 5to A</a></p>
          </footer>
      </div>   
    )
} 

export default Acerca