import React, {Component} from 'react';

import ItemProd from './itemProd'

class Galeria extends Component{

    render(){ 

      return (
         <div id="productos" class = "container-fluid">       
           <h1 id="tituloPastas">Nuestras Pastas</h1>
           <br /><br />
            <div class = "container-fluid">
              <div class = "row">
                <div class = "col-lg-3 col-md-4 col-sm-4 col-xs-6" >
                <ItemProd />
                </div>
              </div>
            </div>
          </div>

      );
        }
}

export default Galeria;