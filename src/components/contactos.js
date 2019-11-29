import React from 'react';
import r3 from './img/rivadavia4.png';
import g2 from './img/guemes2.png';
import ImageZoom from "react-medium-image-zoom";


class Contacto extends React.Component{
	render(){
		return(
			<div>
				<div>
					<a id="linkContactos"></a>
				</div>
				<div id="contactos">
					<div class = "container-fluid">  
						<h1 id="tituloPastas">Contacto</h1>
					</div>
					<div class="container">
						<div class = "row" >
							<div class = "col-lg-6 col-md-6 col-sm-12 col-xs-12" >
								<div>
									<h2 class="contacto">- Sucursal Rivadavia -</h2>
									<div class="content-place" >
										<div class="title-place">
											<p class="letra_cont">Rivadavia 4035  - Mar del Plata</p> 
											<p class="letra_cont">Lunes a sabados de 8hs a 13:15hs y de 17hs a 21.30hs</p> 
											<p class="letra_cont">Domingos de 8hs a 13:15hs</p> 
											<p class="letra_cont">Llamanos al:</p> 
											<p class="letra_cont">0223 472-0966</p>
										</div>
										<div class="map-content">
											<a href='https://www.google.com.ar/maps/place/Rivadavia+4035,+B7600+Mar+del+Plata,+Buenos+Aires/@-37.9934564,-57.5637426,16.74z/data=!4m5!3m4!1s0x9584d952fcc81621:0x9af435630845bce0!8m2!3d-37.9928017!4d-57.5619202'>
												<img src={r3} alt="Rivadavia 4035" title="Rivadavia 4035" />
											</a>
										</div>
									</div>
								</div>
							</div>
							<div class = "col-lg-6 col-md-6 col-sm-12 col-xs-12" >
								<div>
									<h2 class="contacto">- Sucursal Güemes -</h2>
									<div class="content-place">
										<div class="title-place">
											<p class="letra_cont">Güemes 3331  - Mar del Plata</p> 
											<p class="letra_cont">Lunes a sabados de 8hs a 13:15hs y de 17hs a 21.30hs</p> 
											<p class="letra_cont">Domingos de 8hs a 13:15hs</p> 
											<p class="letra_cont">Llamanos al:</p> 
											<p class="letra_cont">0223 486-3184</p>
										</div>
										<div class="map-content">
											<a href='https://www.google.com.ar/maps/place/Mart%C3%ADn+Miguel+de+G%C3%BCemes+3331,+B7602DAK+Mar+del+Plata,+Buenos+Aires/@-38.019051,-57.546757,17z/data=!3m1!4b1!4m5!3m4!1s0x9584dc2fa16e0ee3:0xd7817c393727bbb8!8m2!3d-38.019051!4d-57.5445683'>
												<img src={g2} alt="Güemes 3331" title="Güemes 3331"/>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Contacto;