import React, {Component} from 'react';

import ItemProd from './itemProd'

class Galeria extends Component{

    render(){ 

      return (
        <div>
          <div>
            <a id="linkProductos"></a>
          </div>
          <div id="productos" class = "container-fluid">       
            <h1 id="tituloPastas">Nuestras Pastas</h1>
            <br /><br />
              <div class = "container-fluid">
                <ItemProd />
              </div>
            </div>
        </div>

      );
        }
}

export default Galeria;