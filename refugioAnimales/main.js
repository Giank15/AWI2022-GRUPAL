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
let paginas = [`Informacion/infoProyecto.html`,`Acerca/acerca.html`,`Registro/registroUsuario.html` ]
let paginasj = [
    {url: "informacion/infoProyecto.html", descripcion:"InformaciOn del Proyecto" },
    {url: "informacion/infoProyecto.html", descripcion:"InformaciOn del Proyecto" },
    {url: "informacion/infoProyecto.html", descripcion:"InformaciOn del Proyecto" },
]

for (let elemento of paginasj)
{
    console.log(elemento.url)
    console.log(elemento.descripcion)
}

for (let i=0; i<paginas.length;i++)
{
    html+=`<li>`;
    html+=`<a href="./pages/${paginas[i]}">${i}</a>`;
    html+=`</li>`;
}
html+=`</ul>`;
html+=`</nav>`;


app.innerHTML = html;