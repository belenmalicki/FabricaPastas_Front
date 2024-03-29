import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Shoppingcart from './components/carrito';
import Login from './components/login';
import Signup from './components/signup';
import MiCuenta from './components/micuenta';
import Exitoso from './components/exitoso';
import NotFound from './components/notFound';



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
                    <Route path="/exitoso" component={Exitoso} />
                    <Route  component={NotFound} />
                    
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routes;