import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Carousel from './components/carousel.js';
import Navbar from './components/navbar.js'


function App() {
  return (
    <div>
 <Navbar />

  <Carousel />
  <br /><br /><br />
    
    <div class = "container">
      <div class = "row">
        <div class = "col-lg-4 col-md-4 col-sm-4 col-xs-6"></div>
        <div class = "col-lg-4 col-md-4 col-sm-4 col-xs-6">
          <div class="hist">
           <h1>Nuestra historia</h1>
            <p>
            <br />
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

     </div>

  );
} 
export default App;
