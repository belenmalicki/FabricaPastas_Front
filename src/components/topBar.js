import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import logo1 from './img/logo10.png';
import ScrollTo from 'react-scroll-into-view';
import pastaController from '../controller/pastaController';
import {Link, Redirect} from 'react-router-dom';
import App from '../App';


export default class TopBar extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      open: false,
      nombre: '',
      direccion:'',
      mail:'',
      password:'',
      telefono:''
    };
  }


  handleClickOpenLogOn = () => {
    this.setState({openLo: true});
  };
  
  handleClickOpenLogIn = () => {
    this.setState({openLi: true});
  };
//VER TEMA DE LOS OPEN 
  handleCloseLogOn = () => {
    this.setState({openLo: false});
    this.setState({openLi: false});
  };
  handleCloseLogIn = () =>  {
    this.setState({openLi: false});
  };
  handleClickOpenCarrito = () => {
    this.setState({openC: true});
  };
  handleCloseCarrito = () => {
    this.setState({opencr: false});
  }




  
  
  onChangeNombre (e){
    
    this.setState({nombre : e.target.value});
  }
  onChangeMail = (e)=>{
    this.setState({mail : e.target.value});
  }
  onChangeDireccion = (e)=>{
    this.setState({direccion : e.target.value});
  }
  onChangePassword = (e)=>{
    this.setState({password : e.target.value});
  }
  onChangeTelefono = (e)=>{
    this.setState({telefono : e.target.value});
  }



  
    SearchMail = (e)=>{
      this.setState({mail : e.target.value});
    }
    SearchPassword = (e)=>{
      this.setState({password : e.target.value});
    }
  
  CambiarBoton(){

    console.log('mi local storage', localStorage.getItem('Usuariologueado'))
    if(localStorage.getItem('Usuariologueado')!==null){
      return <Link to='/micuenta'>  
      <Button id="boton" >
        Mi cuenta
        </Button>
        </Link>;
    }
    else{
      return <Link to='/login'>  
      <Button id="boton" >
        Ingresar
        </Button>
        </Link>;
    }
  }
  Carrito(){
    if(localStorage.getItem('Usuariologueado')!==null){
      return <Link  to='/shoppingcart'>
      <Button id="boton" onClick={this.handleClickOpenCarrito} >
      <AddShoppingCartIcon />
      </Button>
      </Link>
    }
  }


render(){ 
  //limpio LocalStorage
  //localStorage.clear();
  return (
    <div class="fixed-top" id="appbarprod">
    <div class="container-fluid">
    <div class="row">
      <div class="logo">
        <img src= {logo1} alt = "logo" title = "logo" id="logo"/>
      </div>
      <div class="col-lg-12 col-md-4 col-sm-12 col-xs-12  "></div>
      <div class="col-lg-12 col-md-4 col-sm-12 col-xs-12  ">
        <div class="nav">
        <ScrollTo
          selector={`#${'inicio'}`}>
         <Button id="boton" >
            Inicio
          </Button>
         </ScrollTo>

         <ScrollTo
            selector={`#${'linkNuestraHistoria'}`}>
           <Button id="boton" >
               Nuestra Historia
           </Button>
        </ScrollTo>

        <ScrollTo
          selector={`#${'linkProductos'}`}>
          <Button id="boton" >
             Nuestros productos
          </Button>
        </ScrollTo>

        <ScrollTo
          selector={`#${'linkContactos'}`}>
          <Button id="boton" >
             Contacto
          </Button>
        </ScrollTo>

        {this.CambiarBoton()}

        {this.Carrito()}
          



          </div>
       
      </div>
    </div>
    </div>
    </div>
  );}
}