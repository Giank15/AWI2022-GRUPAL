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
html+=`</ul>`;
html+=`</nav>`;
html+=`</header>`;

html+=`<section class="seccion-formulario">`;
html+=`<div class="contenedor-formulario">`;
html+=`<form method="post">`;
html+=`<h2>Iniciar Sesion</h2><br>`;
html+=`<label for="correo">Correo electronico</label><br>`;
html+=`<input type="email" name="correo" id="correo"><br><br>`;
html+=`<label for="pass">Contraseña</label>`;
html+=`<input type="password" name="pass" id="pass"><br><br>`;
html+=`</form>`;
html+=`<button class="acceder">Acceder</button><br>`;
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