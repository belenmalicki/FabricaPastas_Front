import React from 'react';
import './App.css';

import Carousel from './components/carousel.js';
import FormDialog from './components/navbar.js'
import Story from './components/history.js';
import Galeria from './components/productCard.js';
import Contacto from './components/contactos.js';




/* Cosas a ver:

TOMAR DECISION:
1) hacer el login y registrarse como modals y ver si puedo cambiar el nombre para hacerlo perfil
2) hacer "Ingresar" como un dropdown. con la opcion login o perfil
3) hacer el login como otra pag aparte y que sea el perfil 


Cosas par afacu:
-cuando te registras o ingresas te cambia el boton ingresar y te agrega el boton de perfil
-validar los campos de ingreso 
https://deepstream.io/tutorials/example-apps/realtime-cart/
 



-volar los br pero centrar: nuestras historia, contactos
- agregar espacion en Nuestros productos sin usar br
-cambiar el background de Contactos cuando haces zoom

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
