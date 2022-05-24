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

html+=`<section class="seccion-formulario">`;
html+=`<div class="contenedor-formulario">`;
html+=`<form method="post">`;
html+=`<h2>Datos de usuario</h2><br>`;
html+=`<label for="nombres">Nombres</label><br>`;
html+=`<input type="text" name="nombres" id="nombres" value="Giancarlo Stephano"><br>`;
html+=`<label for="apellidos">Apellidos</label><br>`;
html+=`<input type="text" name="apellidos" id="apellidos" value="Queirolo Rodriguez"><br>`;
html+=`<label for="correo">Correo electronico</label><br>`;
html+=`<input type="email" name="correo" id="correo" value="12345@gmail.com"><br>`;
html+=`<label for="fechanacimiento">Fecha de nacimiento</label><br>`;
html+=`<input type="date" name="fechanacimiento" id="fechanacimiento" value="15-5-2000"><br>`;
html+=`</form>`;
html+=`<button class="guardar">Editar</button>`;
html+=`<button class="regresar">Atras</button>`;
html+=`</div>`;
html+=`</section>`;

html+=`<footer class="footer">`;
html+=`<p>Aplicaciones Web 1</p>`;
html+=`<p>Designed with by <a href="#">Estudiantes de 5to A</a></p>`;
html+=`</footer>`;

app.innerHTML = html;

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