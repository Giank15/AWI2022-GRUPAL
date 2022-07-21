import { useEffect } from 'react';
import './style.css'

let html = ``;

function Adopcion (){

    

    return(
        <div className='adopcion'>
            <header class="header">

                <div class="logo">
                    <div class="imagen-logo">
                        <img src="../../images/logoperrito.png" alt="">
                        </img>
                    </div>
                    <div class="contenedor-letras-logo">
                        <h1>Gigi Animal Shelter</h1>
                        <p>Rescate y adopción de animalitos</p>
                    </div>
                    <i class="list material-icons bar-active" onclick="barActive()">list</i>
                </div>

                <nav class="nadvar" id="nadvar">
                    <ul>
                    </ul>
                </nav>
            </header>

            <main class="main container">
                <section class="seccion-refugio">
                    <div class="perfil-refugio">
                        <h2>Perfil del Refugio</h2>
                        <hr>
                        </hr>
                    </div>
                    <div className="grid-refugio" id='grid_refugio'>
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

export default Adopcion