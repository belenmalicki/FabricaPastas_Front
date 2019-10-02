import React from 'react';
//import logo from './logo.svg';
import './App.css';

import Carousel from './components/carousel.js';
import FormDialog from './components/navbar.js'
import Story from './components/history.js';
import Galeria from './components/productCard.js';
import Contacto from './components/contactos.js';


/* Cosas a ver:


-IMPORTANTE: COMO CONCATENAR PAGINAS (apretar un boton y que te lleve a galeria por ejemplo) SARASA
-Opciones de negocio: Va a tener Log in? Va a aceptar pagos por pag web? Va a hacer envios a domicilio? 
-Ver mapa

-Tamaño de boton de registrarme


Cosas que quedan para hacer (un millon):
-!Darle formato a "Nuestra Historia" (que quede menos feo)
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

  <Story />
   
        
<Galeria />
<Contacto />

     </div>

  );
} 
export default App;
