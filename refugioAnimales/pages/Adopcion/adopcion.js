import './estilos.css'

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
    {url: "Acceso/accesoUsuario.html", descripcion:"Acceder" },
    {url: "Registro/registroUsuario.html", descripcion:"Registrase" },
    {url: "Informacion/infoProyecto.html", descripcion:"Informacion" },
    {url: "Acerca/acerca.html", descripcion:"Acerca de" }
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
html+=`<h2>Perfil del Refugio</h2>`;
html+=`<hr>`;
html+=`</div>`;
html+=`<div class="grid-refugio">`;
let animales = [
    {nombre: "TOBBY", raza:"JACK RUSSELL TERRIER", codigo: "C001", imagen: "../../images/adop1.jpg" },
    {nombre: "LOCKI", raza:"MIXTA", codigo: "C002", imagen: "../../images/adop2.jpg"},
    {nombre: "PANCHO", raza:"BLACK MOUTH CUR", codigo: "C003", imagen: "../../images/adop3.jpg" },
    {nombre: "LOLO", raza:"LABRADOR RETRIEVER", codigo: "C004", imagen: "../../images/adop4.jpg" },
    {nombre: "LUKAS", raza:"WEST HIGHLAND", codigo: "C005", imagen: "../../images/adop5.jpg" },
    {nombre: "REIKO", raza:"SPANIEL BRETÓN", codigo: "C006", imagen: "../../images/adop6.jpeg" },
    {nombre: "COQUI", raza:"CANICHE O POODLE TOY", codigo: "C007", imagen: "../../images/adop7.jpg" },
    {nombre: "PIPO", raza:"MIXTA", codigo: "C008", imagen: "../../images/adop8.jpg" },
    {nombre: "CORTIS", raza:"MIXTA", codigo: "C009", imagen: "../../images/adop9.jfif" },
    {nombre: "RAYO", raza:"BLACK MOUTH CUR", codigo: "C010", imagen: "../../images/adop10.jfif" }
]
for (let elemento of animales)
{
    html+=`<div class="sub-grid">`;
    html+=`<p class="descripcion"> <b>Nombre:</b> ${elemento.nombre}</p>`;
    html+=`<p class="descripcion"> <b>Raza:</b> ${elemento.raza} </p>`;
    html+=`<p class="descripcion"> <b>Código:</b> ${elemento.codigo}</p>`;
    html+=`<img src=${elemento.imagen} alt="">`;
    html+=`<button class="send-button"><a href="https://www.dkidscayambe.com/wp-content/uploads/2018/07/CF7-ADOPCION.pdf" class="adoptar-palabra">Adoptar</a></button>`;
    html+=`</div>`;
}
html+=`</div>`;
html+=`</section>`;
html+=`</main>`;

html+=`<footer class="footer">`;
html+=`<p>Aplicaciones Web 1</p>`;
html+=`<p>Designed with by <a href="#">Estudiantes de 5to A</a></p>`;
html+=`</footer>`;

app.innerHTML = html;