import React from 'react';
import './App.css';

import Carousel from './components/carousel.js';
import TopBar from './components/topBar.js'
import Story from './components/story.js';
import Galeria from './components/prodList.js';
import Contacto from './components/contactos.js';
import Footer from './components/footer.js';




/* Cosas a ver:



Cosas par afacu:
-cuando te registras o ingresas te cambia el boton ingresar y te agrega el boton de perfil
-validar los campos de ingreso 
https://deepstream.io/tutorials/example-apps/realtime-cart/
 



-volar los br pero centrar: nuestras historia, contactos
- agregar espacion en Nuestros productos sin usar br
-los mapas de contactos no quedan centrados y agregan mucho espacio al final
-como se pueden redondear las puntas del cuadro del login y registrarse



Cosas que quedan para hacer (un millon):
-  carrito  y pag web del dueño

esto para el carrito
https://www.pastasamelia.com/pastas

QUE ME BORRE EL CARRITO CUANDO CONFIRMO PEDIDO PERREQUE MALECKE

*/




function App() {
  return (
  
    <div>
      <header>
        <TopBar />
      </header>
      <Carousel />
      <Story />       
      <Galeria />
      <Contacto />
      <Footer />
    </div>

  );
} 
export default App;
