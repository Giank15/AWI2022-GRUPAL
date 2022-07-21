import { useEffect } from 'react';
import './styles/adopcion.css'
//Importar imagenes
import logo from './images/logoperrito.png'
import imagen1 from './images/adop1.jpg'
import imagen2 from './images/adop2.jpg'
import imagen3 from './images/adop3.jpg'
import imagen4 from './images/adop4.jpg'
import imagen5 from './images/adop5.jpg'
import imagen6 from './images/adop6.jpeg'
import imagen7 from './images/adop7.jpg'
import imagen8 from './images/adop8.jpg'
import imagen9 from './images/adop9.jfif'
import imagen10 from './images/adop10.jfif'


function Adopcion (){

    useEffect(()=> {
        let html1 = ''
        let animales = [
            {nombre: "TOBBY", raza:"JACK RUSSELL TERRIER", codigo: "C001", imagen: imagen1 },
            {nombre: "LOCKI", raza:"MIXTA", codigo: "C002", imagen: imagen2},
            {nombre: "PANCHO", raza:"BLACK MOUTH CUR", codigo: "C003", imagen: imagen3 },
            {nombre: "LOLO", raza:"LABRADOR RETRIEVER", codigo: "C004", imagen: imagen4 },
            {nombre: "LUKAS", raza:"WEST HIGHLAND", codigo: "C005", imagen: imagen5 },
            {nombre: "REIKO", raza:"SPANIEL BRETÓN", codigo: "C006", imagen: imagen6 },
            {nombre: "COQUI", raza:"CANICHE O POODLE TOY", codigo: "C007", imagen: imagen7 },
            {nombre: "PIPO", raza:"MIXTA", codigo: "C008", imagen: imagen8 },
            {nombre: "CORTIS", raza:"MIXTA", codigo: "C009", imagen: imagen9 },
            {nombre: "RAYO", raza:"BLACK MOUTH CUR", codigo: "C010", imagen: imagen10 }
        ]
        for (let elemento of animales)
        {
            html1+=`<div class="sub-grid">`
            html1+=`<p class="descripcion"> <b>Nombre:</b> ${elemento.nombre}</p>`
            html1+=`<p class="descripcion"> <b>Raza:</b> ${elemento.raza} </p>`
            html1+=`<p class="descripcion"> <b>Código:</b> ${elemento.codigo}</p>`
            html1+=`<img src={${elemento.imagen}} alt=""> </img>`
            html1+=`<button class="send-button"><a href="https://www.dkidscayambe.com/wp-content/uploads/2018/07/CF7-ADOPCION.pdf" class="adoptar-palabra">Adoptar</a></button>`
            html1+=`</div>`
        }
        grid_refugio.innerHTML=html1;

        let html = ''
        let paginas = [
          {url: "accesoUsuario.jsx", descripcion:"Acceder" },
          {url: "Registro/registroUsuario.html", descripcion:"Registrase" },
          {url: "Informacion/infoProyecto.html", descripcion:"Informacion" },
          {url: "Adopcion/adopcion.html", descripcion:"Adopcion" },
          {url: "Acerca/acerca.html", descripcion:"Acerca de" }
        ]
    
        for (let elemento of paginas){
          html+=`<li>`;
          html+=`<a href="./${elemento.url}">${elemento.descripcion}</a>`;
          html+=`</li>`;
        }
        opMenu.innerHTML = html;
    });

    return(
        <div className='adopcion'>
            <header class="header">

                <div class="logo">
                    <div class="imagen-logo">
                        <img src={logo} alt="">
                        </img>
                    </div>
                    <div class="contenedor-letras-logo">
                        <h1>Gigi Animal Shelter</h1>
                        <p>Rescate y adopción de animalitos</p>
                    </div>
                    <i class="list material-icons bar-active" onclick="barActive()">list</i>
                </div>

                <nav class="nadvar" id="nadvar">
                    <ul id='opMenu'>
                    </ul>
                </nav>
            </header>

            <main class="main container">
                <section class="seccion-refugio">
                    <div class="perfil-refugio">
                        <h2>Perfil del Refugio</h2>
                        <hr>
                        </hr>
                    </div>
                    <div className="grid-refugio" id='grid_refugio'>
                    </div>
                </section>
            </main>
            <footer class="footer">
                <p>Aplicaciones Web 1</p>
                <p>Designed with by <a href="#">Estudiantes de 5to A</a></p>
            </footer>

            
        </div>
    )
}

export default Adopcion