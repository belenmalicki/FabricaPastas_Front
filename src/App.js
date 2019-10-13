import React from 'react';
import './App.css';

import Carousel from './components/carousel.js';
import FormDialog from './components/navbar.js'
import Story from './components/history.js';
import Galeria from './components/productCard.js';
import Contacto from './components/contactos.js';


/* Cosas a ver:


-IMPORTANTE: COMO CONCATENAR PAGINAS (apretar un boton y que te lleve a galeria por ejemplo) SARASA
 
-TOMAS, SE MOVIO EL CARROUSEL

-Tamaño de boton de registrarme
-imagen lasagna no se superpone
-mapa contactos no anda
-volar los br pero centrar: nuestras historia, contactos
-Bajar las imagenes del carrousel sin usar <br />


-MOSTRAR FACU NUESTRA HISTORIA


Cosas que quedan para hacer (un millon):
-(tema log in): hacer log in, carrito, registrarse y pag web del dueño
esto para el carroito
https://www.pastasamelia.com/pastas

*/




function App() {
  return (
  
    <div>
      <header>
        <FormDialog />
      </header>
      <Carousel />
      <Story />       
      <Galeria />
      <Contacto />

     </div>

  );
} 
export default App;
