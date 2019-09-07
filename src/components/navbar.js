import React from 'react';


class Navbar extends React.Component{
render(){
    return( 
        <div class = "menu">
        <img src= "logo10.png" />
      <ul class="nav justify-content-end">
    <li class="nav-item">
      <a class="nav-link active" href="https://www.google.com/">Inicio</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="https://www.youtube.com/">Nuestra Historia</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Nuestros Productos</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Contacto</a>
    </li>
  </ul>
  
  </div>
  );
 }
} 

export default Navbar;