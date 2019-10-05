import React from 'react';


class Story extends React.Component{
  render(){
    return(
      <div id="nuestraHistoria">
       <h1 id="tituloPastas">Nuestra historia</h1>
       <br/><br/>
 <div class = "container-fluid">
      <div class = "row" id='foto_hist'>
        <div class = "col-lg-4 col-md-4 col-sm-4 col-xs-6" >
          <div >
            <img  src='https://cdn.pixabay.com/photo/2018/07/23/16/10/hands-3557241_960_720.jpg' alt='historia' height={'600px'} width={'75%'}  />

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

          <div >
            <img  src='https://st4.depositphotos.com/1546597/22706/i/1600/depositphotos_227066136-stock-photo-hand-kneading-dough-making-wheat.jpg' alt='historia' height={'600px'} width={'75%'}  />
     {/*0,6235294117647059 relacion e/ 1060x1700 https://www.google.com/imgres?imgurl=https%3A%2F%2Fst4.depositphotos.com%2F1546597%2F22706%2Fi%2F1600%2Fdepositphotos_227066136-stock-photo-hand-kneading-dough-making-wheat.jpg&imgrefurl=https%3A%2F%2Fsp.depositphotos.com%2F227066136%2Fstock-photo-hand-kneading-dough-making-wheat.html&docid=g7-j-p2fiYQ1XM&tbnid=x3fVtsZ6NOfhXM%3A&vet=10ahUKEwjk9K2SqYHlAhVsL7kGHTgvBqUQMwhIKAQwBA..i&w=1060&h=1700&itg=1&safe=active&bih=850&biw=1280&q=amasar&ved=0ahUKEwjk9K2SqYHlAhVsL7kGHTgvBqUQMwhIKAQwBA&iact=mrc&uact=8*/}
          </div>

          </div>
         </div>
        </div>

        <br/><br/><br/><br/><br/><br/><br/><br/>
      </div>

    );}}
    export default Story;