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


export default class FormDialog extends Component {
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




  okUsuario()
  {
    alert("Te has registrado con exito");
    return  <Redirect  to="/" component = {App}  />
  }

  errorUsuario(textoError)
  {
    alert("Error: " + textoError);
  }
  usuarioMal(textoError){
    alert(textoError);
  }
  okIngresar(textoOk){
    alert(textoOk);

  }

  handleSave =(e) =>{
    let usuario = {
        nombre: this.state.nombre,
        direccion: this.state.direccion,
        mail:this.state.mail,
        password:this.state.password,
        telefono:this.state.telefono
    };
    pastaController.insertContacto(usuario,this.okUsuario.bind(this),this.errorUsuario.bind(this));
    this.setState({open: false})
  };
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



  handleSearch=(e)=>{
      let usuarioLogIn={
        mail:this.state.mail,
        password:this.state.password,
      }

    pastaController.logIn(usuarioLogIn,this.okIngresar.bind(this), this.usuarioMal.bind(this));
  }
    SearchMail = (e)=>{
      this.setState({mail : e.target.value});
    }
    SearchPassword = (e)=>{
      this.setState({password : e.target.value});
    }
  
  


render(){ 
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
            selector={`#${'nuestraHistoria'}`}>
           <Button id="boton" >
               Nuestra Historia
           </Button>
        </ScrollTo>

        <ScrollTo
          selector={`#${'productos'}`}>
          <Button id="boton" >
             Nuestros productos
          </Button>
        </ScrollTo>

        <ScrollTo
          selector={`#${'contactos'}`}>
          <Button id="boton" >
             Contacto
          </Button>
        </ScrollTo>
     
        <Link to='/login'>  
        <Button id="boton" >
          Ingresar
          </Button>
          </Link>
          <Link  to='/shoppingcart'>
          <Button id="boton" onClick={this.handleClickOpenCarrito} >
          <AddShoppingCartIcon />
          </Button>
          </Link>
          



          </div>
       
      </div>
    </div>
    </div>
    </div>
  );}
}
/*<button type="button" class="btn btn-outline-light">
      <a class="nav-link" href="https://www.youtube.com/">Nuestra Historia</a>
      </button>*/


      /* 
      <Button id="boton" onClick={handleClickOpenLogOn}>
            Registrarme
          </Button>
          <Dialog open={openLogOn} onClose={handleCloseLogOn} aria-labelledby="form-dialog-title2">
            <DialogTitle id="form-dialog-title2"><h2 id="form-dialog-title">Registrarme</h2></DialogTitle>
            <DialogContent>
              <DialogContentText id="outlined-dense">
                ¿No tenes una cuenta?
          Registrate y crea un nuevo usuario.
              </DialogContentText>
          <h2 id="form-dialog-title">Datos</h2>   
          <TextField
              id="outlined-dense"
              label="Nombre"
              placeholder="Nombre"
              fullWidth
              margin="normal"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
      <TextField
              id="outlined-dense"
              label="Direccion"
              placeholder="Direccion"
              fullWidth
              margin="normal"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
      <TextField
              id="outlined-dense"
              label="Telefono/Celular"
              placeholder="Telefono/Celular"
              fullWidth
              margin="normal"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
              <TextField
              id="outlined-email-input"
              label ="Email"
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="email"
              margin="normal"
              variant="outlined"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
        <TextField
              id="outlined-password-input"
              label="Password"
          fullWidth
              type="password"
              placeholder="Contraseña"
              autoComplete="current-password"
              margin="normal"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseLogOn} id="confirmar">
                Cancelar
              </Button>
              <Button onClick={handleCloseLogOn} id="confirmar">
              Registrarme
              </Button>
            </DialogActions>
          </Dialog>
      */