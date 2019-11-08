import React from 'react';
import r3 from './img/rivadavia4.png';
import g2 from './img/guemes2.png';
import ImageZoom from "react-medium-image-zoom";



class Contacto extends React.Component{
  
  render(){
    return(
      <div id="contactos">
    <h1 id="tituloPastas">Contacto</h1>
    <br />
    <div class = "container">
      <div class = "row" >
        <div class = "col-lg-6 col-md-6 col-sm-12 col-xs-12" >
         <div>
           <h2 class="contacto">- Sucursal Rivadavia -</h2>
           <br /><br />
           <div class="container" >
           <div class = "row" id="fondo_blanco">
           <h3 class= "letra_cont"> 
           <br/> 
           Rivadavia 4035  - Mar del Plata <br/>  
           Lunes a sabados de 8hs a 13:15hs y de 17hs a 21.30hs <br/> 
           Domingos de 8hs a 13:15hs
           <br/><br/>Llamanos al: 
           <br/> 0223 472-0966 <br/><br/>
           </h3>
           </div>
           <br /><br />
           <div class = "row" style={{justifyContent:'center'}}>
           <ImageZoom 
          image={{
            src: r3,
            alt:"Rivadavia 4035",
            title:"Rivadavia 4035",
            style: {  height:'450px'},
        

          }}
          zoomImage={{
            src:  r3,
            alt:"Rivadavia 4035",
            title:"Rivadavia 4035",
            className: "img--zoomed",
          }}
        />
          
           </div>

           </div>
           </div>
           </div>
        <div class = "col-lg-6 col-md-6 col-sm-12 col-xs-12" >
          <div>
          <h2  class="contacto">- Sucursal Güemes -</h2>
          <br /><br />
           <div class="container">
           <div class = "row" id="fondo_blanco" >
           <h3  class= "letra_cont"> 
            <br/>  Güemes 3331  - Mar del Plata 
            <br/>  Lunes a sabados de 8hs a 13:15hs y de 17hs a 21.30hs <br/> 
           Domingos de 8hs a 13:15hs<br/>
           <br/>Llamanos al: 
           <br/> 0223 472-0966 <br/><br/>
           </h3>
           </div>
           <br /><br />
           <div class = "row" style={{justifyContent:'center'}}>
           <ImageZoom 
          image={{
            src: g2,
            alt:"Güemes 3331",
            title:"Güemes 3331",
            style: {  height:'450px' },
        

          }}
          zoomImage={{
            src:  g2,
            alt:"Güemes 3331",
            title:"Güemes 3331",
            className: "img--zoomed",

          }}
        />
        
           </div>

           </div>
           </div>
          </div>
       
         </div>
        </div>
<br /><br />

      
      </div>
      );}}
    export default Contacto;