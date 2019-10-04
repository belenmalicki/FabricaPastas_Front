import React from 'react';
import  MapBasics from './map.js';


class Contacto extends React.Component{
  
  render(){
    return(
      <div>
    <h1 id="tituloPastas">Contacto</h1>
    <br />
    <div class = "container">
      <div class = "row" >
        <div class = "col-lg-6 col-md-6 col-sm-12 col-xs-12" >
         <div>
           <h2 class="contactos">- Contactanos -</h2>
           <br /><br />
           <div class="container" >
           <div class = "row" id="fondo_blanco">
           <h3 class= "letra_cont"> 
           <br/> <br/>  Llamanos al 
           <br/> 0223 472-0966 <br/>
            <br/>O mandanos un mail a: 
            <br/> algo@hotmail.com <br/><br/> <br/>   
           </h3>
           </div>

           </div>
           </div>
           </div>
        <div class = "col-lg-6 col-md-6 col-sm-12 col-xs-12" >
          <div>
          <h2  class="contactos">- Visitanos -</h2>
          <br /><br />
           <div class="container">
           <div class = "row" id="fondo_blanco" >
           <h3  class= "letra_cont"> 
            <br/>  Güemes 3331  - Mar del Plata 
            <br/>  Lunes a sabados de 8hs a 13:15hs y de 17hs a 21.30hs <br/> 
           Domingos de 8hs a 13:15hs<br/><br/>
           Rivadavia 4035  - Mar del Plata <br/>  
           Lunes a sabados de 8hs a 13:15hs y de 17hs a 21.30hs <br/> 
           Domingos de 8hs a 13:15hs <br/>   <br/>  
           </h3>
           </div>

           </div>
           </div>
          </div>
       
         </div>
        </div>
<br /><br />
 PROTZIMAMENTE
    <MapBasics />

        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </div>
      );}}
    export default Contacto;