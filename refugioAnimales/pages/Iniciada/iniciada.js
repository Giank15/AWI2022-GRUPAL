import './style.css'

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
    {url: "Perfil/perfil.html", descripcion:"Mi Perfil" },
    {url: "Informacion/infoProyecto.html", descripcion:"Informacion" },
    {url: "Adopcion/adopcion.html", descripcion:"Adopcion" },
    {url: "Acerca/acerca.html", descripcion:"Acerca de" },
    {url: "../index.html", descripcion:"Cerrar Sesion" }
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
html+=`<div class="parrafo-principal">`;
html+=`<p>El tema de nuestro proyecto consiste en un aplicativo web de un refugio de animales en la que las personas podrán donar para aquellos animales que se encuentran en un mal estado y necesitan para su tratamiento. Además tendrán la opción de poder adoptar a los animales desde el aplicativo.</p>`;
html+=`</div>`;
html+=`<div class="Contenido-multimedia">`;
html+=`<h2>Contenido multimedia de nuestro refugio GiGi</h2>`;
html+=`<div class="carrucel-imagenes">`;
html+=`<div class="contenedor-magenes-carrucel"><img src="../../images/ref1.jpg" alt=""></div>`;
html+=`<div class="contenedor-magenes-carrucel"><img src="../../images/red2.jpg" alt=""></div>`;
html+=`<div class="contenedor-magenes-carrucel"><img src="../../images/ref3.jpg" alt=""></div>`;
html+=`<div class="contenedor-magenes-carrucel"><img src="../../images/ref4.jpg" alt=""></div>`;
html+=`<div class="contenedor-magenes-carrucel"><img src="../../images/ref5.jpg" alt=""></div>`;
html+=`<div class="contenedor-magenes-carrucel"><img src="../../images/ref6.jpg" alt=""></div>`;
html+=`</div>`;
html+=`</div>`;
html+=`<section class="seccion-refugio">`;
html+=`<div class="perfil-refugio">`;
html+=`<h2>Perfil del Refugio</h2>`;
html+=`<hr>`;
html+=`</div>`;
html+=`<div class="grid-refugio">`;
html+=`<div class="sub-grid">`;
html+=`<h2>Misión</h2>`;
html+=`<div class="sub-parrafo"><p>Promovemos la protección y el bienestar de los animales mediante acciones directas y la concienciación de la comunidad en el respeto que merecen y se debe tener hacia las demás especies.</p>  </div>`;
html+=`</div>`;
html+=`<div class="sub-grid">`;
html+=`<h2>Visión</h2>`;
html+=`<div class="sub-parrafo"><p>Ser una organización autosustentable, reconocida como referente nacional en bienestar animal, responsable del cambio en la relación humano - animal en el Ecuador.</p>  </div>`;
html+=`</div>`;
html+=`<div class="sub-grid">`;
html+=`<img src="../../images/ref4.jpg" alt="">`;
html+=`</div>`;
html+=`<div class="sub-grid">`;
html+=`<img src="../../images/ref6.jpg" alt="">`;
html+=`</div>`;
html+=`</div>`;
html+=`</section>`;
html+=`</main>`;

html+=`<section class="seccion-formulario">`;
html+=`<div class="contenedor-formulario">`;
html+=`<form method="post">`;
html+=`<label for="nombre">Nombre</label><br>`;
html+=`<input type="text" name="nombre" id="nombre"><br><br>`;
html+=`<label for="correo">Correo</label><br>`;
html+=`<input type="email" name="correo" id="correo"><br><br>`;
html+=`<label for="mensaje">Mensaje</label><br>`;
html+=`<textarea name="mensaje" id="mensaje" cols="30" rows="10"></textarea>`;
html+=`</form>`;
html+=`</div>`;
html+=`</section>`;

html+=`<footer class="footer">`;
html+=`<p>Aplicaciones Web 1</p>`;
html+=`<p>Designed with by <a href="#">Estudiantes de 5to A</a></p>`;
html+=`</footer>`;

app.innerHTML = html;