import React from 'react';
import { height, width } from '@material-ui/system';

const constStyle = {
    border: '5px solid white',
    //width: '50%',
    //height: '35%'
  };

 

class Galeria extends React.Component {

    render() {
      return (
         
        <div class = "galeria">
           <h1 id="tituloPastas">Nuestras Pastas</h1>
           <br /><br />
        <div class = "container">
            <div class = "row">
                <div class = "col-lg-3 col-md-4 col-sm-4 col-xs-6">
                <img class="d-block w-100" src="https://www.intentarlavida.site/images/fotos/recetas/sorrentinos.jpg" alt="First slide" style={constStyle}/> 
                <div class="card-body">
                    <p class="card-text">Sorrentinos.</p>
                </div>
                <br />
                <img class="d-block w-100" src="https://olivereats.ca/wp-content/uploads/2018/12/Fresh-pasta_041218_36-750x500.jpg" alt="First slide" style={constStyle}/>
                <div class="card-body">
                    <p class="card-text">Tagliatelli.</p>
                </div>
                </div>
                <div class = "col-lg-3 col-md-4 col-sm-4 col-xs-6">
                <img class="d-block w-100" src="https://mejorrecetas.info/wp-content/uploads/2019/07/18767e2208f85638186154816d971526-750x500.jpg" alt="First slide" style={constStyle}/>
                <div class="card-body">
                    <p class="card-text">Lasagna.</p>
                </div>
                <br />
                <img class="d-block w-100" src="https://ilreporter.it/wp-content/uploads/2019/02/pasta_fatta_in_casa-1.jpg" alt="First slide" style={constStyle}/> 
                <div class="card-body">
                    <p class="card-text">Ravioles.</p>
                </div>
                </div>
                <div class = "col-lg-3 col-md-4 col-sm-4 col-xs-6">
                <img class="d-block w-100" src="https://s3-us-west-2.amazonaws.com/laprensa-bucket/wp-content/uploads/2016/02/05112619/RECETA-4.jpg" alt="First slide" style={constStyle}/> 
                <div class="card-body">
                    <p class="card-text">Canelones.</p>
                </div>
                <br />
                <img class="d-block w-100" src="https://www.soniaperonaci.it/wp-content/uploads/2017/12/Pasta-fresca-kenwood_142-750x500.jpg" alt="First slide" style={constStyle}/>
                <div class="card-body">
                    <p class="card-text">Cappeleti.</p>
                </div>
                </div>
                <div class = "col-lg-3 col-md-4 col-sm-4 col-xs-6">
                <img class="d-block w-100" src="http://www.nomecomesnada.es/wp-content/gallery/noquis-caseros/%C3%B1oquis-7-web.jpg" alt="First slide" style={constStyle}/> 
                <div class="card-body">
                    <p class="card-text">Ñoquis.</p>
                </div>
                <br />
                <img class="d-block w-100" src="https://gdegastronomia.es/wp-content/uploads/2014/08/4nxkhlcrklo-jorge-zapata-750x500.jpg" alt="First slide" style={constStyle}/>
                <div class="card-body">
                    <p class="card-text">Spaghetti.</p>
                </div>
                </div>


            </div>
        </div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
      );
    }
}

export default Galeria;