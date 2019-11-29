import React, {Component} from 'react';
import ItemProd from './itemProd'


class Galeria extends Component{
  render(){ 
    return (
      <div>
        <div>
          <a id="linkProductos"></a>
        </div>
        <div class = "container-fluid">       
          <h1 id="tituloPastas">Nuestras Pastas</h1>
          <div class = "container-fluid" style={{marginTop:'70px'}}>
            <ItemProd />
          </div>
        </div>
      </div>
    );
  }
}

export default Galeria;