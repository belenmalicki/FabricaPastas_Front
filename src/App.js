import React from 'react';
//import logo from './logo.svg';
import './App.css';

import Carousel from './components/carousel.js';
import FormDialog from './components/navbar.js'

import Galeria from './components/productCard.js';



/* Cosas a ver:


-IMPORTANTE: COMO CONCATENAR PAGINAS (apretar un boton y que te lleve a galeria por ejemplo) SARASA
-Opciones de negocio: Va a tener Log in? Va a aceptar pagos por pag web? Va a hacer envios a domicilio? 
-Ver mapa


Cosas que quedan para hacer (un millon):
-Darle formato a "Nuestra Historia" (que quede menos feo)
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

  
    <div class = "container">
      <div class = "row" >
        <div class = "col-lg-4 col-md-4 col-sm-4 col-xs-6" ></div>
        <div class = "col-lg-4 col-md-4 col-sm-4 col-xs-6" id="algo">
          <div class="historia">
          <br /><br /><br /><br /> <br /><br /><br /><br /><br />  <br /><br /><br />
           <h1>Nuestra historia</h1>
            <p>
          
           <h2>FACU HELP TENGO 0 IMAGINACION</h2>
               Fundado en 1962 por Cosme y Fulanito.
               Nos dedicamos a hacer las mejores pastas de Mar del Plata.
               Estamos durante todo el verano y el invierno para brindarles a nuestros 
               turistas y vecinos de la ciudad la mejor atención y sobre todo, la mejor calidad.
             </p>
             <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
           </div>
          </div>
         </div>
        </div>
        
<Galeria />

     </div>

  );
} 
export default App;
