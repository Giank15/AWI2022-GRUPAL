import './estilos.css'

let html = ``;

let comidas = [
    {codigo:"c1", descripcion:"Chaulafan", tipo:"Plato fuerte"},
    {codigo:"c2", descripcion:"Pizza", tipo:"Entrada"},
    {codigo:"c3", descripcion:"Encebollado", tipo:"Desayuno"},
    {codigo:"c4", descripcion:"Bolon", tipo:"Desayuno"}
]

let botones1 = document.querySelectorAll('.peticiones');
botones1.forEach(boton => {
  boton.addEventListener('click', ()=>{
    //html+=`href="../index.html"`;
    html+= `<table border=1>`;
    html+=`<tr>`;
    html+=`<th>Codigo</th>`;
    html+=`<th>Mascota</th>`;
    html+=`<th>Tipo</th>`;
    html+=`<th>Descripcion</th>`;
    html+=`<th>Aceptar</th>`;
    html+=`<th>Rechazar</th>`;
    html+=`</tr>`;

    for(let elemento of comidas){
        html+=`<tr>`
        html+=`<td><button class='consultai' id=${elemento.codigo}>${elemento.codigo}</button></td>`;
        html+=`<td>${elemento.descripcion}</td>`;
        html+=`<td>${elemento.tipo}</td>`;
        html+=`<td><button class='aceptar'>Aceptar</button></td>`;
        html+=`<td><button class='rechazar'>Rechazar</button></td>`;
        html+=`</tr>`;
    }
    html+= `</table>`;

    html+=`<form>`;
    html+=`<label for="codigo">Codigo</label>`;
    html+=`<input type="text" id="codigo">`;
    html+=`<label for="descripcion">Descripcion</label>`;
    html+=`<input type="text" id="descripcion">`;
    html+=`<label for="tipo">Tipo</label>`;
    html+=`<input type="text" id="tipo">`;
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
        let comida = comidas.find((elemento)=>{
          return elemento.codigo==boton2.id
        })
        codigo.value = comida.codigo;
        descripcion.value = comida.descripcion;
        tipo.value = comida.tipo;
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
