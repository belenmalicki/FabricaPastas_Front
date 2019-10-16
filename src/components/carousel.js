import React from 'react';
import carrousel1 from './img/carrousel1.jpg';
import carrousel2 from './img/carrousel2.jpeg';
import carrousel3 from './img/carrousel3.jpg';
import carrousel4 from './img/carrousel4.jpg';


/*MOSTRAR FACU
<img class="rounded-circle w-100" src="https://images8.alphacoders.com/358/358841.jpg" alt="First slide" /> */


class Carrusel extends React.Component{
render(){
	return(
			<div id="inicio">
				<div id="carouselExampleControls" class="carousel slide carousel-home" data-ride="carousel">
					<div class="carousel-inner">
						<div class="carousel-item active">
							<img class="d-block w-100" src={carrousel1} alt="First slide" /> 
							<div class="carousel-content">
								<div class="carousel-caption d-none d-md-block">
									<h2 id="letra-carousel">Los Muchachos </h2>        
								</div>
							</div>
						</div>
						<div class="carousel-item">
							<img class="d-block w-100" src={carrousel2} alt="Second slide"/>
							<div class="carousel-content">
								<div class="carousel-caption d-none d-md-block">
									<h2 id="letra-carousel">Pastas frescas</h2>          
								</div>
							</div>
						</div>


						<div class="carousel-item">
							<img class="d-block w-100" src={carrousel3} alt="Third slide"/>
							<div class="carousel-content">
								<div class="carousel-caption d-none d-md-block">
									<h2 id="letra-carousel">Un clásico de <br/> Mar del Plata</h2>         
								</div>
							</div>
						</div>

						<div class="carousel-item">
							<img class="d-block w-100" src={carrousel4} alt="Third slide"/>
							<div class="carousel-content">
								<div class="carousel-caption d-none d-md-block">
									<h2 id="letra-carousel">Desde 1962</h2>          
								</div>
							</div>
						</div>
					</div>
					<a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
						<span class="carousel-control-prev-icon" aria-hidden="true"></span>
						<span class="sr-only">Previous</span>
					</a>
					<a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
						<span class="carousel-control-next-icon" aria-hidden="true"></span>
						<span class="sr-only">Next</span>
					</a>
				</div>
			</div>
	 );
	}
} 

export default Carrusel;