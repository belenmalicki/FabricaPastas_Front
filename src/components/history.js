import React from 'react';
import foto1 from './cocina-amasando-211.jpg';
import foto2 from './ravioles.jpg';

class Story extends React.Component{
  render(){
    return(
      <div id="nuestraHistoria">
       <h1 id="tituloPastas">Nuestra historia</h1>
       <br/><br/>
 <div class = "container-fluid">
      <div class = "row" id='foto_hist'>
        <div class = "col-lg-4 col-md-4 col-sm-4 col-xs-6" >
        <div class="foto1">
              <img src= {foto1} alt="foto1" title="foto1" id="foto1" height={'600px'} width={'75%'}/>
          </div>
        </div>
        <div class = "col-lg-4 col-md-4 col-sm-4 col-xs-6" id="algo">
        <br/><br/><br/><br/><br/><br/><br/><br/>
          <div class="historia">
          
            <p>
             
               Fundado en 1962 por Cosme y Fulanito.
               Nos dedicamos a hacer las mejores pastas de Mar del Plata.
               Estamos durante todo el verano y el invierno para brindarles a nuestros 
               turistas y vecinos de la ciudad la mejor atención y sobre todo, la mejor calidad.
             </p>
           </div>
          </div>
          <div class = "col-lg-4 col-md-4 col-sm-4 col-xs-6" > 

          <div class="foto2">
              <img src= {foto2} alt="foto2" title="foto2" id="foto2" height={'600px'} width={'75%'}/>
          </div>

          </div>
         </div>
        </div>

        <br/><br/><br/><br/><br/><br/><br/><br/>
      </div>

    );}}
    export default Story;