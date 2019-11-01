import React from 'react';
import {BrowserRouter as Router,Route,
 Redirect, Switch} from 'react-router-dom';
import App from './App.js';
import Tutorials from './tutorials.js';

export default function Routes(){
    return (
    <Router>
      <div>
        <Switch>
           <Route path="/" component = {App} />
        </Switch>
      </div>
    </Router>
    )
}