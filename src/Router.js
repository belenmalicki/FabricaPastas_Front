import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Shoppingcart from './components/carrito';
import Login from './components/login';
import Signup from './components/signup';
import MiCuenta from './components/micuenta';


class Routes extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={App} exact />
                    <Route path="/shoppingcart" component={Shoppingcart} />
                    <Route path="/login" component={Login} />
                    <Route path="/insertContacto" component={Signup} />
                    <Route path="/micuenta" component={MiCuenta} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routes;