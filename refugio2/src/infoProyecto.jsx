import { useEffect } from 'react';
import './styles/info.css'

function Info(){

    /*useEffect(()=> {
        let html = ''
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
        opMenu.innerHTML = html;
        
    });*/


    return (
        <div className='infoProyecto'>
            <header className="header">
                <div className="logo">
                    <div className="imagen-logo">
                        <img src="../../images/logoperrito.png" alt=""> </img>
                    </div>  
                    <div className="contenedor-letras-logo">
                            <><h1>Gigi Animal Shelter</h1><p>Rescate y adopción de animalitos</p></>
                    </div>
                    <i className="list material-icons bar-active" onclick="barActive()">list</i>
                </div>
            
                <nav class="nadvar" id="nadvar">
                    <ul id='opMenu'>
                        
                    </ul>
                </nav>
            </header>

            <main class="main container">
                <section class="seccion-refugio">
                    <div class="perfil-refugio">
                        <h2>Información del Refugio</h2>
                        
                    </div>
                    <div class="informacion-refugio">
                        <section>
                            <h1>Nombre del Proyecto: GiGi Animal Shelter</h1>
                            <h2>Temática: Refugio de rescate y adopción de animalitos</h2>
                        </section>
                    
                        <section>
                            <p>
                            El tema de nuestro proyecto consiste en un aplicativo web de un refugio de animales en la que las personas podrán donar para aquellos animales que se encuentran
                            en un mal estado y necesitan ayuda para su tratamiento. Además tendrán la opción de poder adoptar a los animales desde el aplicativo.
                            </p>
                        </section>
                    
                        <section>
                            <h2>Contenido multimedia de nuestro refugio GiGi</h2>
                            <figure>
                                <img src="../../images/ref1.jpg" alt="refugio de perrito" width="350px" height="200px"></img>
                                <img src="../../images/red2.jpg" alt="refugio de perrito" width="350px" height="200px"></img>
                                <img src="../../images/ref3.jpg" alt="refugio de perrito" width="350px" height="200px"></img>
                            </figure>
                        </section>

                        <section>
                            <p>Características del proyecto a continuación:</p>
                            <table border={1} class="tablai">
                                <tr>
                                    <td>Característica</td>
                                    <td>Recursos</td>
                                    <td>Tiempo</td>
                                </tr>
                                <tr>
                                    <td>pppp</td>
                                    <td>jjjj</td>
                                    <td>hhh</td>
                                </tr>
                            </table>
                        </section>

                    </div>
                </section>
            </main>

            <footer class="footer">
                <p>Aplicaciones Web 1</p>
                <p>Designed with by <a href="#">Estudiantes de 5to A</a></p>
            </footer>
            
            
        </div>

        
    )
}

export default Info