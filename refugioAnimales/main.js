import './style.css'

let html = ``;

html+=`<header>`;
html+=`<h1>GIGI Animal Shelter</h1>`;
html+=`<h2>Rescate y adopción de animalitos :3</h2>`;
html+=`</header>`;

html+=`<article>`;
html+=`</article>`;

html+=`<aside>`;
html+=`</aside>`;

html+=`<nav>`;
html+=`<ul>`;
let paginas = [
    {url: "Acceso/accesoUsuario.html", descripcion:"Iniciar Sesion" },
    {url: "Registro/registroUsuario.html", descripcion:"Registrase" },
    {url: "Informacion/infoProyecto.html", descripcion:"Informacion" },
    {url: "Adopcion/adopcion.html", descripcion:"Adopcion" },
    {url: "Donaciones/donaciones.html", descripcion:"Donaciones" },
    {url: "Noticias/noticias.html", descripcion:"Noticias" }
]

for (let elemento of paginas)
{
    html+=`<li>`;
    html+=`<a href="./pages/${elemento.url}">${elemento.descripcion}</a>`;
    html+=`</li>`;
}

html+=`</ul>`;
html+=`</nav>`;


app.innerHTML = html;