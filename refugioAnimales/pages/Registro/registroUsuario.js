import './estilos.css'

let html = ``;

let botones2 = document.querySelectorAll('.regresar');
botones2.forEach(boton => {
  boton.addEventListener('click', ()=>{
    //html+=`href="../index.html"`;
    window.location.href = "../../index.html";
  })  
})

let botones = document.querySelectorAll('.guardar');
botones.forEach(boton => {
  boton.addEventListener('click', ()=>{
    //html+=`href="../index.html"`;
    //window.location.href = "../../index.html";
    alert(`Guardando...`);
  })  
})

app2.innerHTML = html;