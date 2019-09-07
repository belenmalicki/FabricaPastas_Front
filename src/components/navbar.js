import React from 'react';


class Navbar extends React.Component{
render(){
    return( 
        
        <div class = "menu">
        <img src= "logo10.png" />
      <ul class="nav justify-content-end">
    <li class="nav-item">
    <button type="button" class="btn btn-outline-dark">
      <a class="nav-link active" href="https://www.google.com/">Inicio</a>
      </button>
    </li>
    <li class="nav-item">
    <button type="button" class="btn btn-outline-dark">
      <a class="nav-link" href="https://www.youtube.com/">Nuestra Historia</a>
      </button>
    </li>
    <li class="nav-item">
    <button type="button" class="btn btn-outline-dark">
      <a class="nav-link" href="#">Nuestros Productos</a>
      </button>
    </li>
    <li class="nav-item">
    <button type="button" class="btn btn-outline-dark">
      <a class="nav-link" href="#">Contacto</a>
      </button>
    </li>
  </ul>
  
  </div>
  );
 }
} 

export default Navbar;