import React from 'react';
import { Link } from 'react-router-dom';
import Ej from './signup';

/*export default {
    cart: [],
    add(id) { this.cart.push(id) },
    remove(id) { this.cart = this.cart.filter(p => p.id !== id)
  }}*/
 

  class Shoppingcart extends React.Component{
    render(){
        return(
            <div style ={{backgroundColor:'white', textAlign:'center'}}> 
            <h1> futuro shopping cart</h1>
            
            <Link to='/'>Volver al inicio</Link>
      
            </div>
        );
    }
    
    }
    export default Shoppingcart;