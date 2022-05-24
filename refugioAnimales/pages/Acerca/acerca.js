import './estilos1.css'
import './estilos2.css'

let html = ``;

html+=`<header class="header">`;
//Log de Header
html+=`<div class="logo">`;
html+=`<div class="imagen-logo">`;
html+=`<img src="../../images/logoperrito.png" alt="">`; 
html+=`</div>`;
html+=`<div class="contenedor-letras-logo">`;
html+=`<h1>Gigi Animal Shelter</h1>`;
html+=`<p>Rescate y adopción de animalitos</p>`;
html+=`</div>`;
html+=`<i class="list material-icons bar-active" onclick="barActive()">list</i>`;
html+=`</div>`;
//Navegacion
html+=`<nav class="nadvar" id="nadvar">`;
html+=`<ul>`;
let paginas = [
    {url: "../index.html", descripcion:"Pagina Principal" },
    {url: "Informacion/infoProyecto.html", descripcion:"Informacion" }
]
for (let elemento of paginas)
{
    html+=`<li>`;
    html+=`<a href="../${elemento.url}">${elemento.descripcion}</a>`;
    html+=`</li>`;
}
html+=`</ul>`;
html+=`</nav>`;
html+=`</header>`;

html+=`<main class="main container">`;
html+=`<section class="seccion-refugio">`;
html+=`<div class="perfil-refugio">`;
html+=`<h2>Acerca de proyecto</h2>`;
html+=`<hr>`;
html+=`</div>`;
html+=`<div">`;
html+=`<section id="hero">`;
html+=`<h1><br>Giusepy Alexander Calle Santana Giancarlo <br>Stephano Queirolo Rodriguez`;
html+=`<br>Ligia Nicole Vargas Garcia</h1>`;
html+=`<button>Saber Mas</button>`;
html+=`</section>`;
html+=`<section id="Somos-proya">`;
html+=`<div class="container">`;
html+=`<div class="img container"></div>`;
html+=`<div class="texto">`;
html+=`<h2><spam class="color-acento">Conoce acerca de</spam></h2>`;
html+=`<p> Nuestra organización protectora de animales especializada,en la ayuda a perros y gatos maltratados y/o abandonados.
Una organización totalmente independiente que no recibe subvenciones de organismos oficiales, 
empresas ni partidos políticos.Las cuotas de nuestros socios y las donaciones de nuestros simpatizantes 
permiten que nuestra labor sea sostenible y preservan nuestra libertad de acción.</p>`;
html+=`</div>`;
html+=`</div>`;
     
html+=`</section>`;
html+=`<section id="nuestros-programas">`;
html+=`<div class="container">`;
html+=`<h2>Adopciones de</h2>`;
html+=`<div class="progrmas">`;
html+=`<div class="carta">`;
html+=`<h3>Perrros</h3>`;
html+=`<p>Pasar tiempo con tu mascota puede resultar muy terapéutico, 
especialmente si estás atravesando un momento emocionalmente difícil.</p>`;
html+=`<button>+info</button>`;
html+=`</div>`;
html+=`<div class="carta">`;
html+=`<h3>Gatos</h3>`;
html+=`<p>Al adoptar, no solo iluminas la vida de un animal, además ayudas a liberar espacio en un albergue, 
lo que permite rescatar a más animales abandonados a su suerte. 6.</p>`;
html+=`<button>+info</button>`;
html+=`</div>`;
html+=`<div class="carta">`;
html+=`<h3>Otros</h3>`;
html+=`<p>En la mayoría de los casos, adoptar significa darle una
segunda oportunidad a un animal que ha sufrido un proceso de abandono, 
y en ocasiones maltrato.</p>`;
html+=`<button>+info</button>`;
html+=`</div>`;
html+=`</div>`;
html+=`</div>`;
html+=`</section>`;

html+=`<section id="caracteristica">`;
html+=`<div class="container">`;
html+=`<ul>`;
html+=`<li>✅Vacunas</li>`;
html+=`<li>✅Chequeos</li>`;
html+=`<li>✅Atencion veterinaria</li>`;
html+=`<li>✅Esterilización de machos y hembras</li>`;
html+=`</ul>`;
html+=`</div>`;
html+=`</section>`;

html+=`</div>`;
html+=`</section>`;
html+=`</main>`;

html+=`<footer class="footer">`;
html+=`<p>Aplicaciones Web 1</p>`;
html+=`<p>Designed with by <a href="#">Estudiantes de 5to A</a></p>`;
html+=`</footer>`;

app.innerHTML = html;