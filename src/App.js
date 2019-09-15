import React from 'react';
//import logo from './logo.svg';
import './App.css';

import Carousel from './components/carousel.js';
import FormDialog from './components/navbar.js'

import Galeria from './components/productCard.js';



/* Cosas a ver:

-Como poner el logo en la cabecera
-Una cabecera mas linda
-Un fondo mas lindo
-Como ponerle texto al carrousel y que quede bien
-Como ajustar el tamaño de la letra de las imagenes en el carrousel (no me deja desde app.css)
-IMPORTANTE: COMO CONCATENAR PAGINAS (apretar un boton y que te lleve a galeria por ejemplo)
-Opciones de negocio: Va a tener Log in? Va a aceptar pagos por pag web? Va a hacer envios a domicilio? 
-Cambiar el icono de la pag
-Ver que le pinta al mapa


Cosas que quedan para hacer (un millon):
-Darle formato a "Nuestra Historia" (que quede menos feo)
-Hacer "Nuestros productos": ver si ponemos lista de loq eu vende, un catalgo, una galeria, todo, etc
-Hacer el "Contactos"
-(tema log in): hacer log in, carrito, registrarse y pag web del dueño
esto para el carroito
https://www.pastasamelia.com/pastas

*/




function App() {
  return (
  
    <div>
 
 <FormDialog />

  <Carousel />
  <br /><br /><br />
  <br /><br /><br /><br /> <br /><br /><br /><br /><br />
    <div class = "container">
      <div class = "row">
        <div class = "col-lg-4 col-md-4 col-sm-4 col-xs-6"></div>
        <div class = "col-lg-4 col-md-4 col-sm-4 col-xs-6">
          <div class="historia">
         
           <h1>Nuestra historia</h1>
            <p>
          
           <h2>FACU HELP TENGO 0 IMAGINACION</h2>
               Fundado en 1950 por Cosme y Fulanito.
               Nos dedicamos a hacer las mejores pastas de Mar del Plata.
               Estamos durante todo el verano y el invierno para brindarles a nuestros 
               turistas y vecinos de la ciudad la mejor atención y sobre todo, la mejor calidad.
             </p>
           </div>
          </div>
         </div>
        </div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
<Galeria />

     </div>

  );
} 
export default App;
