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
html+=`<h2>Informacion del Refugio</h2>`;
html+=`<hr>`;
html+=`</div>`;
html+=`<div class="informacion-refugio">`;
html+=`<section>`;
html+=`<h1>Nombre del Proyecto: GiGi Animal Shelter</h1>`;
html+=`<h2>Tematica: Regugio de rescate y adopción de animalitos</h2>`;
html+=`</section>`;

html+=`<section>`;
html+=`<p>
El tema de nuestro proyecto consiste en un aplicativo web de un refugio de animales en la que las personas podrán donar para aquellos animales que se encuentran
en un mal estado y necesitan para su tratamiento. Además tendrán la opción de poder adoptar a los animales desde el aplicativo.`;
html+=`</p>`;
html+=`</section>`;
  
html+=`<section>`;
html+=`<h2>Contenido multimedia de nuestro refugio GiGi</h2>`;
html+=`<figure>`;
html+=`<img src="../../images/ref1.jpg" alt="refugio de perrito" width="350px" height="200px">`;
html+=`<img src="../../images/red2.jpg" alt="refugio de perrito" width="350px" height="200px">`;
html+=`<img src="../../images/ref3.jpg" alt="refugio de perrito" width="350px" height="200px">`;
html+=`</figure>`;
html+=`</section>`;

html+=`<section>`;
html+=`<p>Caracteristicas del proyecto a continuación</p>`;
html+=`<table border=1 class="tablai">`;
html+=`<tr>`;
html+=`<td>Característica</td>`;
html+=`<td>Recursos</td>`;
html+=`<td>Tiempo</td>`;
html+=`</tr>`;
html+=`<tr>`;
html+=`<td>pppp</td>`;
html+=`<td>jjjj</td>`;
html+=`<td>hhh</td>`;
html+=`</tr>`;
html+=`</table>`;
html+=`</section>`;

html+=`</div>`;
html+=`</section>`;
html+=`</main>`;

html+=`<footer class="footer">`;
html+=`<p>Aplicaciones Web 1</p>`;
html+=`<p>Designed with by <a href="#">Estudiantes de 5to A</a></p>`;
html+=`</footer>`;

app.innerHTML = html;