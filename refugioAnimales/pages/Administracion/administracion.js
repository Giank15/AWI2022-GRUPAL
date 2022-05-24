import './estilos.css'

let html = ``;

let animales = [
  {nombre: "TOBBY", raza:"JACK RUSSELL TERRIER", codigo: "C001", correo: "12345@gmail.com", usuario: "Juan Perez" },
  {nombre: "LOCKI", raza:"MIXTA", codigo: "C002", correo: "giancarloqueirolo@gmail.com", usuario: "Giancarlo Queirolo" },
  {nombre: "COQUI", raza:"CANICHE O POODLE TOY", codigo: "C007", correo: "giusepycalle@gmail.com", usuario: "Giusepy Calle" },
  {nombre: "PIPO", raza:"MIXTA", codigo: "C008", correo: "nicolevargas@gmail.com", usuario: "Nicole Vargas" },
  {nombre: "RAYO", raza:"BLACK MOUTH CUR", codigo: "C010", correo: "54321@gmail.com", usuario: "John Cevallos" }
]
let botones1 = document.querySelectorAll('.peticiones');
botones1.forEach(boton => {
  boton.addEventListener('click', ()=>{
    //html+=`href="../index.html"`;
    html+= `<table border=1 class="tabla1">`;
    html+=`<tr>`;
    html+=`<th>Codigo</th>`;
    html+=`<th>Nombre</th>`;
    html+=`<th>Raza</th>`;
    html+=`<th>Correo</th>`;
    html+=`<th>Usuario</th>`;
    html+=`<th>Aceptar</th>`;
    html+=`<th>Rechazar</th>`;
    html+=`</tr>`;

    for(let elemento of animales){
        html+=`<tr>`
        html+=`<td><button class='consultai' id=${elemento.codigo}>${elemento.codigo}</button></td>`;
        html+=`<td>${elemento.nombre}</td>`;
        html+=`<td>${elemento.raza}</td>`;
        html+=`<td>${elemento.correo}</td>`;
        html+=`<td>${elemento.usuario}</td>`;
        html+=`<td><button class='aceptar'>Aceptar</button></td>`;
        html+=`<td><button class='rechazar'>Rechazar</button></td>`;
        html+=`</tr>`;
    }
    html+= `</table>`;

    html+=`<form>`;
    html+=`<label for="codigo">Codigo</label>`;
    html+=`<input type="text" id="codigo"><br>`;
    html+=`<label for="nombre">Nombre</label>`;
    html+=`<input type="text" id="nombre"><br>`;
    html+=`<label for="raza">Raza</label>`;
    html+=`<input type="text" id="raza"><br>`;
    html+=`<label for="correo">Correo</label>`;
    html+=`<input type="text" id="correo"><br>`;
    html+=`<label for="usuario">Usuario</label>`;
    html+=`<input type="text" id="usuario"><br>`;
    html+=`</form>`;
    contenido.innerHTML = html;

    let botona = document.querySelectorAll('.aceptar');
    botona.forEach(boton1 => {
      boton1.addEventListener('click', ()=>{
        alert(`Solicitud aceptada...`);
      })  
    })
    let botonr = document.querySelectorAll('.rechazar');
    botonr.forEach(boton1 => {
      boton1.addEventListener('click', ()=>{
        alert(`Solicitud rechazada...`);
      })  
    })
    let botonesCon = document.querySelectorAll('.consultai');
    botonesCon.forEach(boton2 => {
      boton2.addEventListener('click', ()=>{
        let animal = animales.find((elemento)=>{
          return elemento.codigo==boton2.id
        })
        codigo.value = animal.codigo;
        nombre.value = animal.nombre;
        raza.value = animal.raza;
        correo.value = animal.correo;
        usuario.value = animal.usuario;
      })  
    })
  })  
})

let botones2 = document.querySelectorAll('.regresar');
botones2.forEach(boton => {
  boton.addEventListener('click', ()=>{
    window.location.href = "../../index.html";
  })  
})